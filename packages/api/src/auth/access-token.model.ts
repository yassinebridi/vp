import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TAccessToken {
  @Field({ description: 'JWT access token' })
  accessToken: string;
}
