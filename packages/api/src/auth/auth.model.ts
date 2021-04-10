import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/@generated';
import { TAccessToken } from './access-token.model';

@ObjectType()
export class AuthUser extends TAccessToken {
  user: User;
}
