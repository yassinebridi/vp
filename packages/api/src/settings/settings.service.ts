import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { FindUniqueSettingsArgs } from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSettingsInput } from './dto/update-settings.input';

@Injectable()
export class SettingsService {
  constructor(private prismaService: PrismaService) {}

  async getOneSettings(oneSettingsInput: FindUniqueSettingsArgs) {
    return await this.prismaService.settings.findUnique({
      ...oneSettingsInput,
    });
  }

  async updateSettings(updateSettingsInput: UpdateSettingsInput) {
    const { data, where } = updateSettingsInput;

    const settings = await this.prismaService.settings.findUnique({ where });
    if (!settings) {
      throw new NotFoundException("This settings doesn't exist");
    }

    try {
      await this.prismaService.settings.update({
        where,
        data,
      });

      return true;
    } catch (error) {
      throw new InternalServerErrorException(
        'Something went wrong, when updating this settings',
      );
    }
  }
}
