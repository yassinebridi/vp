import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';
import {
  FindManyBrandArgs,
  FindUniqueBrandArgs,
  BrandCreateInput,
  BrandWhereUniqueInput,
  UpdateOneBrandArgs,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {
  private readonly logger = new Logger(BrandsService.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly translateService: I18nRequestScopeService,
  ) {}

  async getAllBrands(getAllBrandsInput: FindManyBrandArgs) {
    const brandsTransaction = await this.prismaService.$transaction([
      this.prismaService.brand.count(),
      this.prismaService.brand.findMany(getAllBrandsInput),
    ]);

    return {
      totalPages: brandsTransaction[0],
      nodes: brandsTransaction[1],
    };
  }

  async getOneBrand(getOneBrandInput: FindUniqueBrandArgs) {
    return await this.prismaService.brand.findUnique(getOneBrandInput);
  }

  async createBrand(createBrandInput: BrandCreateInput) {
    try {
      await this.prismaService.brand.create({
        data: createBrandInput,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('brands.create'),
      );
    }
  }

  async updateBrand(updateBrandInput: UpdateOneBrandArgs) {
    const { data, where } = updateBrandInput;

    const brand = await this.prismaService.brand.findUnique({
      where,
      select: { id: true },
    });
    if (!brand) {
      throw new NotFoundException(
        await this.translateService.translate('brands.generics.no_item'),
      );
    }

    try {
      await this.prismaService.brand.update({
        where,
        data,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('brands.update'),
      );
    }
  }

  async removeBrand(where: BrandWhereUniqueInput) {
    const brand = await this.prismaService.brand.findUnique({
      where,
      select: { id: true },
    });
    if (!brand) {
      throw new NotFoundException(
        await this.translateService.translate('brands.generics.no_item'),
      );
    }
    try {
      await this.prismaService.brand.delete({ where });

      return true;
    } catch (error) {
      this.logger.error(error);
      if (error.code === 'P2002') {
        throw new ConflictException(
          await this.translateService.translate('brands.generics.conflict'),
        );
      }
      throw new InternalServerErrorException(
        await this.translateService.translate('brands.remove'),
      );
    }
  }

  async bulkBrands(number: number) {
    console.log('number: ', number);
    return true;
  }

  async bulkRemoveBrands(): Promise<boolean | Error> {
    try {
      await this.prismaService.brand.deleteMany({});

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new ConflictException(
        await this.translateService.translate('brands.generics.conflict'),
      );
    }
  }
}
