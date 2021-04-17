import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  FindManyCityArgs,
  FindUniqueCityArgs,
  City,
  CityCreateInput,
  CityWhereUniqueInput,
  UpdateOneCityArgs,
} from 'src/@generated';
import { CitiesService } from './cities.service';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly citiesService: CitiesService) {}

  @Query(() => [City])
  getAllCities(@Args() getAllCitiesInput: FindManyCityArgs) {
    return this.citiesService.getAllCities(getAllCitiesInput);
  }

  @Query(() => City)
  getOneCity(@Args() getOneCityInput: FindUniqueCityArgs) {
    return this.citiesService.getOneCity(getOneCityInput);
  }

  @Mutation(() => City)
  createCity(
    @Args('createCityInput') createCityInput: CityCreateInput,
  ) {
    return this.citiesService.createCity(createCityInput);
  }

  @Mutation(() => City)
  updateCity(@Args() updateCityInput: UpdateOneCityArgs) {
    return this.citiesService.updateCity(updateCityInput);
  }

  @Mutation(() => City)
  removeCity(
    @Args('whereCityInput') whereCityInput: CityWhereUniqueInput,
  ) {
    return this.citiesService.removeCity(whereCityInput);
  }

  @Mutation(() => Boolean)
  async bulkCity(@Args('number') number: number): Promise<boolean> {
    return await this.citiesService.bulkCities(number);
  }

  @Mutation(() => Boolean)
  async bulkDeleteCity(): Promise<boolean | Error> {
    return await this.citiesService.bulkDeleteCities();
  }
}
