import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  Brand,
  BrandCreateInput,
  BrandWhereUniqueInput,
  DeleteManyBrandArgs,
  FindManyBrandArgs,
  FindUniqueBrandArgs,
  Product,
  UpdateManyBrandArgs,
  UpdateOneBrandArgs,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';
import { Brands } from './all-brands.model';
import { BrandsService } from './brands.service';

@Resolver(() => Brand)
export class BrandsResolver {
  constructor(
    private readonly brandsService: BrandsService,
    private readonly prismaService: PrismaService,
  ) {}

  @Query(() => Brands)
  getAllBrands(@Args() getAllBrandsInput: FindManyBrandArgs) {
    return this.brandsService.getAllBrands(getAllBrandsInput);
  }

  @Query(() => Number)
  countBrands(@Args() countBrandsInput: FindManyBrandArgs) {
    return this.brandsService.countBrands(countBrandsInput);
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
  updateBrands(@Args() updateBrandsInput: UpdateManyBrandArgs) {
    return this.brandsService.updateBrands(updateBrandsInput);
  }

  @Mutation(() => Boolean)
  removeBrand(@Args('whereBrandInput') whereBrandInput: BrandWhereUniqueInput) {
    return this.brandsService.removeBrand(whereBrandInput);
  }

  @Mutation(() => Boolean)
  removeBrands(@Args() removeBrandsInput: DeleteManyBrandArgs) {
    return this.brandsService.removeBrands(removeBrandsInput);
  }

  @Mutation(() => Boolean)
  async bulkBrands(
    @Args('number', { type: () => Int }) number: number,
  ): Promise<boolean> {
    return await this.brandsService.bulkBrands(number);
  }

  @Mutation(() => Boolean)
  async bulkRemoveBrands(): Promise<boolean | Error> {
    return await this.brandsService.bulkRemoveBrands();
  }

  @ResolveField('products', () => Product)
  async products(@Parent() brand: Brand) {
    return this.prismaService.product.findMany({
      where: { brand: { id: brand.id } },
    });
  }
}
