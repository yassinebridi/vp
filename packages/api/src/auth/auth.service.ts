import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { UserRole, UserWhereInput } from '../@generated';
import { SecurityConfig } from '../configs/config.interface';
import { PrismaService } from '../prisma/prisma.service';
import { isProd } from '../utils/helpers';
import { Request, Response } from 'express';
import { Profile as FacebookProfile } from 'passport-facebook';
import { Profile as GoogleProfile } from 'passport-google-oauth20';
import { TAccessToken } from './access-token.model';
import { LoginInput } from './dto/login.input';
import { RegisterInput } from './dto/register.input';
import { PasswordService } from './password.service';
import { TRefreshToken } from './refresh-token.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService,
  ) {}

  createGoogleUser(profile: GoogleProfile) {
    return this.prismaService.user.create({
      data: {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile._json.email,
        avatar: profile._json.picture,
        role: UserRole.visitor,
        googleId: profile.id,
        password: '',
        phoneNumber: 's',
      },
    });
  }

  updateGoogleUser(user: User, profile: GoogleProfile) {
    if (!user.avatar) {
      return this.prismaService.user.update({
        where: { id: user.id },
        data: {
          avatar: profile._json.picture,
          googleId: profile.id,
        },
      });
    } else {
      return this.prismaService.user.update({
        where: { id: user.id },
        data: {
          googleId: profile.id,
        },
      });
    }
  }

  createFacebookUser(profile: FacebookProfile) {
    return this.prismaService.user.create({
      data: {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile._json.email,
        avatar: profile._json.picture.data.url,
        role: UserRole.visitor,
        facebookId: profile.id,
        password: '',
        phoneNumber: 's',
      },
    });
  }

  updateFacebookUser(user: User, profile: FacebookProfile) {
    if (!user.avatar) {
      return this.prismaService.user.update({
        where: { id: user.id },
        data: {
          avatar: profile._json.picture.data.url,
          facebookId: profile.id,
        },
      });
    } else {
      return this.prismaService.user.update({
        where: { id: user.id },
        data: {
          facebookId: profile.id,
        },
      });
    }
  }

  async register(payload: RegisterInput, res: Response): Promise<TAccessToken> {
    payload.email = payload.email.toLowerCase();

    const hashedPassword = await this.passwordService.hashPassword(
      payload.password,
    );

    try {
      const user = await this.prismaService.user.create({
        data: {
          ...payload,
          password: hashedPassword,
          role: UserRole.visitor,
        },
      });

      const accessToken = this.generateAccessToken({
        userId: user.id,
      });

      const refreshToken = this.generateRefreshToken({
        userId: user.id,
      });

      this.sendRefreshToken(res, refreshToken.refreshToken);

      return accessToken;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError && e.code === 'P2002') {
        throw new ConflictException(`Email ${payload.email} already used.`);
      } else {
        throw new Error(e);
      }
    }
  }

  async login(data: LoginInput, res: Response): Promise<TAccessToken> {
    data.email = data.email.toLowerCase();
    const user = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new NotFoundException(`No user found for email: ${data.email}`);
    }

    const passwordValid = await this.passwordService.validatePassword(
      data.password,
      user.password,
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    const accessToken = this.generateAccessToken({
      userId: user.id,
    });

    const refreshToken = this.generateRefreshToken({
      userId: user.id,
    });

    this.sendRefreshToken(res, refreshToken.refreshToken);

    return accessToken;
  }

  validateUser(userId: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id: userId } });
  }

  async getAuthUser(where: UserWhereInput): Promise<User | null> {
    const matchingUsers = await this.prismaService.user.findMany({
      where,
    });

    if (matchingUsers.length === 0) {
      return null;
    }
    const [user] = matchingUsers;

    return user;
  }

  logout(res: Response): boolean {
    this.sendRefreshToken(res, '');
    return true;
  }

  getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)['userId'];
    return this.prismaService.user.findUnique({ where: { id } });
  }

  generateRefreshToken(payload: { userId: string }): TRefreshToken {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: securityConfig.refreshIn,
    });

    return {
      refreshToken,
    };
  }

  generateAccessToken(payload: { userId: string }): TAccessToken {
    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
    };
  }

  async doRefreshToken(res: Response, req: Request) {
    const token: string = req.cookies.rid;
    if (!token || token.length === 0) {
      return res.send({ ok: false, accessToken: '' });
    }

    let payload: { userId: string } = null;
    try {
      payload = this.jwtService.verify(token);
    } catch (err) {
      return res.send({ ok: false, accessToken: '' });
    }

    const { userId } = payload;
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.send({ ok: false, accessToken: '' });
    }

    const accessToken = this.generateAccessToken({ userId });
    const refreshToken = this.generateRefreshToken({ userId });

    this.sendRefreshToken(res, refreshToken.refreshToken);

    return res.send({
      ok: true,
      accessToken: accessToken.accessToken,
    });
  }

  sendRefreshToken(res: Response, refreshToken: string) {
    res.cookie('rid', refreshToken, {
      httpOnly: true,
      sameSite: isProd ? 'none' : 'lax',
      secure: isProd ? true : false,
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  }
}
