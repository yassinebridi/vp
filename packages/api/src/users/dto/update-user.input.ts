import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput, UserUpdateInput } from 'src/@generated';

@InputType()
export class UpdateUserInput {
  @Field(() => UserWhereUniqueInput)
  where: UserWhereUniqueInput;

  @Field(() => UserUpdateInput)
  data: UserUpdateInput;
}
