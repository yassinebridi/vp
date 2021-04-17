import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PrismaService, CategoriesResolver, CategoriesService],
})
export class CategoriesModule {}
