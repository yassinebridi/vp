import { Module } from '@nestjs/common';
import { PasswordService } from '../auth/password.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
  providers: [UserResolver, UserService, PasswordService, PrismaService],
})
export class UserModule {}
