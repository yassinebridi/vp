import { UsePipes } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LoginSchema, RegisterSchema } from '@vp/common';
import { Response } from 'express';
import { YupValidationPipe } from '../shared/YupValidationPipe';
import { AuthUser } from './auth.model';
import { AuthService } from './auth.service';
import { GqlRes } from './decorators/gqlRes.decorator';
import { LoginInput } from './dto/login.input';
import { RegisterInput } from './dto/register.input';

@Resolver(() => AuthUser)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthUser)
  @UsePipes(new YupValidationPipe(RegisterSchema))
  register(@GqlRes() res, @Args('data') data: RegisterInput) {
    return this.authService.register(data, res);
  }

  @Mutation(() => AuthUser)
  @UsePipes(new YupValidationPipe(LoginSchema))
  login(@GqlRes() res: Response, @Args('data') data: LoginInput) {
    return this.authService.login(data, res);
  }

  @Mutation(() => Boolean)
  logout(@GqlRes() res: Response) {
    return this.authService.logout(res);
  }

  @ResolveField('user')
  async user(@Parent() auth: AuthUser) {
    return await this.authService.getUserFromToken(auth.accessToken);
  }
}
