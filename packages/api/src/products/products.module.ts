import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PrismaService, ProductsResolver, ProductsService],
})
export class ProductsModule {}
