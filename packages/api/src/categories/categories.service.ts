import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';
import {
  CategoryCreateInput,
  CategoryWhereUniqueInput,
  FindManyCategoryArgs,
  FindUniqueCategoryArgs,
  UpdateOneCategoryArgs,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly translateService: I18nRequestScopeService,
  ) {}

  async getAllCategories(getAllCategoriesInput: FindManyCategoryArgs) {
    return await this.prismaService.category.findMany(getAllCategoriesInput);
  }

  async getOneCategory(getOneCategoryInput: FindUniqueCategoryArgs) {
    return await this.prismaService.category.findUnique(getOneCategoryInput);
  }

  async createCategory(createCategoryInput: CategoryCreateInput) {
    try {
      await this.prismaService.category.create({
        data: createCategoryInput,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('categories.create'),
      );
    }
  }

  async updateCategory(updateCategoryInput: UpdateOneCategoryArgs) {
    const { data, where } = updateCategoryInput;

    const category = await this.prismaService.category.findUnique({
      where,
      select: { id: true },
    });
    if (!category) {
      throw new NotFoundException(
        await this.translateService.translate('categories.generics.no_item'),
      );
    }

    try {
      await this.prismaService.category.update({
        where,
        data,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('categories.update'),
      );
    }
  }

  async removeCategory(where: CategoryWhereUniqueInput) {
    const category = await this.prismaService.category.findUnique({
      where,
      select: { id: true },
    });
    if (!category) {
      throw new NotFoundException(
        await this.translateService.translate('categories.generics.no_item'),
      );
    }
    try {
      await this.prismaService.category.delete({ where });

      return true;
    } catch (error) {
      this.logger.error(error);
      if (error.code === 'P2002') {
        throw new ConflictException(
          await this.translateService.translate('categories.generics.conflict'),
        );
      }
      throw new InternalServerErrorException(
        await this.translateService.translate('categories.remove'),
      );
    }
  }

  async bulkCategories(number: number) {
    console.log('number: ', number);
    return true;
  }

  async bulkRemoveCategories(): Promise<boolean | Error> {
    try {
      await this.prismaService.category.deleteMany({});

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new ConflictException(
        await this.translateService.translate('categories.generics.conflict'),
      );
    }
  }
}
