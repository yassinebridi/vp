import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindUniqueSettingsArgs, Settings } from 'src/@generated';
import { UpdateSettingsInput } from './dto/update-settings.input';
import { SettingsService } from './settings.service';

@Resolver(() => Settings)
export class SettingsResolver {
  constructor(private readonly settingsService: SettingsService) {}

  @Query(() => Settings)
  getOneSettings(@Args() oneSettingsInput: FindUniqueSettingsArgs) {
    return this.settingsService.getOneSettings(oneSettingsInput);
  }

  @Mutation(() => Boolean)
  updateSettings(
    @Args('updateSettingsInput') updateSettingsInput: UpdateSettingsInput
  ) {
    return this.settingsService.updateSettings(updateSettingsInput);
  }
}
