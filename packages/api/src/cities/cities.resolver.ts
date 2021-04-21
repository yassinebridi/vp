import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  FindManyCityArgs,
  FindUniqueCityArgs,
  City,
  CityCreateInput,
  CityWhereUniqueInput,
  UpdateOneCityArgs,
} from 'src/@generated';
import { Cities } from './all-cities.model';
import { CitiesService } from './cities.service';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly citiesService: CitiesService) {}

  @Query(() => Cities)
  getAllCities(@Args() getAllCitiesInput: FindManyCityArgs) {
    return this.citiesService.getAllCities(getAllCitiesInput);
  }

  @Query(() => City)
  getOneCity(@Args() getOneCityInput: FindUniqueCityArgs) {
    return this.citiesService.getOneCity(getOneCityInput);
  }

  @Mutation(() => Boolean)
  createCity(
    @Args('createCityInput') createCityInput: CityCreateInput,
  ) {
    return this.citiesService.createCity(createCityInput);
  }

  @Mutation(() => Boolean)
  updateCity(@Args() updateCityInput: UpdateOneCityArgs) {
    return this.citiesService.updateCity(updateCityInput);
  }

  @Mutation(() => Boolean)
  removeCity(
    @Args('whereCityInput') whereCityInput: CityWhereUniqueInput,
  ) {
    return this.citiesService.removeCity(whereCityInput);
  }

  @Mutation(() => Boolean)
  async bulkCities(
    @Args('number', { type: () => Int }) number: number,
  ): Promise<boolean> {
    return await this.citiesService.bulkCities(number);
  }

  @Mutation(() => Boolean)
  async bulkRemoveCities(): Promise<boolean | Error> {
    return await this.citiesService.bulkRemoveCities();
  }
}
