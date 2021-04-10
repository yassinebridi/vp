import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {
  FindManyUserArgs,
  FindUniqueUserArgs,
  UserWhereUniqueInput,
} from 'src/@generated';
import { PasswordService } from 'src/auth/password.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private passwordService: PasswordService,
  ) {}

  async getAllUsers(usersInput: FindManyUserArgs) {
    const { skip, take, where, cursor, orderBy, distinct } = usersInput;
    return await this.prismaService.user.findMany({
      skip,
      take,
      where,
      cursor,
      orderBy,
      distinct,
    });
  }

  async getOneUser(oneUserInput: FindUniqueUserArgs) {
    return await this.prismaService.user.findUnique({
      where: oneUserInput.where,
    });
  }

  async searchUsers(searchUsersInput: FindManyUserArgs) {
    const { skip, take, where, cursor, orderBy } = searchUsersInput;
    return await this.prismaService.user.findMany({
      skip,
      take,
      where,
      cursor,
      orderBy,
    });
  }

  async updateUser(updateUserInput: UpdateUserInput) {
    const { data, where } = updateUserInput;

    const user = await this.prismaService.user.findUnique({ where });
    if (!user) {
      throw new NotFoundException("This user doesn't exisit");
    }

    try {
      await this.prismaService.user.update({
        where,
        data,
      });

      return true;
    } catch (error) {
      throw new InternalServerErrorException(
        'Something went wrong, when updating this user',
      );
    }
  }

  async deleteUser(where: UserWhereUniqueInput) {
    const user = await this.prismaService.user.findUnique({ where });
    if (!user) {
      throw new NotFoundException("This user doesn't exisit");
    }
    try {
      await this.prismaService.user.delete({ where });
      return true;
    } catch (error) {
      throw new InternalServerErrorException(
        'Something went wrong, when deleting this user',
      );
    }
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordInput,
  ) {
    const passwordValid = await this.passwordService.validatePassword(
      changePassword.oldPassword,
      userPassword,
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    const hashedPassword = await this.passwordService.hashPassword(
      changePassword.newPassword,
    );

    return this.prismaService.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id: userId },
    });
  }
}
