import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { client } from '../../utils/config/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  /** JWT access token */
  accessToken: Scalars['String'];
  user: User;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['ID'];
  name: Scalars['String'];
  products?: Maybe<Array<Product>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type BrandCountAggregate = {
  __typename?: 'BrandCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type BrandCreateNestedOneWithoutProductsInput = {
  create?: Maybe<BrandCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<BrandCreateOrConnectWithoutProductsInput>;
  connect?: Maybe<BrandWhereUniqueInput>;
};

export type BrandCreateOrConnectWithoutProductsInput = {
  where: BrandWhereUniqueInput;
  create: BrandCreateWithoutProductsInput;
};

export type BrandCreateWithoutProductsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BrandMaxAggregate = {
  __typename?: 'BrandMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BrandMinAggregate = {
  __typename?: 'BrandMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BrandRelationFilter = {
  is?: Maybe<BrandWhereInput>;
  isNot?: Maybe<BrandWhereInput>;
};

export type BrandUpdateOneRequiredWithoutProductsInput = {
  create?: Maybe<BrandCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<BrandCreateOrConnectWithoutProductsInput>;
  upsert?: Maybe<BrandUpsertWithoutProductsInput>;
  connect?: Maybe<BrandWhereUniqueInput>;
  update?: Maybe<BrandUpdateWithoutProductsInput>;
};

export type BrandUpdateWithoutProductsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BrandUpsertWithoutProductsInput = {
  update: BrandUpdateWithoutProductsInput;
  create: BrandCreateWithoutProductsInput;
};

export type BrandWhereInput = {
  AND?: Maybe<Array<BrandWhereInput>>;
  OR?: Maybe<Array<BrandWhereInput>>;
  NOT?: Maybe<Array<BrandWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  products?: Maybe<ProductListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type BrandWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  products?: Maybe<Array<Product>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type CategoryCreateNestedOneWithoutProductsInput = {
  create?: Maybe<CategoryCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutProductsInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
};

export type CategoryCreateOrConnectWithoutProductsInput = {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateWithoutProductsInput;
};

export type CategoryCreateWithoutProductsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryRelationFilter = {
  is?: Maybe<CategoryWhereInput>;
  isNot?: Maybe<CategoryWhereInput>;
};

export type CategoryUpdateOneRequiredWithoutProductsInput = {
  create?: Maybe<CategoryCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutProductsInput>;
  upsert?: Maybe<CategoryUpsertWithoutProductsInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
  update?: Maybe<CategoryUpdateWithoutProductsInput>;
};

export type CategoryUpdateWithoutProductsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutProductsInput = {
  update: CategoryUpdateWithoutProductsInput;
  create: CategoryCreateWithoutProductsInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  products?: Maybe<ProductListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type City = {
  __typename?: 'City';
  id: Scalars['ID'];
  name: Scalars['String'];
  products?: Maybe<Array<Product>>;
  users?: Maybe<Array<User>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CityCountAggregate = {
  __typename?: 'CityCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type CityCreateNestedOneWithoutProductsInput = {
  create?: Maybe<CityCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<CityCreateOrConnectWithoutProductsInput>;
  connect?: Maybe<CityWhereUniqueInput>;
};

export type CityCreateNestedOneWithoutUsersInput = {
  create?: Maybe<CityCreateWithoutUsersInput>;
  connectOrCreate?: Maybe<CityCreateOrConnectWithoutUsersInput>;
  connect?: Maybe<CityWhereUniqueInput>;
};

export type CityCreateOrConnectWithoutProductsInput = {
  where: CityWhereUniqueInput;
  create: CityCreateWithoutProductsInput;
};

export type CityCreateOrConnectWithoutUsersInput = {
  where: CityWhereUniqueInput;
  create: CityCreateWithoutUsersInput;
};

export type CityCreateWithoutProductsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserCreateNestedManyWithoutCityInput>;
};

export type CityCreateWithoutUsersInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  products?: Maybe<ProductCreateNestedManyWithoutCityInput>;
};

export type CityMaxAggregate = {
  __typename?: 'CityMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityMinAggregate = {
  __typename?: 'CityMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityRelationFilter = {
  is?: Maybe<CityWhereInput>;
  isNot?: Maybe<CityWhereInput>;
};

export type CityUpdateOneRequiredWithoutProductsInput = {
  create?: Maybe<CityCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<CityCreateOrConnectWithoutProductsInput>;
  upsert?: Maybe<CityUpsertWithoutProductsInput>;
  connect?: Maybe<CityWhereUniqueInput>;
  update?: Maybe<CityUpdateWithoutProductsInput>;
};

export type CityUpdateOneWithoutUsersInput = {
  create?: Maybe<CityCreateWithoutUsersInput>;
  connectOrCreate?: Maybe<CityCreateOrConnectWithoutUsersInput>;
  upsert?: Maybe<CityUpsertWithoutUsersInput>;
  connect?: Maybe<CityWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CityUpdateWithoutUsersInput>;
};

export type CityUpdateWithoutProductsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  users?: Maybe<UserUpdateManyWithoutCityInput>;
};

export type CityUpdateWithoutUsersInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutCityInput>;
};

export type CityUpsertWithoutProductsInput = {
  update: CityUpdateWithoutProductsInput;
  create: CityCreateWithoutProductsInput;
};

export type CityUpsertWithoutUsersInput = {
  update: CityUpdateWithoutUsersInput;
  create: CityCreateWithoutUsersInput;
};

export type CityWhereInput = {
  AND?: Maybe<Array<CityWhereInput>>;
  OR?: Maybe<Array<CityWhereInput>>;
  NOT?: Maybe<Array<CityWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  products?: Maybe<ProductListRelationFilter>;
  users?: Maybe<UserListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CityWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type EnumProductPublishStatusFieldUpdateOperationsInput = {
  set?: Maybe<ProductPublishStatus>;
};

export type EnumProductPublishStatusFilter = {
  equals?: Maybe<ProductPublishStatus>;
  in?: Maybe<Array<ProductPublishStatus>>;
  notIn?: Maybe<Array<ProductPublishStatus>>;
  not?: Maybe<NestedEnumProductPublishStatusFilter>;
};

export type EnumProductSeasonFieldUpdateOperationsInput = {
  set?: Maybe<ProductSeason>;
};

export type EnumProductSeasonFilter = {
  equals?: Maybe<ProductSeason>;
  in?: Maybe<Array<ProductSeason>>;
  notIn?: Maybe<Array<ProductSeason>>;
  not?: Maybe<NestedEnumProductSeasonFilter>;
};

export type EnumProductSizeFieldUpdateOperationsInput = {
  set?: Maybe<ProductSize>;
};

export type EnumProductSizeFilter = {
  equals?: Maybe<ProductSize>;
  in?: Maybe<Array<ProductSize>>;
  notIn?: Maybe<Array<ProductSize>>;
  not?: Maybe<NestedEnumProductSizeFilter>;
};

export type EnumProductStatusFieldUpdateOperationsInput = {
  set?: Maybe<ProductStatus>;
};

export type EnumProductStatusFilter = {
  equals?: Maybe<ProductStatus>;
  in?: Maybe<Array<ProductStatus>>;
  notIn?: Maybe<Array<ProductStatus>>;
  not?: Maybe<NestedEnumProductStatusFilter>;
};

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: Maybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<UserRole>>;
  notIn?: Maybe<Array<UserRole>>;
  not?: Maybe<NestedEnumUserRoleFilter>;
};

export type EnumUserStatusFieldUpdateOperationsInput = {
  set?: Maybe<UserStatus>;
};

export type EnumUserStatusFilter = {
  equals?: Maybe<UserStatus>;
  in?: Maybe<Array<UserStatus>>;
  notIn?: Maybe<Array<UserStatus>>;
  not?: Maybe<NestedEnumUserStatusFilter>;
};

export type Favorite = {
  __typename?: 'Favorite';
  id: Scalars['ID'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FavoriteCountAggregate = {
  __typename?: 'FavoriteCountAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type FavoriteCreateManyProductInput = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FavoriteCreateManyProductInputEnvelope = {
  data: Array<FavoriteCreateManyProductInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FavoriteCreateManyUserInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FavoriteCreateManyUserInputEnvelope = {
  data: Array<FavoriteCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FavoriteCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<FavoriteCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<FavoriteCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<FavoriteCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<FavoriteWhereUniqueInput>>;
};

export type FavoriteCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<FavoriteCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<FavoriteCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<FavoriteCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<FavoriteWhereUniqueInput>>;
};

export type FavoriteCreateOrConnectWithoutProductInput = {
  where: FavoriteWhereUniqueInput;
  create: FavoriteCreateWithoutProductInput;
};

export type FavoriteCreateOrConnectWithoutUserInput = {
  where: FavoriteWhereUniqueInput;
  create: FavoriteCreateWithoutUserInput;
};

export type FavoriteCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserCreateNestedOneWithoutFavoritesInput>;
};

export type FavoriteCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  product?: Maybe<ProductCreateNestedOneWithoutFavoritesInput>;
};

export type FavoriteListRelationFilter = {
  every?: Maybe<FavoriteWhereInput>;
  some?: Maybe<FavoriteWhereInput>;
  none?: Maybe<FavoriteWhereInput>;
};

export type FavoriteMaxAggregate = {
  __typename?: 'FavoriteMaxAggregate';
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FavoriteMinAggregate = {
  __typename?: 'FavoriteMinAggregate';
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FavoriteScalarWhereInput = {
  AND?: Maybe<Array<FavoriteScalarWhereInput>>;
  OR?: Maybe<Array<FavoriteScalarWhereInput>>;
  NOT?: Maybe<Array<FavoriteScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringNullableFilter>;
  productId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FavoriteUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FavoriteUpdateManyWithWhereWithoutProductInput = {
  where: FavoriteScalarWhereInput;
  data: FavoriteUpdateManyMutationInput;
};

export type FavoriteUpdateManyWithWhereWithoutUserInput = {
  where: FavoriteScalarWhereInput;
  data: FavoriteUpdateManyMutationInput;
};

export type FavoriteUpdateManyWithoutProductInput = {
  create?: Maybe<Array<FavoriteCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<FavoriteCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<FavoriteUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<FavoriteCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  set?: Maybe<Array<FavoriteWhereUniqueInput>>;
  disconnect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  delete?: Maybe<Array<FavoriteWhereUniqueInput>>;
  update?: Maybe<Array<FavoriteUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<FavoriteUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<FavoriteScalarWhereInput>>;
};

export type FavoriteUpdateManyWithoutUserInput = {
  create?: Maybe<Array<FavoriteCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<FavoriteCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<FavoriteUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<FavoriteCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  set?: Maybe<Array<FavoriteWhereUniqueInput>>;
  disconnect?: Maybe<Array<FavoriteWhereUniqueInput>>;
  delete?: Maybe<Array<FavoriteWhereUniqueInput>>;
  update?: Maybe<Array<FavoriteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<FavoriteUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<FavoriteScalarWhereInput>>;
};

export type FavoriteUpdateWithWhereUniqueWithoutProductInput = {
  where: FavoriteWhereUniqueInput;
  data: FavoriteUpdateWithoutProductInput;
};

export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
  where: FavoriteWhereUniqueInput;
  data: FavoriteUpdateWithoutUserInput;
};

export type FavoriteUpdateWithoutProductInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutFavoritesInput>;
};

export type FavoriteUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneWithoutFavoritesInput>;
};

export type FavoriteUpsertWithWhereUniqueWithoutProductInput = {
  where: FavoriteWhereUniqueInput;
  update: FavoriteUpdateWithoutProductInput;
  create: FavoriteCreateWithoutProductInput;
};

export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
  where: FavoriteWhereUniqueInput;
  update: FavoriteUpdateWithoutUserInput;
  create: FavoriteCreateWithoutUserInput;
};

export type FavoriteWhereInput = {
  AND?: Maybe<Array<FavoriteWhereInput>>;
  OR?: Maybe<Array<FavoriteWhereInput>>;
  NOT?: Maybe<Array<FavoriteWhereInput>>;
  id?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringNullableFilter>;
  product?: Maybe<ProductRelationFilter>;
  productId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FavoriteWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type FloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['ID'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type LikeCountAggregate = {
  __typename?: 'LikeCountAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type LikeCreateManyProductInput = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LikeCreateManyProductInputEnvelope = {
  data: Array<LikeCreateManyProductInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LikeCreateManyUserInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LikeCreateManyUserInputEnvelope = {
  data: Array<LikeCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LikeCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<LikeCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<LikeCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateNestedManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutUserInput>>;
  createMany?: Maybe<LikeCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateOrConnectWithoutProductInput = {
  where: LikeWhereUniqueInput;
  create: LikeCreateWithoutProductInput;
};

export type LikeCreateOrConnectWithoutUserInput = {
  where: LikeWhereUniqueInput;
  create: LikeCreateWithoutUserInput;
};

export type LikeCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserCreateNestedOneWithoutLikesInput>;
};

export type LikeCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  product?: Maybe<ProductCreateNestedOneWithoutLikesInput>;
};

export type LikeListRelationFilter = {
  every?: Maybe<LikeWhereInput>;
  some?: Maybe<LikeWhereInput>;
  none?: Maybe<LikeWhereInput>;
};

export type LikeMaxAggregate = {
  __typename?: 'LikeMaxAggregate';
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LikeMinAggregate = {
  __typename?: 'LikeMinAggregate';
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LikeScalarWhereInput = {
  AND?: Maybe<Array<LikeScalarWhereInput>>;
  OR?: Maybe<Array<LikeScalarWhereInput>>;
  NOT?: Maybe<Array<LikeScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringNullableFilter>;
  productId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type LikeUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LikeUpdateManyWithWhereWithoutProductInput = {
  where: LikeScalarWhereInput;
  data: LikeUpdateManyMutationInput;
};

export type LikeUpdateManyWithWhereWithoutUserInput = {
  where: LikeScalarWhereInput;
  data: LikeUpdateManyMutationInput;
};

export type LikeUpdateManyWithoutProductInput = {
  create?: Maybe<Array<LikeCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<LikeCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
};

export type LikeUpdateManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<LikeCreateOrConnectWithoutUserInput>>;
  upsert?: Maybe<Array<LikeUpsertWithWhereUniqueWithoutUserInput>>;
  createMany?: Maybe<LikeCreateManyUserInputEnvelope>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
  set?: Maybe<Array<LikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<LikeWhereUniqueInput>>;
  delete?: Maybe<Array<LikeWhereUniqueInput>>;
  update?: Maybe<Array<LikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<LikeUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<LikeScalarWhereInput>>;
};

export type LikeUpdateWithWhereUniqueWithoutProductInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutProductInput;
};

export type LikeUpdateWithWhereUniqueWithoutUserInput = {
  where: LikeWhereUniqueInput;
  data: LikeUpdateWithoutUserInput;
};

export type LikeUpdateWithoutProductInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutLikesInput>;
};

export type LikeUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneWithoutLikesInput>;
};

export type LikeUpsertWithWhereUniqueWithoutProductInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutProductInput;
  create: LikeCreateWithoutProductInput;
};

export type LikeUpsertWithWhereUniqueWithoutUserInput = {
  where: LikeWhereUniqueInput;
  update: LikeUpdateWithoutUserInput;
  create: LikeCreateWithoutUserInput;
};

export type LikeWhereInput = {
  AND?: Maybe<Array<LikeWhereInput>>;
  OR?: Maybe<Array<LikeWhereInput>>;
  NOT?: Maybe<Array<LikeWhereInput>>;
  id?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringNullableFilter>;
  product?: Maybe<ProductRelationFilter>;
  productId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type LikeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: AuthUser;
  login: AuthUser;
  logout: Scalars['Boolean'];
  searchUsers: Array<User>;
  deleteUser: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
  changePassword: User;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationSearchUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type MutationDeleteUserArgs = {
  whereUserInput: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedEnumProductPublishStatusFilter = {
  equals?: Maybe<ProductPublishStatus>;
  in?: Maybe<Array<ProductPublishStatus>>;
  notIn?: Maybe<Array<ProductPublishStatus>>;
  not?: Maybe<NestedEnumProductPublishStatusFilter>;
};

export type NestedEnumProductSeasonFilter = {
  equals?: Maybe<ProductSeason>;
  in?: Maybe<Array<ProductSeason>>;
  notIn?: Maybe<Array<ProductSeason>>;
  not?: Maybe<NestedEnumProductSeasonFilter>;
};

export type NestedEnumProductSizeFilter = {
  equals?: Maybe<ProductSize>;
  in?: Maybe<Array<ProductSize>>;
  notIn?: Maybe<Array<ProductSize>>;
  not?: Maybe<NestedEnumProductSizeFilter>;
};

export type NestedEnumProductStatusFilter = {
  equals?: Maybe<ProductStatus>;
  in?: Maybe<Array<ProductStatus>>;
  notIn?: Maybe<Array<ProductStatus>>;
  not?: Maybe<NestedEnumProductStatusFilter>;
};

export type NestedEnumUserRoleFilter = {
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<UserRole>>;
  notIn?: Maybe<Array<UserRole>>;
  not?: Maybe<NestedEnumUserRoleFilter>;
};

export type NestedEnumUserStatusFilter = {
  equals?: Maybe<UserStatus>;
  in?: Maybe<Array<UserStatus>>;
  notIn?: Maybe<Array<UserStatus>>;
  not?: Maybe<NestedEnumUserStatusFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  title: Scalars['String'];
  desc: Scalars['String'];
  price: Scalars['Float'];
  size: ProductSize;
  season: ProductSeason;
  dateOfPurchase: Scalars['DateTime'];
  viewsNumber: Scalars['Int'];
  images?: Maybe<Array<ProductImage>>;
  city: City;
  cityId: Scalars['String'];
  category: Category;
  categoryId: Scalars['String'];
  brand: Brand;
  brandId: Scalars['String'];
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  favorites?: Maybe<Array<Favorite>>;
  likes?: Maybe<Array<Like>>;
  publishStatus: ProductPublishStatus;
  productStatus: ProductStatus;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  price: Scalars['Float'];
  viewsNumber: Scalars['Float'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  desc?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  size?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  dateOfPurchase?: Maybe<Scalars['Int']>;
  viewsNumber: Scalars['Int'];
  cityId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  brandId?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['Int']>;
  publishStatus?: Maybe<Scalars['Int']>;
  productStatus?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type ProductCreateManyAuthorInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  desc: Scalars['String'];
  price: Scalars['Float'];
  size: ProductSize;
  season: ProductSeason;
  dateOfPurchase: Scalars['DateTime'];
  viewsNumber: Scalars['Int'];
  cityId: Scalars['String'];
  categoryId: Scalars['String'];
  brandId: Scalars['String'];
  publishStatus: ProductPublishStatus;
  productStatus: ProductStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateManyAuthorInputEnvelope = {
  data: Array<ProductCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCreateManyCityInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  desc: Scalars['String'];
  price: Scalars['Float'];
  size: ProductSize;
  season: ProductSeason;
  dateOfPurchase: Scalars['DateTime'];
  viewsNumber: Scalars['Int'];
  categoryId: Scalars['String'];
  brandId: Scalars['String'];
  authorId?: Maybe<Scalars['String']>;
  publishStatus: ProductPublishStatus;
  productStatus: ProductStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateManyCityInputEnvelope = {
  data: Array<ProductCreateManyCityInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<ProductCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutAuthorInput>>;
  createMany?: Maybe<ProductCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedManyWithoutCityInput = {
  create?: Maybe<Array<ProductCreateWithoutCityInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutCityInput>>;
  createMany?: Maybe<ProductCreateManyCityInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateNestedOneWithoutFavoritesInput = {
  create?: Maybe<ProductCreateWithoutFavoritesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutFavoritesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateNestedOneWithoutLikesInput = {
  create?: Maybe<ProductCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutLikesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateOrConnectWithoutAuthorInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutAuthorInput;
};

export type ProductCreateOrConnectWithoutCityInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutCityInput;
};

export type ProductCreateOrConnectWithoutFavoritesInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutFavoritesInput;
};

export type ProductCreateOrConnectWithoutLikesInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutLikesInput;
};

export type ProductCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  desc: Scalars['String'];
  price: Scalars['Float'];
  size: ProductSize;
  season: ProductSeason;
  dateOfPurchase: Scalars['DateTime'];
  viewsNumber: Scalars['Int'];
  publishStatus: ProductPublishStatus;
  productStatus: ProductStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ProductImageCreateNestedManyWithoutProductInput>;
  city: CityCreateNestedOneWithoutProductsInput;
  category: CategoryCreateNestedOneWithoutProductsInput;
  brand: BrandCreateNestedOneWithoutProductsInput;
  favorites?: Maybe<FavoriteCreateNestedManyWithoutProductInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutCityInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  desc: Scalars['String'];
  price: Scalars['Float'];
  size: ProductSize;
  season: ProductSeason;
  dateOfPurchase: Scalars['DateTime'];
  viewsNumber: Scalars['Int'];
  publishStatus: ProductPublishStatus;
  productStatus: ProductStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ProductImageCreateNestedManyWithoutProductInput>;
  category: CategoryCreateNestedOneWithoutProductsInput;
  brand: BrandCreateNestedOneWithoutProductsInput;
  author?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  favorites?: Maybe<FavoriteCreateNestedManyWithoutProductInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutFavoritesInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  desc: Scalars['String'];
  price: Scalars['Float'];
  size: ProductSize;
  season: ProductSeason;
  dateOfPurchase: Scalars['DateTime'];
  viewsNumber: Scalars['Int'];
  publishStatus: ProductPublishStatus;
  productStatus: ProductStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ProductImageCreateNestedManyWithoutProductInput>;
  city: CityCreateNestedOneWithoutProductsInput;
  category: CategoryCreateNestedOneWithoutProductsInput;
  brand: BrandCreateNestedOneWithoutProductsInput;
  author?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  desc: Scalars['String'];
  price: Scalars['Float'];
  size: ProductSize;
  season: ProductSeason;
  dateOfPurchase: Scalars['DateTime'];
  viewsNumber: Scalars['Int'];
  publishStatus: ProductPublishStatus;
  productStatus: ProductStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<ProductImageCreateNestedManyWithoutProductInput>;
  city: CityCreateNestedOneWithoutProductsInput;
  category: CategoryCreateNestedOneWithoutProductsInput;
  brand: BrandCreateNestedOneWithoutProductsInput;
  author?: Maybe<UserCreateNestedOneWithoutProductsInput>;
  favorites?: Maybe<FavoriteCreateNestedManyWithoutProductInput>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['ID'];
  title: Scalars['String'];
  desc: Scalars['String'];
  url: Scalars['String'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProductImageCountAggregate = {
  __typename?: 'ProductImageCountAggregate';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  desc?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type ProductImageCreateManyProductInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  desc: Scalars['String'];
  url: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductImageCreateManyProductInputEnvelope = {
  data: Array<ProductImageCreateManyProductInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductImageCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<ProductImageCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductImageCreateOrConnectWithoutProductInput>>;
  createMany?: Maybe<ProductImageCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductImageWhereUniqueInput>>;
};

export type ProductImageCreateOrConnectWithoutProductInput = {
  where: ProductImageWhereUniqueInput;
  create: ProductImageCreateWithoutProductInput;
};

export type ProductImageCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  desc: Scalars['String'];
  url: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductImageListRelationFilter = {
  every?: Maybe<ProductImageWhereInput>;
  some?: Maybe<ProductImageWhereInput>;
  none?: Maybe<ProductImageWhereInput>;
};

export type ProductImageMaxAggregate = {
  __typename?: 'ProductImageMaxAggregate';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductImageMinAggregate = {
  __typename?: 'ProductImageMinAggregate';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductImageScalarWhereInput = {
  AND?: Maybe<Array<ProductImageScalarWhereInput>>;
  OR?: Maybe<Array<ProductImageScalarWhereInput>>;
  NOT?: Maybe<Array<ProductImageScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  desc?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  productId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProductImageUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  desc?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductImageUpdateManyWithWhereWithoutProductInput = {
  where: ProductImageScalarWhereInput;
  data: ProductImageUpdateManyMutationInput;
};

export type ProductImageUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ProductImageCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<ProductImageCreateOrConnectWithoutProductInput>>;
  upsert?: Maybe<Array<ProductImageUpsertWithWhereUniqueWithoutProductInput>>;
  createMany?: Maybe<ProductImageCreateManyProductInputEnvelope>;
  connect?: Maybe<Array<ProductImageWhereUniqueInput>>;
  set?: Maybe<Array<ProductImageWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductImageWhereUniqueInput>>;
  delete?: Maybe<Array<ProductImageWhereUniqueInput>>;
  update?: Maybe<Array<ProductImageUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ProductImageUpdateManyWithWhereWithoutProductInput>>;
  deleteMany?: Maybe<Array<ProductImageScalarWhereInput>>;
};

export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
  where: ProductImageWhereUniqueInput;
  data: ProductImageUpdateWithoutProductInput;
};

export type ProductImageUpdateWithoutProductInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  desc?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
  where: ProductImageWhereUniqueInput;
  update: ProductImageUpdateWithoutProductInput;
  create: ProductImageCreateWithoutProductInput;
};

export type ProductImageWhereInput = {
  AND?: Maybe<Array<ProductImageWhereInput>>;
  OR?: Maybe<Array<ProductImageWhereInput>>;
  NOT?: Maybe<Array<ProductImageWhereInput>>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  desc?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  product?: Maybe<ProductRelationFilter>;
  productId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProductImageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ProductListRelationFilter = {
  every?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  size?: Maybe<ProductSize>;
  season?: Maybe<ProductSeason>;
  dateOfPurchase?: Maybe<Scalars['DateTime']>;
  viewsNumber: Scalars['Int'];
  cityId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  publishStatus?: Maybe<ProductPublishStatus>;
  productStatus?: Maybe<ProductStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  size?: Maybe<ProductSize>;
  season?: Maybe<ProductSeason>;
  dateOfPurchase?: Maybe<Scalars['DateTime']>;
  viewsNumber: Scalars['Int'];
  cityId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  publishStatus?: Maybe<ProductPublishStatus>;
  productStatus?: Maybe<ProductStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum ProductPublishStatus {
  Published = 'published',
  Draft = 'draft',
  Trash = 'trash'
}

export type ProductRelationFilter = {
  is?: Maybe<ProductWhereInput>;
  isNot?: Maybe<ProductWhereInput>;
};

export type ProductScalarWhereInput = {
  AND?: Maybe<Array<ProductScalarWhereInput>>;
  OR?: Maybe<Array<ProductScalarWhereInput>>;
  NOT?: Maybe<Array<ProductScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  desc?: Maybe<StringFilter>;
  price?: Maybe<FloatFilter>;
  size?: Maybe<EnumProductSizeFilter>;
  season?: Maybe<EnumProductSeasonFilter>;
  dateOfPurchase?: Maybe<DateTimeFilter>;
  viewsNumber?: Maybe<IntFilter>;
  cityId?: Maybe<StringFilter>;
  categoryId?: Maybe<StringFilter>;
  brandId?: Maybe<StringFilter>;
  authorId?: Maybe<StringNullableFilter>;
  publishStatus?: Maybe<EnumProductPublishStatusFilter>;
  productStatus?: Maybe<EnumProductStatusFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export enum ProductSeason {
  Spring = 'spring',
  Summer = 'summer',
  Fall = 'fall',
  Winter = 'winter'
}

export enum ProductSize {
  Xs = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  Xl = 'xl',
  Xxl = 'xxl',
  Xxxl = 'xxxl',
  Xxxxl = 'xxxxl'
}

export enum ProductStatus {
  NewWithTags = 'new_with_tags',
  New = 'new',
  LikeNew = 'like_new',
  Medium = 'medium',
  Normal = 'normal',
  Low = 'low',
  Degraded = 'degraded'
}

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  price: Scalars['Float'];
  viewsNumber: Scalars['Int'];
};

export type ProductUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  desc?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  size?: Maybe<EnumProductSizeFieldUpdateOperationsInput>;
  season?: Maybe<EnumProductSeasonFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewsNumber?: Maybe<IntFieldUpdateOperationsInput>;
  publishStatus?: Maybe<EnumProductPublishStatusFieldUpdateOperationsInput>;
  productStatus?: Maybe<EnumProductStatusFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutAuthorInput = {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyMutationInput;
};

export type ProductUpdateManyWithWhereWithoutCityInput = {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyMutationInput;
};

export type ProductUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<ProductCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutAuthorInput>>;
  createMany?: Maybe<ProductCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
};

export type ProductUpdateManyWithoutCityInput = {
  create?: Maybe<Array<ProductCreateWithoutCityInput>>;
  connectOrCreate?: Maybe<Array<ProductCreateOrConnectWithoutCityInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutCityInput>>;
  createMany?: Maybe<ProductCreateManyCityInputEnvelope>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereWithoutCityInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
};

export type ProductUpdateOneWithoutFavoritesInput = {
  create?: Maybe<ProductCreateWithoutFavoritesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutFavoritesInput>;
  upsert?: Maybe<ProductUpsertWithoutFavoritesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductUpdateWithoutFavoritesInput>;
};

export type ProductUpdateOneWithoutLikesInput = {
  create?: Maybe<ProductCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutLikesInput>;
  upsert?: Maybe<ProductUpsertWithoutLikesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductUpdateWithoutLikesInput>;
};

export type ProductUpdateWithWhereUniqueWithoutAuthorInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutAuthorInput;
};

export type ProductUpdateWithWhereUniqueWithoutCityInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutCityInput;
};

export type ProductUpdateWithoutAuthorInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  desc?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  size?: Maybe<EnumProductSizeFieldUpdateOperationsInput>;
  season?: Maybe<EnumProductSeasonFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewsNumber?: Maybe<IntFieldUpdateOperationsInput>;
  publishStatus?: Maybe<EnumProductPublishStatusFieldUpdateOperationsInput>;
  productStatus?: Maybe<EnumProductStatusFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  images?: Maybe<ProductImageUpdateManyWithoutProductInput>;
  city?: Maybe<CityUpdateOneRequiredWithoutProductsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutProductsInput>;
  brand?: Maybe<BrandUpdateOneRequiredWithoutProductsInput>;
  favorites?: Maybe<FavoriteUpdateManyWithoutProductInput>;
  likes?: Maybe<LikeUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutCityInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  desc?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  size?: Maybe<EnumProductSizeFieldUpdateOperationsInput>;
  season?: Maybe<EnumProductSeasonFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewsNumber?: Maybe<IntFieldUpdateOperationsInput>;
  publishStatus?: Maybe<EnumProductPublishStatusFieldUpdateOperationsInput>;
  productStatus?: Maybe<EnumProductStatusFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  images?: Maybe<ProductImageUpdateManyWithoutProductInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutProductsInput>;
  brand?: Maybe<BrandUpdateOneRequiredWithoutProductsInput>;
  author?: Maybe<UserUpdateOneWithoutProductsInput>;
  favorites?: Maybe<FavoriteUpdateManyWithoutProductInput>;
  likes?: Maybe<LikeUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutFavoritesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  desc?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  size?: Maybe<EnumProductSizeFieldUpdateOperationsInput>;
  season?: Maybe<EnumProductSeasonFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewsNumber?: Maybe<IntFieldUpdateOperationsInput>;
  publishStatus?: Maybe<EnumProductPublishStatusFieldUpdateOperationsInput>;
  productStatus?: Maybe<EnumProductStatusFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  images?: Maybe<ProductImageUpdateManyWithoutProductInput>;
  city?: Maybe<CityUpdateOneRequiredWithoutProductsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutProductsInput>;
  brand?: Maybe<BrandUpdateOneRequiredWithoutProductsInput>;
  author?: Maybe<UserUpdateOneWithoutProductsInput>;
  likes?: Maybe<LikeUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutLikesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  desc?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  size?: Maybe<EnumProductSizeFieldUpdateOperationsInput>;
  season?: Maybe<EnumProductSeasonFieldUpdateOperationsInput>;
  dateOfPurchase?: Maybe<DateTimeFieldUpdateOperationsInput>;
  viewsNumber?: Maybe<IntFieldUpdateOperationsInput>;
  publishStatus?: Maybe<EnumProductPublishStatusFieldUpdateOperationsInput>;
  productStatus?: Maybe<EnumProductStatusFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  images?: Maybe<ProductImageUpdateManyWithoutProductInput>;
  city?: Maybe<CityUpdateOneRequiredWithoutProductsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutProductsInput>;
  brand?: Maybe<BrandUpdateOneRequiredWithoutProductsInput>;
  author?: Maybe<UserUpdateOneWithoutProductsInput>;
  favorites?: Maybe<FavoriteUpdateManyWithoutProductInput>;
};

export type ProductUpsertWithWhereUniqueWithoutAuthorInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutAuthorInput;
  create: ProductCreateWithoutAuthorInput;
};

export type ProductUpsertWithWhereUniqueWithoutCityInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutCityInput;
  create: ProductCreateWithoutCityInput;
};

export type ProductUpsertWithoutFavoritesInput = {
  update: ProductUpdateWithoutFavoritesInput;
  create: ProductCreateWithoutFavoritesInput;
};

export type ProductUpsertWithoutLikesInput = {
  update: ProductUpdateWithoutLikesInput;
  create: ProductCreateWithoutLikesInput;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  desc?: Maybe<StringFilter>;
  price?: Maybe<FloatFilter>;
  size?: Maybe<EnumProductSizeFilter>;
  season?: Maybe<EnumProductSeasonFilter>;
  dateOfPurchase?: Maybe<DateTimeFilter>;
  viewsNumber?: Maybe<IntFilter>;
  images?: Maybe<ProductImageListRelationFilter>;
  city?: Maybe<CityRelationFilter>;
  cityId?: Maybe<StringFilter>;
  category?: Maybe<CategoryRelationFilter>;
  categoryId?: Maybe<StringFilter>;
  brand?: Maybe<BrandRelationFilter>;
  brandId?: Maybe<StringFilter>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<StringNullableFilter>;
  favorites?: Maybe<FavoriteListRelationFilter>;
  likes?: Maybe<LikeListRelationFilter>;
  publishStatus?: Maybe<EnumProductPublishStatusFilter>;
  productStatus?: Maybe<EnumProductStatusFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  getAllUsers: Array<User>;
  getOneUser: User;
};


export type QueryGetAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryGetOneUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type UpdateUserInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  showPhoneNumber: Scalars['Boolean'];
  role: UserRole;
  status: UserStatus;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  city?: Maybe<City>;
  cityId?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Product>>;
  favorites?: Maybe<Array<Favorite>>;
  likes?: Maybe<Array<Like>>;
  followedBy?: Maybe<Array<User>>;
  following?: Maybe<Array<User>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  showPhoneNumber?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  googleId?: Maybe<Scalars['Int']>;
  facebookId?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type UserCreateManyCityInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  showPhoneNumber?: Maybe<Scalars['Boolean']>;
  role: UserRole;
  status?: Maybe<UserStatus>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyCityInputEnvelope = {
  data: Array<UserCreateManyCityInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutCityInput = {
  create?: Maybe<Array<UserCreateWithoutCityInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutCityInput>>;
  createMany?: Maybe<UserCreateManyCityInputEnvelope>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutFollowedByInput = {
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowedByInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutFollowingInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedOneWithoutFavoritesInput = {
  create?: Maybe<UserCreateWithoutFavoritesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFavoritesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutLikesInput = {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutProductsInput = {
  create?: Maybe<UserCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProductsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutCityInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCityInput;
};

export type UserCreateOrConnectWithoutFavoritesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFavoritesInput;
};

export type UserCreateOrConnectWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFollowedByInput;
};

export type UserCreateOrConnectWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutFollowingInput;
};

export type UserCreateOrConnectWithoutLikesInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutLikesInput;
};

export type UserCreateOrConnectWithoutProductsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutProductsInput;
};

export type UserCreateWithoutCityInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  showPhoneNumber?: Maybe<Scalars['Boolean']>;
  role: UserRole;
  status?: Maybe<UserStatus>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  products?: Maybe<ProductCreateNestedManyWithoutAuthorInput>;
  favorites?: Maybe<FavoriteCreateNestedManyWithoutUserInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
};

export type UserCreateWithoutFavoritesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  showPhoneNumber?: Maybe<Scalars['Boolean']>;
  role: UserRole;
  status?: Maybe<UserStatus>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  city?: Maybe<CityCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutAuthorInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
};

export type UserCreateWithoutFollowedByInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  showPhoneNumber?: Maybe<Scalars['Boolean']>;
  role: UserRole;
  status?: Maybe<UserStatus>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  city?: Maybe<CityCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutAuthorInput>;
  favorites?: Maybe<FavoriteCreateNestedManyWithoutUserInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
};

export type UserCreateWithoutFollowingInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  showPhoneNumber?: Maybe<Scalars['Boolean']>;
  role: UserRole;
  status?: Maybe<UserStatus>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  city?: Maybe<CityCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutAuthorInput>;
  favorites?: Maybe<FavoriteCreateNestedManyWithoutUserInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
};

export type UserCreateWithoutLikesInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  showPhoneNumber?: Maybe<Scalars['Boolean']>;
  role: UserRole;
  status?: Maybe<UserStatus>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  city?: Maybe<CityCreateNestedOneWithoutUsersInput>;
  products?: Maybe<ProductCreateNestedManyWithoutAuthorInput>;
  favorites?: Maybe<FavoriteCreateNestedManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
};

export type UserCreateWithoutProductsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  showPhoneNumber?: Maybe<Scalars['Boolean']>;
  role: UserRole;
  status?: Maybe<UserStatus>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  city?: Maybe<CityCreateNestedOneWithoutUsersInput>;
  favorites?: Maybe<FavoriteCreateNestedManyWithoutUserInput>;
  likes?: Maybe<LikeCreateNestedManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  showPhoneNumber?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UserRole>;
  status?: Maybe<UserStatus>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  showPhoneNumber?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UserRole>;
  status?: Maybe<UserStatus>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  avatar?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
  showPhoneNumber?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  googleId?: Maybe<SortOrder>;
  facebookId?: Maybe<SortOrder>;
  cityId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserRole {
  Admin = 'admin',
  Editor = 'editor',
  Visitor = 'visitor'
}

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Password = 'password',
  FirstName = 'firstName',
  LastName = 'lastName',
  Avatar = 'avatar',
  PhoneNumber = 'phoneNumber',
  ShowPhoneNumber = 'showPhoneNumber',
  Role = 'role',
  Status = 'status',
  GoogleId = 'googleId',
  FacebookId = 'facebookId',
  CityId = 'cityId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  avatar?: Maybe<StringNullableFilter>;
  phoneNumber?: Maybe<StringFilter>;
  showPhoneNumber?: Maybe<BoolFilter>;
  role?: Maybe<EnumUserRoleFilter>;
  status?: Maybe<EnumUserStatusFilter>;
  googleId?: Maybe<StringNullableFilter>;
  facebookId?: Maybe<StringNullableFilter>;
  cityId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export enum UserStatus {
  Blocked = 'blocked',
  Active = 'active'
}

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
  showPhoneNumber?: Maybe<BoolFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: Maybe<EnumUserStatusFieldUpdateOperationsInput>;
  googleId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  facebookId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  city?: Maybe<CityUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutAuthorInput>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
  showPhoneNumber?: Maybe<BoolFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: Maybe<EnumUserStatusFieldUpdateOperationsInput>;
  googleId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  facebookId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutCityInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithWhereWithoutFollowedByInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithWhereWithoutFollowingInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserUpdateManyWithoutCityInput = {
  create?: Maybe<Array<UserCreateWithoutCityInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutCityInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutCityInput>>;
  createMany?: Maybe<UserCreateManyCityInputEnvelope>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutCityInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateManyWithoutFollowedByInput = {
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowedByInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowedByInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowedByInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowedByInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateManyWithoutFollowingInput = {
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowingInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateOneWithoutFavoritesInput = {
  create?: Maybe<UserCreateWithoutFavoritesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFavoritesInput>;
  upsert?: Maybe<UserUpsertWithoutFavoritesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutFavoritesInput>;
};

export type UserUpdateOneWithoutLikesInput = {
  create?: Maybe<UserCreateWithoutLikesInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutLikesInput>;
  upsert?: Maybe<UserUpsertWithoutLikesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutLikesInput>;
};

export type UserUpdateOneWithoutProductsInput = {
  create?: Maybe<UserCreateWithoutProductsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProductsInput>;
  upsert?: Maybe<UserUpsertWithoutProductsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutProductsInput>;
};

export type UserUpdateWithWhereUniqueWithoutCityInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutCityInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFollowedByInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutFollowingInput;
};

export type UserUpdateWithoutCityInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
  showPhoneNumber?: Maybe<BoolFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: Maybe<EnumUserStatusFieldUpdateOperationsInput>;
  googleId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  facebookId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutAuthorInput>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
};

export type UserUpdateWithoutFavoritesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
  showPhoneNumber?: Maybe<BoolFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: Maybe<EnumUserStatusFieldUpdateOperationsInput>;
  googleId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  facebookId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  city?: Maybe<CityUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutAuthorInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
};

export type UserUpdateWithoutFollowedByInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
  showPhoneNumber?: Maybe<BoolFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: Maybe<EnumUserStatusFieldUpdateOperationsInput>;
  googleId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  facebookId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  city?: Maybe<CityUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutAuthorInput>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
};

export type UserUpdateWithoutFollowingInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
  showPhoneNumber?: Maybe<BoolFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: Maybe<EnumUserStatusFieldUpdateOperationsInput>;
  googleId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  facebookId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  city?: Maybe<CityUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutAuthorInput>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
};

export type UserUpdateWithoutLikesInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
  showPhoneNumber?: Maybe<BoolFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: Maybe<EnumUserStatusFieldUpdateOperationsInput>;
  googleId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  facebookId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  city?: Maybe<CityUpdateOneWithoutUsersInput>;
  products?: Maybe<ProductUpdateManyWithoutAuthorInput>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
};

export type UserUpdateWithoutProductsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: Maybe<StringFieldUpdateOperationsInput>;
  showPhoneNumber?: Maybe<BoolFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: Maybe<EnumUserStatusFieldUpdateOperationsInput>;
  googleId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  facebookId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  city?: Maybe<CityUpdateOneWithoutUsersInput>;
  favorites?: Maybe<FavoriteUpdateManyWithoutUserInput>;
  likes?: Maybe<LikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
};

export type UserUpsertWithWhereUniqueWithoutCityInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutCityInput;
  create: UserCreateWithoutCityInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowedByInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFollowedByInput;
  create: UserCreateWithoutFollowedByInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutFollowingInput;
  create: UserCreateWithoutFollowingInput;
};

export type UserUpsertWithoutFavoritesInput = {
  update: UserUpdateWithoutFavoritesInput;
  create: UserCreateWithoutFavoritesInput;
};

export type UserUpsertWithoutLikesInput = {
  update: UserUpdateWithoutLikesInput;
  create: UserCreateWithoutLikesInput;
};

export type UserUpsertWithoutProductsInput = {
  update: UserUpdateWithoutProductsInput;
  create: UserCreateWithoutProductsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  avatar?: Maybe<StringNullableFilter>;
  phoneNumber?: Maybe<StringFilter>;
  showPhoneNumber?: Maybe<BoolFilter>;
  role?: Maybe<EnumUserRoleFilter>;
  status?: Maybe<EnumUserStatusFilter>;
  googleId?: Maybe<StringNullableFilter>;
  facebookId?: Maybe<StringNullableFilter>;
  city?: Maybe<CityRelationFilter>;
  cityId?: Maybe<StringNullableFilter>;
  products?: Maybe<ProductListRelationFilter>;
  favorites?: Maybe<FavoriteListRelationFilter>;
  likes?: Maybe<LikeListRelationFilter>;
  followedBy?: Maybe<UserListRelationFilter>;
  following?: Maybe<UserListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthUser' }
    & Pick<AuthUser, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & UserFieldsFragment
    ) }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateUser'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export type SearchUsersMutationVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput> | UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum> | UserScalarFieldEnum>;
}>;


export type SearchUsersMutation = (
  { __typename?: 'Mutation' }
  & { searchUsers: Array<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'firstName' | 'lastName' | 'email' | 'avatar' | 'role' | 'createdAt' | 'updatedAt'>
);

export type GetOneUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetOneUserQuery = (
  { __typename?: 'Query' }
  & { getOneUser: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export type UsersQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput> | UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum> | UserScalarFieldEnum>;
}>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: Array<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export const UserFieldsFragmentDoc = `
    fragment UserFields on User {
  id
  name
  firstName
  lastName
  email
  avatar
  role
  createdAt
  updatedAt
}
    `;
export const LoginDocument = `
    mutation login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    accessToken
    user {
      ...UserFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) => 
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      (variables?: LoginMutationVariables) => client<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );
export const LogoutDocument = `
    mutation logout {
  logout
}
    `;
export const useLogoutMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LogoutMutation, TError, LogoutMutationVariables, TContext>) => 
    useMutation<LogoutMutation, TError, LogoutMutationVariables, TContext>(
      (variables?: LogoutMutationVariables) => client<LogoutMutation, LogoutMutationVariables>(LogoutDocument, variables)(),
      options
    );
export const UpdateUserDocument = `
    mutation updateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput)
}
    `;
export const useUpdateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>) => 
    useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
      (variables?: UpdateUserMutationVariables) => client<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, variables)(),
      options
    );
export const MeDocument = `
    query me {
  me {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      variables?: MeQueryVariables, 
      options?: UseQueryOptions<MeQuery, TError, TData>
    ) => 
    useQuery<MeQuery, TError, TData>(
      ['me', variables],
      client<MeQuery, MeQueryVariables>(MeDocument, variables),
      options
    );
useMeQuery.getKey = (variables?: MeQueryVariables) => ['me', variables];

export const SearchUsersDocument = `
    mutation searchUsers($where: UserWhereInput, $orderBy: [UserOrderByInput!], $cursor: UserWhereUniqueInput, $take: Int, $skip: Int, $distinct: [UserScalarFieldEnum!]) {
  searchUsers(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const useSearchUsersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SearchUsersMutation, TError, SearchUsersMutationVariables, TContext>) => 
    useMutation<SearchUsersMutation, TError, SearchUsersMutationVariables, TContext>(
      (variables?: SearchUsersMutationVariables) => client<SearchUsersMutation, SearchUsersMutationVariables>(SearchUsersDocument, variables)(),
      options
    );
export const GetOneUserDocument = `
    query getOneUser($where: UserWhereUniqueInput!) {
  getOneUser(where: $where) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const useGetOneUserQuery = <
      TData = GetOneUserQuery,
      TError = unknown
    >(
      variables: GetOneUserQueryVariables, 
      options?: UseQueryOptions<GetOneUserQuery, TError, TData>
    ) => 
    useQuery<GetOneUserQuery, TError, TData>(
      ['getOneUser', variables],
      client<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, variables),
      options
    );
useGetOneUserQuery.getKey = (variables: GetOneUserQueryVariables) => ['getOneUser', variables];

export const UsersDocument = `
    query users($where: UserWhereInput, $orderBy: [UserOrderByInput!], $cursor: UserWhereUniqueInput, $take: Int, $skip: Int, $distinct: [UserScalarFieldEnum!]) {
  getAllUsers(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      variables?: UsersQueryVariables, 
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) => 
    useQuery<UsersQuery, TError, TData>(
      ['users', variables],
      client<UsersQuery, UsersQueryVariables>(UsersDocument, variables),
      options
    );
useUsersQuery.getKey = (variables?: UsersQueryVariables) => ['users', variables];
