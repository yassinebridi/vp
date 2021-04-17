import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';
import {
  CityCreateInput,
  CityWhereUniqueInput,
  FindManyCityArgs,
  FindUniqueCityArgs,
  UpdateOneCityArgs,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CitiesService {
  private readonly logger = new Logger(CitiesService.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly translateService: I18nRequestScopeService,
  ) {}

  async getAllCities(getAllCitiesInput: FindManyCityArgs) {
    return await this.prismaService.city.findMany(getAllCitiesInput);
  }

  async getOneCity(getOneCityInput: FindUniqueCityArgs) {
    return await this.prismaService.city.findUnique(getOneCityInput);
  }

  async createCity(createCityInput: CityCreateInput) {
    try {
      await this.prismaService.city.create({
        data: createCityInput,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('cities.create'),
      );
    }
  }

  async updateCity(updateCityInput: UpdateOneCityArgs) {
    const { data, where } = updateCityInput;

    const city = await this.prismaService.city.findUnique({
      where,
      select: { id: true },
    });
    if (!city) {
      throw new NotFoundException(
        await this.translateService.translate('cities.generics.no_item'),
      );
    }

    try {
      await this.prismaService.city.update({
        where,
        data,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('cities.update'),
      );
    }
  }

  async removeCity(where: CityWhereUniqueInput) {
    const city = await this.prismaService.city.findUnique({
      where,
      select: { id: true },
    });
    if (!city) {
      throw new NotFoundException(
        await this.translateService.translate('cities.generics.no_item'),
      );
    }
    try {
      await this.prismaService.city.delete({ where });

      return true;
    } catch (error) {
      this.logger.error(error);
      if (error.code === 'P2002') {
        throw new ConflictException(
          await this.translateService.translate('cities.generics.conflict'),
        );
      }
      throw new InternalServerErrorException(
        await this.translateService.translate('cities.remove'),
      );
    }
  }

  async bulkCities(number: number) {
    console.log('number: ', number);
    return true;
  }

  async bulkRemoveCities(): Promise<boolean | Error> {
    try {
      await this.prismaService.city.deleteMany({});

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new ConflictException(
        await this.translateService.translate('cities.generics.conflict'),
      );
    }
  }
}
