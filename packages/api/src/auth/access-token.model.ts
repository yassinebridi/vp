import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TAccessToken {
  @Field(() => String, { description: 'JWT access token' })
  accessToken: string;
}
