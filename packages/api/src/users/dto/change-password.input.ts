import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ChangePasswordInput {
  @Field()
  oldPassword: string;

  @Field()
  newPassword: string;
}
