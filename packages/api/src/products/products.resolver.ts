import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  FindManyProductArgs,
  FindUniqueProductArgs,
  Product,
  ProductCreateInput,
  ProductWhereUniqueInput,
  UpdateOneProductArgs,
} from 'src/@generated';
import { Products } from './all-products.model';
import { ProductsService } from './products.service';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => Products)
  getAllProducts(@Args() getAllProductsInput: FindManyProductArgs) {
    return this.productsService.getAllProducts(getAllProductsInput);
  }

  @Query(() => Product)
  getOneProduct(@Args() getOneProductInput: FindUniqueProductArgs) {
    return this.productsService.getOneProduct(getOneProductInput);
  }

  @Mutation(() => Boolean)
  createProduct(
    @Args('createProductInput') createProductInput: ProductCreateInput,
  ) {
    return this.productsService.createProduct(createProductInput);
  }

  @Mutation(() => Boolean)
  updateProduct(@Args() updateProductInput: UpdateOneProductArgs) {
    return this.productsService.updateProduct(updateProductInput);
  }

  @Mutation(() => Boolean)
  removeProduct(
    @Args('whereProductInput') whereProductInput: ProductWhereUniqueInput,
  ) {
    return this.productsService.removeProduct(whereProductInput);
  }

  @Mutation(() => Boolean)
  async bulkProducts(
    @Args('number', { type: () => Int }) number: number,
  ): Promise<boolean> {
    return await this.productsService.bulkProducts(number);
  }

  @Mutation(() => Boolean)
  async bulkRemoveProducts(): Promise<boolean | Error> {
    return await this.productsService.bulkRemoveProducts();
  }
}
