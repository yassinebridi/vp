import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Profile, Strategy } from 'passport-facebook';
import { OauthConfig } from 'src/configs/config.interface';
import { AuthService } from './auth.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    private readonly authService: AuthService,
    readonly configService: ConfigService
  ) {
    super({
      clientID: configService.get<OauthConfig>('oauth').facebook.clientID,
      clientSecret: configService.get<OauthConfig>('oauth').facebook
        .clientSecret,
      callbackURL: configService.get<OauthConfig>('oauth').facebook.callbackURL,
      profileFields: configService.get<OauthConfig>('oauth').facebook
        .profileFields,
      scope: configService.get<OauthConfig>('oauth').facebook.scope,
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile
  ): Promise<User> {
    const user = await this.authService.getAuthUser({
      OR: [{ facebookId: profile.id }, { email: profile._json.email }],
    });
    if (!user) {
      return this.authService.createFacebookUser(profile);
    }
    if (!user.facebookId || !user.avatar) {
      return this.authService.updateFacebookUser(user, profile);
    }
    return user;
  }
}
