import { Field, InputType } from '@nestjs/graphql';
import { SettingsUpdateInput, SettingsWhereUniqueInput } from 'src/@generated';

@InputType()
export class UpdateSettingsInput {
  @Field(() => SettingsWhereUniqueInput)
  where: SettingsWhereUniqueInput;

  @Field(() => SettingsUpdateInput)
  data: SettingsUpdateInput;
}
