import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/refresh_token')
  async refreshToken(@Res() res, @Req() req): Promise<any> {
    return await this.authService.doRefreshToken(res, req);
  }

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async google() {
    return;
  }

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    const refreshToken = await this.authService.generateRefreshToken({
      userId: (req.user as User).id,
    });

    this.authService.sendRefreshToken(res, refreshToken.refreshToken);
    res.redirect(301, `${process.env.CLIENT_URL}`);
  }

  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebook() {
    return;
  }

  @Get('/facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookCallback(@Req() req: Request, @Res() res: Response) {
    const refreshToken = await this.authService.generateRefreshToken({
      userId: (req.user as User).id,
    });

    this.authService.sendRefreshToken(res, refreshToken.refreshToken);
    res.redirect(301, `${process.env.CLIENT_URL}`);
  }
}
