import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Brand,
  BrandCreateInput,
  BrandWhereUniqueInput,
  FindManyBrandArgs,
  FindUniqueBrandArgs,
  UpdateOneBrandArgs,
} from 'src/@generated';
import { BrandsService } from './brands.service';

@Resolver(() => Brand)
export class BrandsResolver {
  constructor(private readonly brandsService: BrandsService) {}

  @Query(() => [Brand])
  getAllBrands(@Args() getAllBrandsInput: FindManyBrandArgs) {
    return this.brandsService.getAllBrands(getAllBrandsInput);
  }

  @Query(() => Brand)
  getOneBrand(@Args() getOneBrandInput: FindUniqueBrandArgs) {
    return this.brandsService.getOneBrand(getOneBrandInput);
  }

  @Mutation(() => Boolean)
  createBrand(@Args('createBrandInput') createBrandInput: BrandCreateInput) {
    return this.brandsService.createBrand(createBrandInput);
  }

  @Mutation(() => Boolean)
  updateBrand(@Args() updateBrandInput: UpdateOneBrandArgs) {
    return this.brandsService.updateBrand(updateBrandInput);
  }

  @Mutation(() => Boolean)
  removeBrand(@Args('whereBrandInput') whereBrandInput: BrandWhereUniqueInput) {
    return this.brandsService.removeBrand(whereBrandInput);
  }

  @Mutation(() => Boolean)
  async bulkBrand(@Args('number') number: number): Promise<boolean> {
    return await this.brandsService.bulkBrands(number);
  }

  @Mutation(() => Boolean)
  async bulkDeleteBrand(): Promise<boolean | Error> {
    return await this.brandsService.bulkDeleteBrands();
  }
}
