import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
  constructor(private readonly prismaService: PrismaService) {}

  async getAllProducts(getAllProductsInput: FindManyProductArgs) {
    return await this.prismaService.product.findMany(getAllProductsInput);
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
      throw new InternalServerErrorException('حدث خطأ ما عند إنشاء هذه مصاريف');
    }
  }

  async updateProduct(updateProductInput: UpdateOneProductArgs) {
    const { data, where } = updateProductInput;

    const product = await this.prismaService.product.findUnique({
      where,
      select: { id: true },
    });
    if (!product) {
      throw new NotFoundException('هذه مصاريف غير موجود');
    }

    try {
      await this.prismaService.product.update({
        where,
        data,
      });

      return true;
    } catch (error) {
      throw new InternalServerErrorException('حدث خطأ ما عند إنشاء هذه مصاريف');
    }
  }

  async removeProduct(where: ProductWhereUniqueInput) {
    const product = await this.prismaService.product.findUnique({
      where,
      select: { id: true },
    });
    if (!product) {
      throw new NotFoundException('هذه مصاريف غير موجود');
    }
    try {
      await this.prismaService.product.delete({ where });

      return true;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('لا يمكنك الحذف لأن هناك تعارض');
      }
      throw new InternalServerErrorException('حدث خطأ ما عند حذف هذه مصاريف');
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

  async bulkDeleteProducts(): Promise<boolean | Error> {
    try {
      await this.prismaService.product.deleteMany({});

      return true;
    } catch (error) {
      throw new ConflictException(
        'Probably a conflict, try deleting the related entities first.',
      );
    }
  }
}
