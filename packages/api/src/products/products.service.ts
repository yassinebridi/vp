import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';
import {
  FindManyProductArgs,
  FindUniqueProductArgs,
  ProductCreateInput,
  ProductPublishStatus,
  ProductSeason,
  ProductSize,
  ProductStatus,
  ProductWhereUniqueInput,
  UpdateOneProductArgs,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly translateService: I18nRequestScopeService,
  ) {}

  async getAllProducts(getAllProductsInput: FindManyProductArgs) {
    const productsTransaction = await this.prismaService.$transaction([
      this.prismaService.product.count(getAllProductsInput),
      this.prismaService.product.findMany(getAllProductsInput),
    ]);

    return {
      totalPages: productsTransaction[0],
      nodes: productsTransaction[1],
    };
  }

  async getOneProduct(getOneProductInput: FindUniqueProductArgs) {
    return await this.prismaService.product.findUnique(getOneProductInput);
  }

  async createProduct(createProductInput: ProductCreateInput) {
    try {
      await this.prismaService.product.create({
        data: createProductInput,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('products.create'),
      );
    }
  }

  async updateProduct(updateProductInput: UpdateOneProductArgs) {
    const { data, where } = updateProductInput;

    const product = await this.prismaService.product.findUnique({
      where,
      select: { id: true },
    });
    if (!product) {
      throw new NotFoundException(
        await this.translateService.translate('products.generics.no_item'),
      );
    }

    try {
      await this.prismaService.product.update({
        where,
        data,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('products.update'),
      );
    }
  }

  async removeProduct(where: ProductWhereUniqueInput) {
    const product = await this.prismaService.product.findUnique({
      where,
      select: { id: true },
    });
    if (!product) {
      throw new NotFoundException(
        await this.translateService.translate('products.generics.no_item'),
      );
    }
    try {
      await this.prismaService.product.delete({ where });

      return true;
    } catch (error) {
      this.logger.error(error);
      if (error.code === 'P2002') {
        throw new ConflictException(
          await this.translateService.translate('products.generics.conflict'),
        );
      }
      throw new InternalServerErrorException(
        await this.translateService.translate('products.remove'),
      );
    }
  }

  async bulkProducts(number: number) {
    let i: number;
    for (i = 0; i < number; i++) {
      await this.prismaService.product.create({
        data: {
          title: '',
          desc: '',
          size: ProductSize.xl,
          season: ProductSeason.spring,
          price: 50,
          viewsNumber: 122,
          productStatus: ProductStatus.like_new,
          publishStatus: ProductPublishStatus.published,
          dateOfPurchase: new Date(),
          author: {
            connect: {
              email: 'ybridi@gmail.com',
            },
          },
          brand: {
            create: {
              name: '',
            },
          },
          city: {
            create: {
              name: '',
            },
          },
          category: {
            create: {
              name: '',
            },
          },
          images: {
            createMany: {
              skipDuplicates: true,
              data: [
                {
                  title: '',
                  desc: '',
                  url: '',
                },
              ],
            },
          },
        },
      });
    }
    return true;
  }

  async bulkRemoveProducts(): Promise<boolean | Error> {
    try {
      await this.prismaService.product.deleteMany({});

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new ConflictException(
        await this.translateService.translate('products.generics.conflict'),
      );
    }
  }
}
