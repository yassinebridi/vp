import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Category,
  CategoryCreateInput,
  CategoryWhereUniqueInput,
  FindManyCategoryArgs,
  FindUniqueCategoryArgs,
  UpdateOneCategoryArgs,
} from 'src/@generated';
import { CategoriesService } from './categories.service';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => [Category])
  getAllCategories(@Args() getAllCategoriesInput: FindManyCategoryArgs) {
    return this.categoriesService.getAllCategories(getAllCategoriesInput);
  }

  @Query(() => Category)
  getOneCategory(@Args() getOneCategoryInput: FindUniqueCategoryArgs) {
    return this.categoriesService.getOneCategory(getOneCategoryInput);
  }

  @Mutation(() => Boolean)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CategoryCreateInput,
  ) {
    return this.categoriesService.createCategory(createCategoryInput);
  }

  @Mutation(() => Boolean)
  updateCategory(@Args() updateCategoryInput: UpdateOneCategoryArgs) {
    return this.categoriesService.updateCategory(updateCategoryInput);
  }

  @Mutation(() => Boolean)
  removeCategory(
    @Args('whereCategoryInput') whereCategoryInput: CategoryWhereUniqueInput,
  ) {
    return this.categoriesService.removeCategory(whereCategoryInput);
  }

  @Mutation(() => Boolean)
  async bulkCategory(@Args('number') number: number): Promise<boolean> {
    return await this.categoriesService.bulkCategories(number);
  }

  @Mutation(() => Boolean)
  async bulkDeleteCategory(): Promise<boolean | Error> {
    return await this.categoriesService.bulkDeleteCategories();
  }
}
