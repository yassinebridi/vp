import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Profile, Strategy } from 'passport-google-oauth20';
import { OauthConfig } from 'src/configs/config.interface';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly authService: AuthService,
    readonly configService: ConfigService,
  ) {
    super({
      clientID: configService.get<OauthConfig>('oauth').google.clientID,
      clientSecret: configService.get<OauthConfig>('oauth').google.clientSecret,
      callbackURL: configService.get<OauthConfig>('oauth').google.callbackURL,
      scope: configService.get<OauthConfig>('oauth').google.scope,
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ): Promise<User> {
    const user = await this.authService.getAuthUser({
      OR: [{ googleId: profile.id }, { email: profile._json.email }],
    });
    if (!user) {
      return this.authService.createGoogleUser(profile);
    }
    if (!user.googleId || !user.avatar) {
      return this.authService.updateGoogleUser(user, profile);
    }
    return user;
  }
}
