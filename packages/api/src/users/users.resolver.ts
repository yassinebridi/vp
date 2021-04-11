import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
  UserWhereUniqueInput,
} from 'src/@generated';
import { UserService } from 'src/users/users.service';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from './user.decorator';

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(
    private userService: UserService,
    private prisma: PrismaService,
  ) {}

  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @Query(() => [User])
  getAllUsers(@Args() usersInput: FindManyUserArgs) {
    return this.userService.getAllUsers(usersInput);
  }

  @Query(() => User)
  getOneUser(@Args() oneUserInput: FindUniqueUserArgs) {
    return this.userService.getOneUser(oneUserInput);
  }

  @Mutation(() => [User])
  searchUsers(@Args() searchUsersInput: FindManyUserArgs) {
    return this.userService.searchUsers(searchUsersInput);
  }

  @Mutation(() => Boolean)
  deleteUser(@Args('whereUserInput') whereUserInput: UserWhereUniqueInput) {
    return this.userService.deleteUser(whereUserInput);
  }

  @Mutation(() => Boolean)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.updateUser(updateUserInput);
  }

  // @UseGuards(GqlAuthGuard)
  // @Mutation(() => User)
  // async updateUser(
  //   @UserEntity() user: User,
  //   @Args('data') newUserData: UpdateUserInput
  // ) {
  //   return this.userService.updateUser(user.id, newUserData);
  // }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async changePassword(
    @UserEntity() user: User,
    @Args('data') changePassword: ChangePasswordInput,
  ) {
    return this.userService.changePassword(
      user.id,
      user.password,
      changePassword,
    );
  }

  @ResolveField('name', () => String)
  async name(@Parent() user: User) {
    return `${user.firstname} ${user.lastname}`;
  }
}
