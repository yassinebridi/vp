import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SettingsResolver } from './settings.resolver';
import { SettingsService } from './settings.service';

@Module({
  providers: [PrismaService, SettingsResolver, SettingsService],
})
export class SettingsModule {}
