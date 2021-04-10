import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TRefreshToken {
  @Field({ description: 'JWT refresh token' })
  refreshToken: string;
}
