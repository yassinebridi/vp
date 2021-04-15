import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    firstName = "firstName",
    lastName = "lastName",
    avatar = "avatar",
    phoneNumber = "phoneNumber",
    showPhoneNumber = "showPhoneNumber",
    role = "role",
    status = "status",
    googleId = "googleId",
    facebookId = "facebookId",
    cityId = "cityId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ProductImageScalarFieldEnum {
    id = "id",
    title = "title",
    desc = "desc",
    url = "url",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ProductScalarFieldEnum {
    id = "id",
    title = "title",
    desc = "desc",
    price = "price",
    size = "size",
    season = "season",
    dateOfPurchase = "dateOfPurchase",
    viewsNumber = "viewsNumber",
    cityId = "cityId",
    categoryId = "categoryId",
    brandId = "brandId",
    authorId = "authorId",
    publishStatus = "publishStatus",
    productStatus = "productStatus",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum UserStatus {
    blocked = "blocked",
    active = "active"
}

export enum UserRole {
    admin = "admin",
    editor = "editor",
    visitor = "visitor"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum ProductStatus {
    new_with_tags = "new_with_tags",
    'new' = "new",
    like_new = "like_new",
    medium = "medium",
    normal = "normal",
    low = "low",
    degraded = "degraded"
}

export enum ProductSize {
    xs = "xs",
    s = "s",
    m = "m",
    l = "l",
    xl = "xl",
    xxl = "xxl",
    xxxl = "xxxl",
    xxxxl = "xxxxl"
}

export enum ProductSeason {
    spring = "spring",
    summer = "summer",
    fall = "fall",
    winter = "winter"
}

export enum ProductPublishStatus {
    published = "published",
    draft = "draft",
    trash = "trash"
}

export enum LikeScalarFieldEnum {
    id = "id",
    userId = "userId",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum FavoriteScalarFieldEnum {
    id = "id",
    userId = "userId",
    productId = "productId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CityScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum BrandScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(BrandScalarFieldEnum, { name: 'BrandScalarFieldEnum' })
registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum' })
registerEnumType(CityScalarFieldEnum, { name: 'CityScalarFieldEnum' })
registerEnumType(FavoriteScalarFieldEnum, { name: 'FavoriteScalarFieldEnum' })
registerEnumType(LikeScalarFieldEnum, { name: 'LikeScalarFieldEnum' })
registerEnumType(ProductPublishStatus, { name: 'ProductPublishStatus' })
registerEnumType(ProductSeason, { name: 'ProductSeason' })
registerEnumType(ProductSize, { name: 'ProductSize' })
registerEnumType(ProductStatus, { name: 'ProductStatus' })
registerEnumType(QueryMode, { name: 'QueryMode' })
registerEnumType(SortOrder, { name: 'SortOrder' })
registerEnumType(UserRole, { name: 'UserRole' })
registerEnumType(UserStatus, { name: 'UserStatus' })
registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum' })
registerEnumType(ProductImageScalarFieldEnum, { name: 'ProductImageScalarFieldEnum' })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum' })

@ArgsType()
export class AggregateBrandArgs {
    @Field(() => BrandWhereInput, {nullable:true})
    where?: InstanceType<typeof BrandWhereInput>;
    @Field(() => [BrandOrderByInput], {nullable:true})
    orderBy?: Array<BrandOrderByInput>;
    @Field(() => BrandWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BrandWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BrandCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof BrandCountAggregateInput>;
    @Field(() => BrandMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof BrandMinAggregateInput>;
    @Field(() => BrandMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof BrandMaxAggregateInput>;
}

@ObjectType()
export class AggregateBrand {
    @Field(() => BrandCountAggregate, {nullable:true})
    count?: InstanceType<typeof BrandCountAggregate>;
    @Field(() => BrandMinAggregate, {nullable:true})
    min?: InstanceType<typeof BrandMinAggregate>;
    @Field(() => BrandMaxAggregate, {nullable:true})
    max?: InstanceType<typeof BrandMaxAggregate>;
}

@InputType()
export class BrandCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class BrandCountAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    name?: number;
    @Field(() => Int, {nullable:true})
    createdAt?: number;
    @Field(() => Int, {nullable:true})
    updatedAt?: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class BrandCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BrandCreateNestedOneWithoutProductsInput {
    @Field(() => BrandCreateWithoutProductsInput, {nullable:true})
    create?: InstanceType<typeof BrandCreateWithoutProductsInput>;
    @Field(() => BrandCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof BrandCreateOrConnectWithoutProductsInput>;
    @Field(() => BrandWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof BrandWhereUniqueInput>;
}

@InputType()
export class BrandCreateOrConnectWithoutProductsInput {
    @Field(() => BrandWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BrandWhereUniqueInput>;
    @Field(() => BrandCreateWithoutProductsInput, {nullable:false})
    create!: InstanceType<typeof BrandCreateWithoutProductsInput>;
}

@InputType()
export class BrandCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BrandCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutBrandInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutBrandInput>;
}

@ObjectType()
export class BrandGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => BrandCountAggregate, {nullable:true})
    count?: InstanceType<typeof BrandCountAggregate>;
    @Field(() => BrandMinAggregate, {nullable:true})
    min?: InstanceType<typeof BrandMinAggregate>;
    @Field(() => BrandMaxAggregate, {nullable:true})
    max?: InstanceType<typeof BrandMaxAggregate>;
}

@InputType()
export class BrandMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class BrandMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BrandMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class BrandMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BrandOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}

@InputType()
export class BrandRelationFilter {
    @Field(() => BrandWhereInput, {nullable:true})
    is?: InstanceType<typeof BrandWhereInput>;
    @Field(() => BrandWhereInput, {nullable:true})
    isNot?: InstanceType<typeof BrandWhereInput>;
}

@InputType()
export class BrandScalarWhereWithAggregatesInput {
    @Field(() => [BrandScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BrandScalarWhereWithAggregatesInput>;
    @Field(() => [BrandScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BrandScalarWhereWithAggregatesInput>;
    @Field(() => [BrandScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BrandScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class BrandUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class BrandUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutBrandInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutBrandInput>;
}

@InputType()
export class BrandUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BrandUncheckedUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BrandUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutBrandInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutBrandInput>;
}

@InputType()
export class BrandUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BrandUpdateOneRequiredWithoutProductsInput {
    @Field(() => BrandCreateWithoutProductsInput, {nullable:true})
    create?: InstanceType<typeof BrandCreateWithoutProductsInput>;
    @Field(() => BrandCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof BrandCreateOrConnectWithoutProductsInput>;
    @Field(() => BrandUpsertWithoutProductsInput, {nullable:true})
    upsert?: InstanceType<typeof BrandUpsertWithoutProductsInput>;
    @Field(() => BrandWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof BrandWhereUniqueInput>;
    @Field(() => BrandUpdateWithoutProductsInput, {nullable:true})
    update?: InstanceType<typeof BrandUpdateWithoutProductsInput>;
}

@InputType()
export class BrandUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BrandUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutBrandInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutBrandInput>;
}

@InputType()
export class BrandUpsertWithoutProductsInput {
    @Field(() => BrandUpdateWithoutProductsInput, {nullable:false})
    update!: InstanceType<typeof BrandUpdateWithoutProductsInput>;
    @Field(() => BrandCreateWithoutProductsInput, {nullable:false})
    create!: InstanceType<typeof BrandCreateWithoutProductsInput>;
}

@InputType()
export class BrandWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class BrandWhereInput {
    @Field(() => [BrandWhereInput], {nullable:true})
    AND?: Array<BrandWhereInput>;
    @Field(() => [BrandWhereInput], {nullable:true})
    OR?: Array<BrandWhereInput>;
    @Field(() => [BrandWhereInput], {nullable:true})
    NOT?: Array<BrandWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Brand {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@ArgsType()
export class CreateManyBrandArgs {
    @Field(() => [BrandCreateManyInput], {nullable:false})
    data!: Array<BrandCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneBrandArgs {
    @Field(() => BrandCreateInput, {nullable:false})
    data!: InstanceType<typeof BrandCreateInput>;
}

@ArgsType()
export class DeleteManyBrandArgs {
    @Field(() => BrandWhereInput, {nullable:true})
    where?: InstanceType<typeof BrandWhereInput>;
}

@ArgsType()
export class DeleteOneBrandArgs {
    @Field(() => BrandWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BrandWhereUniqueInput>;
}

@ArgsType()
export class FindFirstBrandArgs {
    @Field(() => BrandWhereInput, {nullable:true})
    where?: InstanceType<typeof BrandWhereInput>;
    @Field(() => [BrandOrderByInput], {nullable:true})
    orderBy?: Array<BrandOrderByInput>;
    @Field(() => BrandWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BrandWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BrandScalarFieldEnum], {nullable:true})
    distinct?: Array<BrandScalarFieldEnum>;
}

@ArgsType()
export class FindManyBrandArgs {
    @Field(() => BrandWhereInput, {nullable:true})
    where?: InstanceType<typeof BrandWhereInput>;
    @Field(() => [BrandOrderByInput], {nullable:true})
    orderBy?: Array<BrandOrderByInput>;
    @Field(() => BrandWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BrandWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BrandScalarFieldEnum], {nullable:true})
    distinct?: Array<BrandScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBrandArgs {
    @Field(() => BrandWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BrandWhereUniqueInput>;
}

@ArgsType()
export class GroupByBrandArgs {
    @Field(() => BrandWhereInput, {nullable:true})
    where?: InstanceType<typeof BrandWhereInput>;
    @Field(() => [BrandOrderByInput], {nullable:true})
    orderBy?: Array<BrandOrderByInput>;
    @Field(() => [BrandScalarFieldEnum], {nullable:false})
    by!: Array<BrandScalarFieldEnum>;
    @Field(() => BrandScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof BrandScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BrandCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof BrandCountAggregateInput>;
    @Field(() => BrandMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof BrandMinAggregateInput>;
    @Field(() => BrandMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof BrandMaxAggregateInput>;
}

@ArgsType()
export class UpdateManyBrandArgs {
    @Field(() => BrandUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof BrandUpdateManyMutationInput>;
    @Field(() => BrandWhereInput, {nullable:true})
    where?: InstanceType<typeof BrandWhereInput>;
}

@ArgsType()
export class UpdateOneBrandArgs {
    @Field(() => BrandUpdateInput, {nullable:false})
    data!: InstanceType<typeof BrandUpdateInput>;
    @Field(() => BrandWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BrandWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneBrandArgs {
    @Field(() => BrandWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof BrandWhereUniqueInput>;
    @Field(() => BrandCreateInput, {nullable:false})
    create!: InstanceType<typeof BrandCreateInput>;
    @Field(() => BrandUpdateInput, {nullable:false})
    update!: InstanceType<typeof BrandUpdateInput>;
}

@ArgsType()
export class AggregateCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByInput], {nullable:true})
    orderBy?: Array<CategoryOrderByInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@ObjectType()
export class AggregateCategory {
    @Field(() => CategoryCountAggregate, {nullable:true})
    count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    max?: InstanceType<typeof CategoryMaxAggregate>;
}

@InputType()
export class CategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CategoryCountAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    name?: number;
    @Field(() => Int, {nullable:true})
    createdAt?: number;
    @Field(() => Int, {nullable:true})
    updatedAt?: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CategoryCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CategoryCreateNestedOneWithoutProductsInput {
    @Field(() => CategoryCreateWithoutProductsInput, {nullable:true})
    create?: InstanceType<typeof CategoryCreateWithoutProductsInput>;
    @Field(() => CategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CategoryWhereUniqueInput>;
}

@InputType()
export class CategoryCreateOrConnectWithoutProductsInput {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => CategoryCreateWithoutProductsInput, {nullable:false})
    create!: InstanceType<typeof CategoryCreateWithoutProductsInput>;
}

@InputType()
export class CategoryCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CategoryCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCategoryInput>;
}

@ObjectType()
export class CategoryGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CategoryCountAggregate, {nullable:true})
    count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    max?: InstanceType<typeof CategoryMaxAggregate>;
}

@InputType()
export class CategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CategoryMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CategoryMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CategoryOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}

@InputType()
export class CategoryRelationFilter {
    @Field(() => CategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CategoryWhereInput>;
}

@InputType()
export class CategoryScalarWhereWithAggregatesInput {
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CategoryUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CategoryUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCategoryInput>;
}

@InputType()
export class CategoryUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCategoryInput>;
}

@InputType()
export class CategoryUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUpdateOneRequiredWithoutProductsInput {
    @Field(() => CategoryCreateWithoutProductsInput, {nullable:true})
    create?: InstanceType<typeof CategoryCreateWithoutProductsInput>;
    @Field(() => CategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => CategoryUpsertWithoutProductsInput, {nullable:true})
    upsert?: InstanceType<typeof CategoryUpsertWithoutProductsInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => CategoryUpdateWithoutProductsInput, {nullable:true})
    update?: InstanceType<typeof CategoryUpdateWithoutProductsInput>;
}

@InputType()
export class CategoryUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutCategoryInput>;
}

@InputType()
export class CategoryUpsertWithoutProductsInput {
    @Field(() => CategoryUpdateWithoutProductsInput, {nullable:false})
    update!: InstanceType<typeof CategoryUpdateWithoutProductsInput>;
    @Field(() => CategoryCreateWithoutProductsInput, {nullable:false})
    create!: InstanceType<typeof CategoryCreateWithoutProductsInput>;
}

@InputType()
export class CategoryWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class CategoryWhereInput {
    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Category {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@ArgsType()
export class CreateManyCategoryArgs {
    @Field(() => [CategoryCreateManyInput], {nullable:false})
    data!: Array<CategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCategoryArgs {
    @Field(() => CategoryCreateInput, {nullable:false})
    data!: InstanceType<typeof CategoryCreateInput>;
}

@ArgsType()
export class DeleteManyCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof CategoryWhereInput>;
}

@ArgsType()
export class DeleteOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByInput], {nullable:true})
    orderBy?: Array<CategoryOrderByInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByInput], {nullable:true})
    orderBy?: Array<CategoryOrderByInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class GroupByCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByInput], {nullable:true})
    orderBy?: Array<CategoryOrderByInput>;
    @Field(() => [CategoryScalarFieldEnum], {nullable:false})
    by!: Array<CategoryScalarFieldEnum>;
    @Field(() => CategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@ArgsType()
export class UpdateManyCategoryArgs {
    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof CategoryUpdateManyMutationInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof CategoryWhereInput>;
}

@ArgsType()
export class UpdateOneCategoryArgs {
    @Field(() => CategoryUpdateInput, {nullable:false})
    data!: InstanceType<typeof CategoryUpdateInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CategoryWhereUniqueInput>;
    @Field(() => CategoryCreateInput, {nullable:false})
    create!: InstanceType<typeof CategoryCreateInput>;
    @Field(() => CategoryUpdateInput, {nullable:false})
    update!: InstanceType<typeof CategoryUpdateInput>;
}

@ArgsType()
export class AggregateCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByInput], {nullable:true})
    orderBy?: Array<CityOrderByInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CityCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof CityCountAggregateInput>;
    @Field(() => CityMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof CityMinAggregateInput>;
    @Field(() => CityMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof CityMaxAggregateInput>;
}

@ObjectType()
export class AggregateCity {
    @Field(() => CityCountAggregate, {nullable:true})
    count?: InstanceType<typeof CityCountAggregate>;
    @Field(() => CityMinAggregate, {nullable:true})
    min?: InstanceType<typeof CityMinAggregate>;
    @Field(() => CityMaxAggregate, {nullable:true})
    max?: InstanceType<typeof CityMaxAggregate>;
}

@InputType()
export class CityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CityCountAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    name?: number;
    @Field(() => Int, {nullable:true})
    createdAt?: number;
    @Field(() => Int, {nullable:true})
    updatedAt?: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CityCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityCreateNestedOneWithoutProductsInput {
    @Field(() => CityCreateWithoutProductsInput, {nullable:true})
    create?: InstanceType<typeof CityCreateWithoutProductsInput>;
    @Field(() => CityCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutProductsInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CityWhereUniqueInput>;
}

@InputType()
export class CityCreateNestedOneWithoutUsersInput {
    @Field(() => CityCreateWithoutUsersInput, {nullable:true})
    create?: InstanceType<typeof CityCreateWithoutUsersInput>;
    @Field(() => CityCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutUsersInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CityWhereUniqueInput>;
}

@InputType()
export class CityCreateOrConnectWithoutProductsInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateWithoutProductsInput, {nullable:false})
    create!: InstanceType<typeof CityCreateWithoutProductsInput>;
}

@InputType()
export class CityCreateOrConnectWithoutUsersInput {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateWithoutUsersInput, {nullable:false})
    create!: InstanceType<typeof CityCreateWithoutUsersInput>;
}

@InputType()
export class CityCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedManyWithoutCityInput, {nullable:true})
    users?: InstanceType<typeof UserCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityCreateWithoutUsersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutCityInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutCityInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCityInput>;
    @Field(() => UserCreateNestedManyWithoutCityInput, {nullable:true})
    users?: InstanceType<typeof UserCreateNestedManyWithoutCityInput>;
}

@ObjectType()
export class CityGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CityCountAggregate, {nullable:true})
    count?: InstanceType<typeof CityCountAggregate>;
    @Field(() => CityMinAggregate, {nullable:true})
    min?: InstanceType<typeof CityMinAggregate>;
    @Field(() => CityMaxAggregate, {nullable:true})
    max?: InstanceType<typeof CityMaxAggregate>;
}

@InputType()
export class CityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CityMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CityMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CityOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}

@InputType()
export class CityRelationFilter {
    @Field(() => CityWhereInput, {nullable:true})
    is?: InstanceType<typeof CityWhereInput>;
    @Field(() => CityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CityWhereInput>;
}

@InputType()
export class CityScalarWhereWithAggregatesInput {
    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CityScalarWhereWithAggregatesInput>;
    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CityScalarWhereWithAggregatesInput>;
    @Field(() => [CityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CityScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CityUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedCreateWithoutUsersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCityInput>;
    @Field(() => UserUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CityUncheckedUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUncheckedUpdateManyWithoutCityInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedUpdateWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutCityInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutCityInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCityInput>;
    @Field(() => UserUncheckedUpdateManyWithoutCityInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CityUpdateOneRequiredWithoutProductsInput {
    @Field(() => CityCreateWithoutProductsInput, {nullable:true})
    create?: InstanceType<typeof CityCreateWithoutProductsInput>;
    @Field(() => CityCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutProductsInput>;
    @Field(() => CityUpsertWithoutProductsInput, {nullable:true})
    upsert?: InstanceType<typeof CityUpsertWithoutProductsInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityUpdateWithoutProductsInput, {nullable:true})
    update?: InstanceType<typeof CityUpdateWithoutProductsInput>;
}

@InputType()
export class CityUpdateOneWithoutUsersInput {
    @Field(() => CityCreateWithoutUsersInput, {nullable:true})
    create?: InstanceType<typeof CityCreateWithoutUsersInput>;
    @Field(() => CityCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CityCreateOrConnectWithoutUsersInput>;
    @Field(() => CityUpsertWithoutUsersInput, {nullable:true})
    upsert?: InstanceType<typeof CityUpsertWithoutUsersInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => CityUpdateWithoutUsersInput, {nullable:true})
    update?: InstanceType<typeof CityUpdateWithoutUsersInput>;
}

@InputType()
export class CityUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateManyWithoutCityInput, {nullable:true})
    users?: InstanceType<typeof UserUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpdateWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutCityInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutCityInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutCityInput>;
    @Field(() => UserUpdateManyWithoutCityInput, {nullable:true})
    users?: InstanceType<typeof UserUpdateManyWithoutCityInput>;
}

@InputType()
export class CityUpsertWithoutProductsInput {
    @Field(() => CityUpdateWithoutProductsInput, {nullable:false})
    update!: InstanceType<typeof CityUpdateWithoutProductsInput>;
    @Field(() => CityCreateWithoutProductsInput, {nullable:false})
    create!: InstanceType<typeof CityCreateWithoutProductsInput>;
}

@InputType()
export class CityUpsertWithoutUsersInput {
    @Field(() => CityUpdateWithoutUsersInput, {nullable:false})
    update!: InstanceType<typeof CityUpdateWithoutUsersInput>;
    @Field(() => CityCreateWithoutUsersInput, {nullable:false})
    create!: InstanceType<typeof CityCreateWithoutUsersInput>;
}

@InputType()
export class CityWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class CityWhereInput {
    @Field(() => [CityWhereInput], {nullable:true})
    AND?: Array<CityWhereInput>;
    @Field(() => [CityWhereInput], {nullable:true})
    OR?: Array<CityWhereInput>;
    @Field(() => [CityWhereInput], {nullable:true})
    NOT?: Array<CityWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
    @Field(() => UserListRelationFilter, {nullable:true})
    users?: InstanceType<typeof UserListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class City {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
    @Field(() => [User], {nullable:true})
    users?: Array<User>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@ArgsType()
export class CreateManyCityArgs {
    @Field(() => [CityCreateManyInput], {nullable:false})
    data!: Array<CityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCityArgs {
    @Field(() => CityCreateInput, {nullable:false})
    data!: InstanceType<typeof CityCreateInput>;
}

@ArgsType()
export class DeleteManyCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
}

@ArgsType()
export class DeleteOneCityArgs {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByInput], {nullable:true})
    orderBy?: Array<CityOrderByInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CityScalarFieldEnum], {nullable:true})
    distinct?: Array<CityScalarFieldEnum>;
}

@ArgsType()
export class FindManyCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByInput], {nullable:true})
    orderBy?: Array<CityOrderByInput>;
    @Field(() => CityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CityScalarFieldEnum], {nullable:true})
    distinct?: Array<CityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCityArgs {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
}

@ArgsType()
export class GroupByCityArgs {
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
    @Field(() => [CityOrderByInput], {nullable:true})
    orderBy?: Array<CityOrderByInput>;
    @Field(() => [CityScalarFieldEnum], {nullable:false})
    by!: Array<CityScalarFieldEnum>;
    @Field(() => CityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CityCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof CityCountAggregateInput>;
    @Field(() => CityMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof CityMinAggregateInput>;
    @Field(() => CityMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof CityMaxAggregateInput>;
}

@ArgsType()
export class UpdateManyCityArgs {
    @Field(() => CityUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof CityUpdateManyMutationInput>;
    @Field(() => CityWhereInput, {nullable:true})
    where?: InstanceType<typeof CityWhereInput>;
}

@ArgsType()
export class UpdateOneCityArgs {
    @Field(() => CityUpdateInput, {nullable:false})
    data!: InstanceType<typeof CityUpdateInput>;
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCityArgs {
    @Field(() => CityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CityWhereUniqueInput>;
    @Field(() => CityCreateInput, {nullable:false})
    create!: InstanceType<typeof CityCreateInput>;
    @Field(() => CityUpdateInput, {nullable:false})
    update!: InstanceType<typeof CityUpdateInput>;
}

@ArgsType()
export class AggregateFavoriteArgs {
    @Field(() => FavoriteWhereInput, {nullable:true})
    where?: InstanceType<typeof FavoriteWhereInput>;
    @Field(() => [FavoriteOrderByInput], {nullable:true})
    orderBy?: Array<FavoriteOrderByInput>;
    @Field(() => FavoriteWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FavoriteWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => FavoriteCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof FavoriteCountAggregateInput>;
    @Field(() => FavoriteMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof FavoriteMinAggregateInput>;
    @Field(() => FavoriteMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof FavoriteMaxAggregateInput>;
}

@ObjectType()
export class AggregateFavorite {
    @Field(() => FavoriteCountAggregate, {nullable:true})
    count?: InstanceType<typeof FavoriteCountAggregate>;
    @Field(() => FavoriteMinAggregate, {nullable:true})
    min?: InstanceType<typeof FavoriteMinAggregate>;
    @Field(() => FavoriteMaxAggregate, {nullable:true})
    max?: InstanceType<typeof FavoriteMaxAggregate>;
}

@ArgsType()
export class CreateManyFavoriteArgs {
    @Field(() => [FavoriteCreateManyInput], {nullable:false})
    data!: Array<FavoriteCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneFavoriteArgs {
    @Field(() => FavoriteCreateInput, {nullable:false})
    data!: InstanceType<typeof FavoriteCreateInput>;
}

@ArgsType()
export class DeleteManyFavoriteArgs {
    @Field(() => FavoriteWhereInput, {nullable:true})
    where?: InstanceType<typeof FavoriteWhereInput>;
}

@ArgsType()
export class DeleteOneFavoriteArgs {
    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof FavoriteWhereUniqueInput>;
}

@InputType()
export class FavoriteCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class FavoriteCountAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    productId?: number;
    @Field(() => Int, {nullable:true})
    createdAt?: number;
    @Field(() => Int, {nullable:true})
    updatedAt?: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class FavoriteCreateManyProductInputEnvelope {
    @Field(() => [FavoriteCreateManyProductInput], {nullable:false})
    data!: Array<FavoriteCreateManyProductInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class FavoriteCreateManyProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FavoriteCreateManyUserInputEnvelope {
    @Field(() => [FavoriteCreateManyUserInput], {nullable:false})
    data!: Array<FavoriteCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class FavoriteCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FavoriteCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FavoriteCreateNestedManyWithoutProductInput {
    @Field(() => [FavoriteCreateWithoutProductInput], {nullable:true})
    create?: Array<FavoriteCreateWithoutProductInput>;
    @Field(() => [FavoriteCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutProductInput>;
    @Field(() => FavoriteCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof FavoriteCreateManyProductInputEnvelope>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    connect?: Array<FavoriteWhereUniqueInput>;
}

@InputType()
export class FavoriteCreateNestedManyWithoutUserInput {
    @Field(() => [FavoriteCreateWithoutUserInput], {nullable:true})
    create?: Array<FavoriteCreateWithoutUserInput>;
    @Field(() => [FavoriteCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutUserInput>;
    @Field(() => FavoriteCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof FavoriteCreateManyUserInputEnvelope>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    connect?: Array<FavoriteWhereUniqueInput>;
}

@InputType()
export class FavoriteCreateOrConnectWithoutProductInput {
    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof FavoriteWhereUniqueInput>;
    @Field(() => FavoriteCreateWithoutProductInput, {nullable:false})
    create!: InstanceType<typeof FavoriteCreateWithoutProductInput>;
}

@InputType()
export class FavoriteCreateOrConnectWithoutUserInput {
    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof FavoriteWhereUniqueInput>;
    @Field(() => FavoriteCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof FavoriteCreateWithoutUserInput>;
}

@InputType()
export class FavoriteCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutFavoritesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutFavoritesInput>;
}

@InputType()
export class FavoriteCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedOneWithoutFavoritesInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutFavoritesInput>;
}

@InputType()
export class FavoriteCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutFavoritesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutFavoritesInput>;
    @Field(() => ProductCreateNestedOneWithoutFavoritesInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutFavoritesInput>;
}

@ObjectType()
export class FavoriteGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => FavoriteCountAggregate, {nullable:true})
    count?: InstanceType<typeof FavoriteCountAggregate>;
    @Field(() => FavoriteMinAggregate, {nullable:true})
    min?: InstanceType<typeof FavoriteMinAggregate>;
    @Field(() => FavoriteMaxAggregate, {nullable:true})
    max?: InstanceType<typeof FavoriteMaxAggregate>;
}

@InputType()
export class FavoriteListRelationFilter {
    @Field(() => FavoriteWhereInput, {nullable:true})
    every?: InstanceType<typeof FavoriteWhereInput>;
    @Field(() => FavoriteWhereInput, {nullable:true})
    some?: InstanceType<typeof FavoriteWhereInput>;
    @Field(() => FavoriteWhereInput, {nullable:true})
    none?: InstanceType<typeof FavoriteWhereInput>;
}

@InputType()
export class FavoriteMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class FavoriteMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FavoriteMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class FavoriteMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FavoriteOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}

@InputType()
export class FavoriteScalarWhereWithAggregatesInput {
    @Field(() => [FavoriteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FavoriteScalarWhereWithAggregatesInput>;
    @Field(() => [FavoriteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FavoriteScalarWhereWithAggregatesInput>;
    @Field(() => [FavoriteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FavoriteScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class FavoriteScalarWhereInput {
    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    AND?: Array<FavoriteScalarWhereInput>;
    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    OR?: Array<FavoriteScalarWhereInput>;
    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    NOT?: Array<FavoriteScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class FavoriteUncheckedCreateNestedManyWithoutProductInput {
    @Field(() => [FavoriteCreateWithoutProductInput], {nullable:true})
    create?: Array<FavoriteCreateWithoutProductInput>;
    @Field(() => [FavoriteCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutProductInput>;
    @Field(() => FavoriteCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof FavoriteCreateManyProductInputEnvelope>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    connect?: Array<FavoriteWhereUniqueInput>;
}

@InputType()
export class FavoriteUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [FavoriteCreateWithoutUserInput], {nullable:true})
    create?: Array<FavoriteCreateWithoutUserInput>;
    @Field(() => [FavoriteCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutUserInput>;
    @Field(() => FavoriteCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof FavoriteCreateManyUserInputEnvelope>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    connect?: Array<FavoriteWhereUniqueInput>;
}

@InputType()
export class FavoriteUncheckedCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FavoriteUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FavoriteUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class FavoriteUncheckedUpdateManyWithoutFavoritesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoriteUncheckedUpdateManyWithoutProductInput {
    @Field(() => [FavoriteCreateWithoutProductInput], {nullable:true})
    create?: Array<FavoriteCreateWithoutProductInput>;
    @Field(() => [FavoriteCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutProductInput>;
    @Field(() => [FavoriteUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<FavoriteUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => FavoriteCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof FavoriteCreateManyProductInputEnvelope>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    connect?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    set?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    disconnect?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    delete?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<FavoriteUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [FavoriteUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<FavoriteUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    deleteMany?: Array<FavoriteScalarWhereInput>;
}

@InputType()
export class FavoriteUncheckedUpdateManyWithoutUserInput {
    @Field(() => [FavoriteCreateWithoutUserInput], {nullable:true})
    create?: Array<FavoriteCreateWithoutUserInput>;
    @Field(() => [FavoriteCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutUserInput>;
    @Field(() => [FavoriteUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<FavoriteUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => FavoriteCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof FavoriteCreateManyUserInputEnvelope>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    connect?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    set?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    disconnect?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    delete?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<FavoriteUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [FavoriteUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<FavoriteUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    deleteMany?: Array<FavoriteScalarWhereInput>;
}

@InputType()
export class FavoriteUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoriteUncheckedUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoriteUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoriteUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoriteUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class FavoriteUpdateManyWithWhereWithoutProductInput {
    @Field(() => FavoriteScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof FavoriteScalarWhereInput>;
    @Field(() => FavoriteUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof FavoriteUpdateManyMutationInput>;
}

@InputType()
export class FavoriteUpdateManyWithWhereWithoutUserInput {
    @Field(() => FavoriteScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof FavoriteScalarWhereInput>;
    @Field(() => FavoriteUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof FavoriteUpdateManyMutationInput>;
}

@InputType()
export class FavoriteUpdateManyWithoutProductInput {
    @Field(() => [FavoriteCreateWithoutProductInput], {nullable:true})
    create?: Array<FavoriteCreateWithoutProductInput>;
    @Field(() => [FavoriteCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutProductInput>;
    @Field(() => [FavoriteUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<FavoriteUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => FavoriteCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof FavoriteCreateManyProductInputEnvelope>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    connect?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    set?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    disconnect?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    delete?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<FavoriteUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [FavoriteUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<FavoriteUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    deleteMany?: Array<FavoriteScalarWhereInput>;
}

@InputType()
export class FavoriteUpdateManyWithoutUserInput {
    @Field(() => [FavoriteCreateWithoutUserInput], {nullable:true})
    create?: Array<FavoriteCreateWithoutUserInput>;
    @Field(() => [FavoriteCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<FavoriteCreateOrConnectWithoutUserInput>;
    @Field(() => [FavoriteUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<FavoriteUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => FavoriteCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof FavoriteCreateManyUserInputEnvelope>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    connect?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    set?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    disconnect?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteWhereUniqueInput], {nullable:true})
    delete?: Array<FavoriteWhereUniqueInput>;
    @Field(() => [FavoriteUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<FavoriteUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [FavoriteUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<FavoriteUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [FavoriteScalarWhereInput], {nullable:true})
    deleteMany?: Array<FavoriteScalarWhereInput>;
}

@InputType()
export class FavoriteUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof FavoriteWhereUniqueInput>;
    @Field(() => FavoriteUpdateWithoutProductInput, {nullable:false})
    data!: InstanceType<typeof FavoriteUpdateWithoutProductInput>;
}

@InputType()
export class FavoriteUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof FavoriteWhereUniqueInput>;
    @Field(() => FavoriteUpdateWithoutUserInput, {nullable:false})
    data!: InstanceType<typeof FavoriteUpdateWithoutUserInput>;
}

@InputType()
export class FavoriteUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutFavoritesInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutFavoritesInput>;
}

@InputType()
export class FavoriteUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateOneWithoutFavoritesInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutFavoritesInput>;
}

@InputType()
export class FavoriteUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutFavoritesInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutFavoritesInput>;
    @Field(() => ProductUpdateOneWithoutFavoritesInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutFavoritesInput>;
}

@InputType()
export class FavoriteUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof FavoriteWhereUniqueInput>;
    @Field(() => FavoriteUpdateWithoutProductInput, {nullable:false})
    update!: InstanceType<typeof FavoriteUpdateWithoutProductInput>;
    @Field(() => FavoriteCreateWithoutProductInput, {nullable:false})
    create!: InstanceType<typeof FavoriteCreateWithoutProductInput>;
}

@InputType()
export class FavoriteUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof FavoriteWhereUniqueInput>;
    @Field(() => FavoriteUpdateWithoutUserInput, {nullable:false})
    update!: InstanceType<typeof FavoriteUpdateWithoutUserInput>;
    @Field(() => FavoriteCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof FavoriteCreateWithoutUserInput>;
}

@InputType()
export class FavoriteWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class FavoriteWhereInput {
    @Field(() => [FavoriteWhereInput], {nullable:true})
    AND?: Array<FavoriteWhereInput>;
    @Field(() => [FavoriteWhereInput], {nullable:true})
    OR?: Array<FavoriteWhereInput>;
    @Field(() => [FavoriteWhereInput], {nullable:true})
    NOT?: Array<FavoriteWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Favorite {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User>;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Product, {nullable:true})
    product?: InstanceType<typeof Product>;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@ArgsType()
export class FindFirstFavoriteArgs {
    @Field(() => FavoriteWhereInput, {nullable:true})
    where?: InstanceType<typeof FavoriteWhereInput>;
    @Field(() => [FavoriteOrderByInput], {nullable:true})
    orderBy?: Array<FavoriteOrderByInput>;
    @Field(() => FavoriteWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FavoriteWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FavoriteScalarFieldEnum], {nullable:true})
    distinct?: Array<FavoriteScalarFieldEnum>;
}

@ArgsType()
export class FindManyFavoriteArgs {
    @Field(() => FavoriteWhereInput, {nullable:true})
    where?: InstanceType<typeof FavoriteWhereInput>;
    @Field(() => [FavoriteOrderByInput], {nullable:true})
    orderBy?: Array<FavoriteOrderByInput>;
    @Field(() => FavoriteWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof FavoriteWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [FavoriteScalarFieldEnum], {nullable:true})
    distinct?: Array<FavoriteScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueFavoriteArgs {
    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof FavoriteWhereUniqueInput>;
}

@ArgsType()
export class GroupByFavoriteArgs {
    @Field(() => FavoriteWhereInput, {nullable:true})
    where?: InstanceType<typeof FavoriteWhereInput>;
    @Field(() => [FavoriteOrderByInput], {nullable:true})
    orderBy?: Array<FavoriteOrderByInput>;
    @Field(() => [FavoriteScalarFieldEnum], {nullable:false})
    by!: Array<FavoriteScalarFieldEnum>;
    @Field(() => FavoriteScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof FavoriteScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => FavoriteCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof FavoriteCountAggregateInput>;
    @Field(() => FavoriteMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof FavoriteMinAggregateInput>;
    @Field(() => FavoriteMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof FavoriteMaxAggregateInput>;
}

@ArgsType()
export class UpdateManyFavoriteArgs {
    @Field(() => FavoriteUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof FavoriteUpdateManyMutationInput>;
    @Field(() => FavoriteWhereInput, {nullable:true})
    where?: InstanceType<typeof FavoriteWhereInput>;
}

@ArgsType()
export class UpdateOneFavoriteArgs {
    @Field(() => FavoriteUpdateInput, {nullable:false})
    data!: InstanceType<typeof FavoriteUpdateInput>;
    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof FavoriteWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneFavoriteArgs {
    @Field(() => FavoriteWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof FavoriteWhereUniqueInput>;
    @Field(() => FavoriteCreateInput, {nullable:false})
    create!: InstanceType<typeof FavoriteCreateInput>;
    @Field(() => FavoriteUpdateInput, {nullable:false})
    update!: InstanceType<typeof FavoriteUpdateInput>;
}

@ArgsType()
export class AggregateLikeArgs {
    @Field(() => LikeWhereInput, {nullable:true})
    where?: InstanceType<typeof LikeWhereInput>;
    @Field(() => [LikeOrderByInput], {nullable:true})
    orderBy?: Array<LikeOrderByInput>;
    @Field(() => LikeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LikeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LikeCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof LikeCountAggregateInput>;
    @Field(() => LikeMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof LikeMinAggregateInput>;
    @Field(() => LikeMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof LikeMaxAggregateInput>;
}

@ObjectType()
export class AggregateLike {
    @Field(() => LikeCountAggregate, {nullable:true})
    count?: InstanceType<typeof LikeCountAggregate>;
    @Field(() => LikeMinAggregate, {nullable:true})
    min?: InstanceType<typeof LikeMinAggregate>;
    @Field(() => LikeMaxAggregate, {nullable:true})
    max?: InstanceType<typeof LikeMaxAggregate>;
}

@ArgsType()
export class CreateManyLikeArgs {
    @Field(() => [LikeCreateManyInput], {nullable:false})
    data!: Array<LikeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneLikeArgs {
    @Field(() => LikeCreateInput, {nullable:false})
    data!: InstanceType<typeof LikeCreateInput>;
}

@ArgsType()
export class DeleteManyLikeArgs {
    @Field(() => LikeWhereInput, {nullable:true})
    where?: InstanceType<typeof LikeWhereInput>;
}

@ArgsType()
export class DeleteOneLikeArgs {
    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LikeWhereUniqueInput>;
}

@ArgsType()
export class FindFirstLikeArgs {
    @Field(() => LikeWhereInput, {nullable:true})
    where?: InstanceType<typeof LikeWhereInput>;
    @Field(() => [LikeOrderByInput], {nullable:true})
    orderBy?: Array<LikeOrderByInput>;
    @Field(() => LikeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LikeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LikeScalarFieldEnum], {nullable:true})
    distinct?: Array<LikeScalarFieldEnum>;
}

@ArgsType()
export class FindManyLikeArgs {
    @Field(() => LikeWhereInput, {nullable:true})
    where?: InstanceType<typeof LikeWhereInput>;
    @Field(() => [LikeOrderByInput], {nullable:true})
    orderBy?: Array<LikeOrderByInput>;
    @Field(() => LikeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LikeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LikeScalarFieldEnum], {nullable:true})
    distinct?: Array<LikeScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueLikeArgs {
    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LikeWhereUniqueInput>;
}

@ArgsType()
export class GroupByLikeArgs {
    @Field(() => LikeWhereInput, {nullable:true})
    where?: InstanceType<typeof LikeWhereInput>;
    @Field(() => [LikeOrderByInput], {nullable:true})
    orderBy?: Array<LikeOrderByInput>;
    @Field(() => [LikeScalarFieldEnum], {nullable:false})
    by!: Array<LikeScalarFieldEnum>;
    @Field(() => LikeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof LikeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LikeCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof LikeCountAggregateInput>;
    @Field(() => LikeMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof LikeMinAggregateInput>;
    @Field(() => LikeMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof LikeMaxAggregateInput>;
}

@InputType()
export class LikeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class LikeCountAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => Int, {nullable:true})
    productId?: number;
    @Field(() => Int, {nullable:true})
    createdAt?: number;
    @Field(() => Int, {nullable:true})
    updatedAt?: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class LikeCreateManyProductInputEnvelope {
    @Field(() => [LikeCreateManyProductInput], {nullable:false})
    data!: Array<LikeCreateManyProductInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class LikeCreateManyProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LikeCreateManyUserInputEnvelope {
    @Field(() => [LikeCreateManyUserInput], {nullable:false})
    data!: Array<LikeCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class LikeCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LikeCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LikeCreateNestedManyWithoutProductInput {
    @Field(() => [LikeCreateWithoutProductInput], {nullable:true})
    create?: Array<LikeCreateWithoutProductInput>;
    @Field(() => [LikeCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<LikeCreateOrConnectWithoutProductInput>;
    @Field(() => LikeCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LikeCreateManyProductInputEnvelope>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    connect?: Array<LikeWhereUniqueInput>;
}

@InputType()
export class LikeCreateNestedManyWithoutUserInput {
    @Field(() => [LikeCreateWithoutUserInput], {nullable:true})
    create?: Array<LikeCreateWithoutUserInput>;
    @Field(() => [LikeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<LikeCreateOrConnectWithoutUserInput>;
    @Field(() => LikeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LikeCreateManyUserInputEnvelope>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    connect?: Array<LikeWhereUniqueInput>;
}

@InputType()
export class LikeCreateOrConnectWithoutProductInput {
    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LikeWhereUniqueInput>;
    @Field(() => LikeCreateWithoutProductInput, {nullable:false})
    create!: InstanceType<typeof LikeCreateWithoutProductInput>;
}

@InputType()
export class LikeCreateOrConnectWithoutUserInput {
    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LikeWhereUniqueInput>;
    @Field(() => LikeCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof LikeCreateWithoutUserInput>;
}

@InputType()
export class LikeCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutLikesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutLikesInput>;
}

@InputType()
export class LikeCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedOneWithoutLikesInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutLikesInput>;
}

@InputType()
export class LikeCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutLikesInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutLikesInput>;
    @Field(() => ProductCreateNestedOneWithoutLikesInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutLikesInput>;
}

@ObjectType()
export class LikeGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => LikeCountAggregate, {nullable:true})
    count?: InstanceType<typeof LikeCountAggregate>;
    @Field(() => LikeMinAggregate, {nullable:true})
    min?: InstanceType<typeof LikeMinAggregate>;
    @Field(() => LikeMaxAggregate, {nullable:true})
    max?: InstanceType<typeof LikeMaxAggregate>;
}

@InputType()
export class LikeListRelationFilter {
    @Field(() => LikeWhereInput, {nullable:true})
    every?: InstanceType<typeof LikeWhereInput>;
    @Field(() => LikeWhereInput, {nullable:true})
    some?: InstanceType<typeof LikeWhereInput>;
    @Field(() => LikeWhereInput, {nullable:true})
    none?: InstanceType<typeof LikeWhereInput>;
}

@InputType()
export class LikeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class LikeMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LikeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class LikeMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LikeOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}

@InputType()
export class LikeScalarWhereWithAggregatesInput {
    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LikeScalarWhereWithAggregatesInput>;
    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LikeScalarWhereWithAggregatesInput>;
    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LikeScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class LikeScalarWhereInput {
    @Field(() => [LikeScalarWhereInput], {nullable:true})
    AND?: Array<LikeScalarWhereInput>;
    @Field(() => [LikeScalarWhereInput], {nullable:true})
    OR?: Array<LikeScalarWhereInput>;
    @Field(() => [LikeScalarWhereInput], {nullable:true})
    NOT?: Array<LikeScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class LikeUncheckedCreateNestedManyWithoutProductInput {
    @Field(() => [LikeCreateWithoutProductInput], {nullable:true})
    create?: Array<LikeCreateWithoutProductInput>;
    @Field(() => [LikeCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<LikeCreateOrConnectWithoutProductInput>;
    @Field(() => LikeCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LikeCreateManyProductInputEnvelope>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    connect?: Array<LikeWhereUniqueInput>;
}

@InputType()
export class LikeUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [LikeCreateWithoutUserInput], {nullable:true})
    create?: Array<LikeCreateWithoutUserInput>;
    @Field(() => [LikeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<LikeCreateOrConnectWithoutUserInput>;
    @Field(() => LikeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LikeCreateManyUserInputEnvelope>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    connect?: Array<LikeWhereUniqueInput>;
}

@InputType()
export class LikeUncheckedCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LikeUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LikeUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LikeUncheckedUpdateManyWithoutLikesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class LikeUncheckedUpdateManyWithoutProductInput {
    @Field(() => [LikeCreateWithoutProductInput], {nullable:true})
    create?: Array<LikeCreateWithoutProductInput>;
    @Field(() => [LikeCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<LikeCreateOrConnectWithoutProductInput>;
    @Field(() => [LikeUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => LikeCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LikeCreateManyProductInputEnvelope>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    connect?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    set?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    disconnect?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    delete?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<LikeUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [LikeUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<LikeUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [LikeScalarWhereInput], {nullable:true})
    deleteMany?: Array<LikeScalarWhereInput>;
}

@InputType()
export class LikeUncheckedUpdateManyWithoutUserInput {
    @Field(() => [LikeCreateWithoutUserInput], {nullable:true})
    create?: Array<LikeCreateWithoutUserInput>;
    @Field(() => [LikeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<LikeCreateOrConnectWithoutUserInput>;
    @Field(() => [LikeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => LikeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LikeCreateManyUserInputEnvelope>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    connect?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    set?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    disconnect?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    delete?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<LikeUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [LikeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<LikeUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [LikeScalarWhereInput], {nullable:true})
    deleteMany?: Array<LikeScalarWhereInput>;
}

@InputType()
export class LikeUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class LikeUncheckedUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class LikeUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class LikeUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class LikeUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class LikeUpdateManyWithWhereWithoutProductInput {
    @Field(() => LikeScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof LikeScalarWhereInput>;
    @Field(() => LikeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof LikeUpdateManyMutationInput>;
}

@InputType()
export class LikeUpdateManyWithWhereWithoutUserInput {
    @Field(() => LikeScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof LikeScalarWhereInput>;
    @Field(() => LikeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof LikeUpdateManyMutationInput>;
}

@InputType()
export class LikeUpdateManyWithoutProductInput {
    @Field(() => [LikeCreateWithoutProductInput], {nullable:true})
    create?: Array<LikeCreateWithoutProductInput>;
    @Field(() => [LikeCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<LikeCreateOrConnectWithoutProductInput>;
    @Field(() => [LikeUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => LikeCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LikeCreateManyProductInputEnvelope>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    connect?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    set?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    disconnect?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    delete?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<LikeUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [LikeUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<LikeUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [LikeScalarWhereInput], {nullable:true})
    deleteMany?: Array<LikeScalarWhereInput>;
}

@InputType()
export class LikeUpdateManyWithoutUserInput {
    @Field(() => [LikeCreateWithoutUserInput], {nullable:true})
    create?: Array<LikeCreateWithoutUserInput>;
    @Field(() => [LikeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<LikeCreateOrConnectWithoutUserInput>;
    @Field(() => [LikeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => LikeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LikeCreateManyUserInputEnvelope>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    connect?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    set?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    disconnect?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    delete?: Array<LikeWhereUniqueInput>;
    @Field(() => [LikeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<LikeUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [LikeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<LikeUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [LikeScalarWhereInput], {nullable:true})
    deleteMany?: Array<LikeScalarWhereInput>;
}

@InputType()
export class LikeUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LikeWhereUniqueInput>;
    @Field(() => LikeUpdateWithoutProductInput, {nullable:false})
    data!: InstanceType<typeof LikeUpdateWithoutProductInput>;
}

@InputType()
export class LikeUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LikeWhereUniqueInput>;
    @Field(() => LikeUpdateWithoutUserInput, {nullable:false})
    data!: InstanceType<typeof LikeUpdateWithoutUserInput>;
}

@InputType()
export class LikeUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutLikesInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutLikesInput>;
}

@InputType()
export class LikeUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateOneWithoutLikesInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutLikesInput>;
}

@InputType()
export class LikeUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutLikesInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutLikesInput>;
    @Field(() => ProductUpdateOneWithoutLikesInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutLikesInput>;
}

@InputType()
export class LikeUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LikeWhereUniqueInput>;
    @Field(() => LikeUpdateWithoutProductInput, {nullable:false})
    update!: InstanceType<typeof LikeUpdateWithoutProductInput>;
    @Field(() => LikeCreateWithoutProductInput, {nullable:false})
    create!: InstanceType<typeof LikeCreateWithoutProductInput>;
}

@InputType()
export class LikeUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LikeWhereUniqueInput>;
    @Field(() => LikeUpdateWithoutUserInput, {nullable:false})
    update!: InstanceType<typeof LikeUpdateWithoutUserInput>;
    @Field(() => LikeCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof LikeCreateWithoutUserInput>;
}

@InputType()
export class LikeWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class LikeWhereInput {
    @Field(() => [LikeWhereInput], {nullable:true})
    AND?: Array<LikeWhereInput>;
    @Field(() => [LikeWhereInput], {nullable:true})
    OR?: Array<LikeWhereInput>;
    @Field(() => [LikeWhereInput], {nullable:true})
    NOT?: Array<LikeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Like {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User>;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Product, {nullable:true})
    product?: InstanceType<typeof Product>;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@ArgsType()
export class UpdateManyLikeArgs {
    @Field(() => LikeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof LikeUpdateManyMutationInput>;
    @Field(() => LikeWhereInput, {nullable:true})
    where?: InstanceType<typeof LikeWhereInput>;
}

@ArgsType()
export class UpdateOneLikeArgs {
    @Field(() => LikeUpdateInput, {nullable:false})
    data!: InstanceType<typeof LikeUpdateInput>;
    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LikeWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneLikeArgs {
    @Field(() => LikeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LikeWhereUniqueInput>;
    @Field(() => LikeCreateInput, {nullable:false})
    create!: InstanceType<typeof LikeCreateInput>;
    @Field(() => LikeUpdateInput, {nullable:false})
    update!: InstanceType<typeof LikeUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumProductPublishStatusFieldUpdateOperationsInput {
    @Field(() => ProductPublishStatus, {nullable:true})
    set?: ProductPublishStatus;
}

@InputType()
export class EnumProductPublishStatusFilter {
    @Field(() => ProductPublishStatus, {nullable:true})
    equals?: ProductPublishStatus;
    @Field(() => [ProductPublishStatus], {nullable:true})
    in?: Array<ProductPublishStatus>;
    @Field(() => [ProductPublishStatus], {nullable:true})
    notIn?: Array<ProductPublishStatus>;
    @Field(() => NestedEnumProductPublishStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductPublishStatusFilter>;
}

@InputType()
export class EnumProductPublishStatusWithAggregatesFilter {
    @Field(() => ProductPublishStatus, {nullable:true})
    equals?: ProductPublishStatus;
    @Field(() => [ProductPublishStatus], {nullable:true})
    in?: Array<ProductPublishStatus>;
    @Field(() => [ProductPublishStatus], {nullable:true})
    notIn?: Array<ProductPublishStatus>;
    @Field(() => NestedEnumProductPublishStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductPublishStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductPublishStatusFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumProductPublishStatusFilter>;
    @Field(() => NestedEnumProductPublishStatusFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumProductPublishStatusFilter>;
}

@InputType()
export class EnumProductSeasonFieldUpdateOperationsInput {
    @Field(() => ProductSeason, {nullable:true})
    set?: ProductSeason;
}

@InputType()
export class EnumProductSeasonFilter {
    @Field(() => ProductSeason, {nullable:true})
    equals?: ProductSeason;
    @Field(() => [ProductSeason], {nullable:true})
    in?: Array<ProductSeason>;
    @Field(() => [ProductSeason], {nullable:true})
    notIn?: Array<ProductSeason>;
    @Field(() => NestedEnumProductSeasonFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductSeasonFilter>;
}

@InputType()
export class EnumProductSeasonWithAggregatesFilter {
    @Field(() => ProductSeason, {nullable:true})
    equals?: ProductSeason;
    @Field(() => [ProductSeason], {nullable:true})
    in?: Array<ProductSeason>;
    @Field(() => [ProductSeason], {nullable:true})
    notIn?: Array<ProductSeason>;
    @Field(() => NestedEnumProductSeasonWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductSeasonWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductSeasonFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumProductSeasonFilter>;
    @Field(() => NestedEnumProductSeasonFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumProductSeasonFilter>;
}

@InputType()
export class EnumProductSizeFieldUpdateOperationsInput {
    @Field(() => ProductSize, {nullable:true})
    set?: ProductSize;
}

@InputType()
export class EnumProductSizeFilter {
    @Field(() => ProductSize, {nullable:true})
    equals?: ProductSize;
    @Field(() => [ProductSize], {nullable:true})
    in?: Array<ProductSize>;
    @Field(() => [ProductSize], {nullable:true})
    notIn?: Array<ProductSize>;
    @Field(() => NestedEnumProductSizeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductSizeFilter>;
}

@InputType()
export class EnumProductSizeWithAggregatesFilter {
    @Field(() => ProductSize, {nullable:true})
    equals?: ProductSize;
    @Field(() => [ProductSize], {nullable:true})
    in?: Array<ProductSize>;
    @Field(() => [ProductSize], {nullable:true})
    notIn?: Array<ProductSize>;
    @Field(() => NestedEnumProductSizeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductSizeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductSizeFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumProductSizeFilter>;
    @Field(() => NestedEnumProductSizeFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumProductSizeFilter>;
}

@InputType()
export class EnumProductStatusFieldUpdateOperationsInput {
    @Field(() => ProductStatus, {nullable:true})
    set?: ProductStatus;
}

@InputType()
export class EnumProductStatusFilter {
    @Field(() => ProductStatus, {nullable:true})
    equals?: ProductStatus;
    @Field(() => [ProductStatus], {nullable:true})
    in?: Array<ProductStatus>;
    @Field(() => [ProductStatus], {nullable:true})
    notIn?: Array<ProductStatus>;
    @Field(() => NestedEnumProductStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductStatusFilter>;
}

@InputType()
export class EnumProductStatusWithAggregatesFilter {
    @Field(() => ProductStatus, {nullable:true})
    equals?: ProductStatus;
    @Field(() => [ProductStatus], {nullable:true})
    in?: Array<ProductStatus>;
    @Field(() => [ProductStatus], {nullable:true})
    notIn?: Array<ProductStatus>;
    @Field(() => NestedEnumProductStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductStatusFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumProductStatusFilter>;
    @Field(() => NestedEnumProductStatusFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumProductStatusFilter>;
}

@InputType()
export class EnumUserRoleFieldUpdateOperationsInput {
    @Field(() => UserRole, {nullable:true})
    set?: UserRole;
}

@InputType()
export class EnumUserRoleFilter {
    @Field(() => UserRole, {nullable:true})
    equals?: UserRole;
    @Field(() => [UserRole], {nullable:true})
    in?: Array<UserRole>;
    @Field(() => [UserRole], {nullable:true})
    notIn?: Array<UserRole>;
    @Field(() => NestedEnumUserRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserRoleFilter>;
}

@InputType()
export class EnumUserRoleWithAggregatesFilter {
    @Field(() => UserRole, {nullable:true})
    equals?: UserRole;
    @Field(() => [UserRole], {nullable:true})
    in?: Array<UserRole>;
    @Field(() => [UserRole], {nullable:true})
    notIn?: Array<UserRole>;
    @Field(() => NestedEnumUserRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumUserRoleFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumUserRoleFilter>;
    @Field(() => NestedEnumUserRoleFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumUserRoleFilter>;
}

@InputType()
export class EnumUserStatusFieldUpdateOperationsInput {
    @Field(() => UserStatus, {nullable:true})
    set?: UserStatus;
}

@InputType()
export class EnumUserStatusFilter {
    @Field(() => UserStatus, {nullable:true})
    equals?: UserStatus;
    @Field(() => [UserStatus], {nullable:true})
    in?: Array<UserStatus>;
    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<UserStatus>;
    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserStatusFilter>;
}

@InputType()
export class EnumUserStatusWithAggregatesFilter {
    @Field(() => UserStatus, {nullable:true})
    equals?: UserStatus;
    @Field(() => [UserStatus], {nullable:true})
    in?: Array<UserStatus>;
    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<UserStatus>;
    @Field(() => NestedEnumUserStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumUserStatusFilter>;
    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumUserStatusFilter>;
}

@InputType()
export class FloatFieldUpdateOperationsInput {
    @Field(() => Float, {nullable:true})
    set?: number;
    @Field(() => Float, {nullable:true})
    increment?: number;
    @Field(() => Float, {nullable:true})
    decrement?: number;
    @Field(() => Float, {nullable:true})
    multiply?: number;
    @Field(() => Float, {nullable:true})
    divide?: number;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumProductPublishStatusFilter {
    @Field(() => ProductPublishStatus, {nullable:true})
    equals?: ProductPublishStatus;
    @Field(() => [ProductPublishStatus], {nullable:true})
    in?: Array<ProductPublishStatus>;
    @Field(() => [ProductPublishStatus], {nullable:true})
    notIn?: Array<ProductPublishStatus>;
    @Field(() => NestedEnumProductPublishStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductPublishStatusFilter>;
}

@InputType()
export class NestedEnumProductPublishStatusWithAggregatesFilter {
    @Field(() => ProductPublishStatus, {nullable:true})
    equals?: ProductPublishStatus;
    @Field(() => [ProductPublishStatus], {nullable:true})
    in?: Array<ProductPublishStatus>;
    @Field(() => [ProductPublishStatus], {nullable:true})
    notIn?: Array<ProductPublishStatus>;
    @Field(() => NestedEnumProductPublishStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductPublishStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductPublishStatusFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumProductPublishStatusFilter>;
    @Field(() => NestedEnumProductPublishStatusFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumProductPublishStatusFilter>;
}

@InputType()
export class NestedEnumProductSeasonFilter {
    @Field(() => ProductSeason, {nullable:true})
    equals?: ProductSeason;
    @Field(() => [ProductSeason], {nullable:true})
    in?: Array<ProductSeason>;
    @Field(() => [ProductSeason], {nullable:true})
    notIn?: Array<ProductSeason>;
    @Field(() => NestedEnumProductSeasonFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductSeasonFilter>;
}

@InputType()
export class NestedEnumProductSeasonWithAggregatesFilter {
    @Field(() => ProductSeason, {nullable:true})
    equals?: ProductSeason;
    @Field(() => [ProductSeason], {nullable:true})
    in?: Array<ProductSeason>;
    @Field(() => [ProductSeason], {nullable:true})
    notIn?: Array<ProductSeason>;
    @Field(() => NestedEnumProductSeasonWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductSeasonWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductSeasonFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumProductSeasonFilter>;
    @Field(() => NestedEnumProductSeasonFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumProductSeasonFilter>;
}

@InputType()
export class NestedEnumProductSizeFilter {
    @Field(() => ProductSize, {nullable:true})
    equals?: ProductSize;
    @Field(() => [ProductSize], {nullable:true})
    in?: Array<ProductSize>;
    @Field(() => [ProductSize], {nullable:true})
    notIn?: Array<ProductSize>;
    @Field(() => NestedEnumProductSizeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductSizeFilter>;
}

@InputType()
export class NestedEnumProductSizeWithAggregatesFilter {
    @Field(() => ProductSize, {nullable:true})
    equals?: ProductSize;
    @Field(() => [ProductSize], {nullable:true})
    in?: Array<ProductSize>;
    @Field(() => [ProductSize], {nullable:true})
    notIn?: Array<ProductSize>;
    @Field(() => NestedEnumProductSizeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductSizeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductSizeFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumProductSizeFilter>;
    @Field(() => NestedEnumProductSizeFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumProductSizeFilter>;
}

@InputType()
export class NestedEnumProductStatusFilter {
    @Field(() => ProductStatus, {nullable:true})
    equals?: ProductStatus;
    @Field(() => [ProductStatus], {nullable:true})
    in?: Array<ProductStatus>;
    @Field(() => [ProductStatus], {nullable:true})
    notIn?: Array<ProductStatus>;
    @Field(() => NestedEnumProductStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductStatusFilter>;
}

@InputType()
export class NestedEnumProductStatusWithAggregatesFilter {
    @Field(() => ProductStatus, {nullable:true})
    equals?: ProductStatus;
    @Field(() => [ProductStatus], {nullable:true})
    in?: Array<ProductStatus>;
    @Field(() => [ProductStatus], {nullable:true})
    notIn?: Array<ProductStatus>;
    @Field(() => NestedEnumProductStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumProductStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumProductStatusFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumProductStatusFilter>;
    @Field(() => NestedEnumProductStatusFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumProductStatusFilter>;
}

@InputType()
export class NestedEnumUserRoleFilter {
    @Field(() => UserRole, {nullable:true})
    equals?: UserRole;
    @Field(() => [UserRole], {nullable:true})
    in?: Array<UserRole>;
    @Field(() => [UserRole], {nullable:true})
    notIn?: Array<UserRole>;
    @Field(() => NestedEnumUserRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserRoleFilter>;
}

@InputType()
export class NestedEnumUserRoleWithAggregatesFilter {
    @Field(() => UserRole, {nullable:true})
    equals?: UserRole;
    @Field(() => [UserRole], {nullable:true})
    in?: Array<UserRole>;
    @Field(() => [UserRole], {nullable:true})
    notIn?: Array<UserRole>;
    @Field(() => NestedEnumUserRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumUserRoleFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumUserRoleFilter>;
    @Field(() => NestedEnumUserRoleFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumUserRoleFilter>;
}

@InputType()
export class NestedEnumUserStatusFilter {
    @Field(() => UserStatus, {nullable:true})
    equals?: UserStatus;
    @Field(() => [UserStatus], {nullable:true})
    in?: Array<UserStatus>;
    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<UserStatus>;
    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserStatusFilter>;
}

@InputType()
export class NestedEnumUserStatusWithAggregatesFilter {
    @Field(() => UserStatus, {nullable:true})
    equals?: UserStatus;
    @Field(() => [UserStatus], {nullable:true})
    in?: Array<UserStatus>;
    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<UserStatus>;
    @Field(() => NestedEnumUserStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumUserStatusFilter>;
    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumUserStatusFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    max?: InstanceType<typeof NestedStringFilter>;
}

@ArgsType()
export class AggregateProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByInput], {nullable:true})
    orderBy?: Array<ProductOrderByInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof ProductCountAggregateInput>;
    @Field(() => ProductAvgAggregateInput, {nullable:true})
    avg?: InstanceType<typeof ProductAvgAggregateInput>;
    @Field(() => ProductSumAggregateInput, {nullable:true})
    sum?: InstanceType<typeof ProductSumAggregateInput>;
    @Field(() => ProductMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof ProductMinAggregateInput>;
    @Field(() => ProductMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof ProductMaxAggregateInput>;
}

@ObjectType()
export class AggregateProduct {
    @Field(() => ProductCountAggregate, {nullable:true})
    count?: InstanceType<typeof ProductCountAggregate>;
    @Field(() => ProductAvgAggregate, {nullable:true})
    avg?: InstanceType<typeof ProductAvgAggregate>;
    @Field(() => ProductSumAggregate, {nullable:true})
    sum?: InstanceType<typeof ProductSumAggregate>;
    @Field(() => ProductMinAggregate, {nullable:true})
    min?: InstanceType<typeof ProductMinAggregate>;
    @Field(() => ProductMaxAggregate, {nullable:true})
    max?: InstanceType<typeof ProductMaxAggregate>;
}

@ArgsType()
export class CreateManyProductArgs {
    @Field(() => [ProductCreateManyInput], {nullable:false})
    data!: Array<ProductCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductArgs {
    @Field(() => ProductCreateInput, {nullable:false})
    data!: InstanceType<typeof ProductCreateInput>;
}

@ArgsType()
export class DeleteManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductWhereInput>;
}

@ArgsType()
export class DeleteOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByInput], {nullable:true})
    orderBy?: Array<ProductOrderByInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<ProductScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByInput], {nullable:true})
    orderBy?: Array<ProductOrderByInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<ProductScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
}

@ArgsType()
export class GroupByProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByInput], {nullable:true})
    orderBy?: Array<ProductOrderByInput>;
    @Field(() => [ProductScalarFieldEnum], {nullable:false})
    by!: Array<ProductScalarFieldEnum>;
    @Field(() => ProductScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof ProductCountAggregateInput>;
    @Field(() => ProductAvgAggregateInput, {nullable:true})
    avg?: InstanceType<typeof ProductAvgAggregateInput>;
    @Field(() => ProductSumAggregateInput, {nullable:true})
    sum?: InstanceType<typeof ProductSumAggregateInput>;
    @Field(() => ProductMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof ProductMinAggregateInput>;
    @Field(() => ProductMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof ProductMaxAggregateInput>;
}

@InputType()
export class ProductAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    viewsNumber?: true;
}

@ObjectType()
export class ProductAvgAggregate {
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => Float, {nullable:false})
    viewsNumber!: number;
}

@InputType()
export class ProductCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    desc?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    size?: true;
    @Field(() => Boolean, {nullable:true})
    season?: true;
    @Field(() => Boolean, {nullable:true})
    dateOfPurchase?: true;
    @Field(() => Boolean, {nullable:true})
    viewsNumber?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    brandId?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    publishStatus?: true;
    @Field(() => Boolean, {nullable:true})
    productStatus?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductCountAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    title?: number;
    @Field(() => Int, {nullable:true})
    desc?: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    size?: number;
    @Field(() => Int, {nullable:true})
    season?: number;
    @Field(() => Int, {nullable:true})
    dateOfPurchase?: number;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
    @Field(() => Int, {nullable:true})
    categoryId?: number;
    @Field(() => Int, {nullable:true})
    brandId?: number;
    @Field(() => Int, {nullable:true})
    authorId?: number;
    @Field(() => Int, {nullable:true})
    publishStatus?: number;
    @Field(() => Int, {nullable:true})
    productStatus?: number;
    @Field(() => Int, {nullable:true})
    createdAt?: number;
    @Field(() => Int, {nullable:true})
    updatedAt?: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProductCreateManyAuthorInputEnvelope {
    @Field(() => [ProductCreateManyAuthorInput], {nullable:false})
    data!: Array<ProductCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCreateManyBrandInputEnvelope {
    @Field(() => [ProductCreateManyBrandInput], {nullable:false})
    data!: Array<ProductCreateManyBrandInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductCreateManyBrandInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCreateManyCategoryInputEnvelope {
    @Field(() => [ProductCreateManyCategoryInput], {nullable:false})
    data!: Array<ProductCreateManyCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductCreateManyCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCreateManyCityInputEnvelope {
    @Field(() => [ProductCreateManyCityInput], {nullable:false})
    data!: Array<ProductCreateManyCityInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductCreateManyCityInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductCreateNestedManyWithoutAuthorInput {
    @Field(() => [ProductCreateWithoutAuthorInput], {nullable:true})
    create?: Array<ProductCreateWithoutAuthorInput>;
    @Field(() => [ProductCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutAuthorInput>;
    @Field(() => ProductCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyAuthorInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedManyWithoutBrandInput {
    @Field(() => [ProductCreateWithoutBrandInput], {nullable:true})
    create?: Array<ProductCreateWithoutBrandInput>;
    @Field(() => [ProductCreateOrConnectWithoutBrandInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBrandInput>;
    @Field(() => ProductCreateManyBrandInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyBrandInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedManyWithoutCategoryInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedManyWithoutCityInput {
    @Field(() => [ProductCreateWithoutCityInput], {nullable:true})
    create?: Array<ProductCreateWithoutCityInput>;
    @Field(() => [ProductCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCityInput>;
    @Field(() => ProductCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyCityInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedOneWithoutFavoritesInput {
    @Field(() => ProductCreateWithoutFavoritesInput, {nullable:true})
    create?: InstanceType<typeof ProductCreateWithoutFavoritesInput>;
    @Field(() => ProductCreateOrConnectWithoutFavoritesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutFavoritesInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedOneWithoutImagesInput {
    @Field(() => ProductCreateWithoutImagesInput, {nullable:true})
    create?: InstanceType<typeof ProductCreateWithoutImagesInput>;
    @Field(() => ProductCreateOrConnectWithoutImagesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutImagesInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedOneWithoutLikesInput {
    @Field(() => ProductCreateWithoutLikesInput, {nullable:true})
    create?: InstanceType<typeof ProductCreateWithoutLikesInput>;
    @Field(() => ProductCreateOrConnectWithoutLikesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutLikesInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutAuthorInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutAuthorInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutAuthorInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutBrandInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutBrandInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutBrandInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutCategoryInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutCityInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutCityInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutCityInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutFavoritesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutFavoritesInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutFavoritesInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutImagesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutImagesInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutImagesInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutLikesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutLikesInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutLikesInput>;
}

@InputType()
export class ProductCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageCreateNestedManyWithoutProductInput>;
    @Field(() => CityCreateNestedOneWithoutProductsInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutProductsInput>;
    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => BrandCreateNestedOneWithoutProductsInput, {nullable:false})
    brand!: InstanceType<typeof BrandCreateNestedOneWithoutProductsInput>;
    @Field(() => FavoriteCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutProductInput>;
    @Field(() => LikeCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutBrandInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageCreateNestedManyWithoutProductInput>;
    @Field(() => CityCreateNestedOneWithoutProductsInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutProductsInput>;
    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => UserCreateNestedOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutProductsInput>;
    @Field(() => FavoriteCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutProductInput>;
    @Field(() => LikeCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageCreateNestedManyWithoutProductInput>;
    @Field(() => CityCreateNestedOneWithoutProductsInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutProductsInput>;
    @Field(() => BrandCreateNestedOneWithoutProductsInput, {nullable:false})
    brand!: InstanceType<typeof BrandCreateNestedOneWithoutProductsInput>;
    @Field(() => UserCreateNestedOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutProductsInput>;
    @Field(() => FavoriteCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutProductInput>;
    @Field(() => LikeCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutCityInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageCreateNestedManyWithoutProductInput>;
    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => BrandCreateNestedOneWithoutProductsInput, {nullable:false})
    brand!: InstanceType<typeof BrandCreateNestedOneWithoutProductsInput>;
    @Field(() => UserCreateNestedOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutProductsInput>;
    @Field(() => FavoriteCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutProductInput>;
    @Field(() => LikeCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutFavoritesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageCreateNestedManyWithoutProductInput>;
    @Field(() => CityCreateNestedOneWithoutProductsInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutProductsInput>;
    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => BrandCreateNestedOneWithoutProductsInput, {nullable:false})
    brand!: InstanceType<typeof BrandCreateNestedOneWithoutProductsInput>;
    @Field(() => UserCreateNestedOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutProductsInput>;
    @Field(() => LikeCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityCreateNestedOneWithoutProductsInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutProductsInput>;
    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => BrandCreateNestedOneWithoutProductsInput, {nullable:false})
    brand!: InstanceType<typeof BrandCreateNestedOneWithoutProductsInput>;
    @Field(() => UserCreateNestedOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutProductsInput>;
    @Field(() => FavoriteCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutProductInput>;
    @Field(() => LikeCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutLikesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageCreateNestedManyWithoutProductInput>;
    @Field(() => CityCreateNestedOneWithoutProductsInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutProductsInput>;
    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => BrandCreateNestedOneWithoutProductsInput, {nullable:false})
    brand!: InstanceType<typeof BrandCreateNestedOneWithoutProductsInput>;
    @Field(() => UserCreateNestedOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutProductsInput>;
    @Field(() => FavoriteCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageCreateNestedManyWithoutProductInput>;
    @Field(() => CityCreateNestedOneWithoutProductsInput, {nullable:false})
    city!: InstanceType<typeof CityCreateNestedOneWithoutProductsInput>;
    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => BrandCreateNestedOneWithoutProductsInput, {nullable:false})
    brand!: InstanceType<typeof BrandCreateNestedOneWithoutProductsInput>;
    @Field(() => UserCreateNestedOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserCreateNestedOneWithoutProductsInput>;
    @Field(() => FavoriteCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutProductInput>;
    @Field(() => LikeCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutProductInput>;
}

@ObjectType()
export class ProductGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => ProductCountAggregate, {nullable:true})
    count?: InstanceType<typeof ProductCountAggregate>;
    @Field(() => ProductAvgAggregate, {nullable:true})
    avg?: InstanceType<typeof ProductAvgAggregate>;
    @Field(() => ProductSumAggregate, {nullable:true})
    sum?: InstanceType<typeof ProductSumAggregate>;
    @Field(() => ProductMinAggregate, {nullable:true})
    min?: InstanceType<typeof ProductMinAggregate>;
    @Field(() => ProductMaxAggregate, {nullable:true})
    max?: InstanceType<typeof ProductMaxAggregate>;
}

@InputType()
export class ProductListRelationFilter {
    @Field(() => ProductWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    desc?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    size?: true;
    @Field(() => Boolean, {nullable:true})
    season?: true;
    @Field(() => Boolean, {nullable:true})
    dateOfPurchase?: true;
    @Field(() => Boolean, {nullable:true})
    viewsNumber?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    brandId?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    publishStatus?: true;
    @Field(() => Boolean, {nullable:true})
    productStatus?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProductMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    desc?: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:true})
    size?: ProductSize;
    @Field(() => ProductSeason, {nullable:true})
    season?: ProductSeason;
    @Field(() => Date, {nullable:true})
    dateOfPurchase?: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => String, {nullable:true})
    categoryId?: string;
    @Field(() => String, {nullable:true})
    brandId?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:true})
    publishStatus?: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:true})
    productStatus?: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    desc?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    size?: true;
    @Field(() => Boolean, {nullable:true})
    season?: true;
    @Field(() => Boolean, {nullable:true})
    dateOfPurchase?: true;
    @Field(() => Boolean, {nullable:true})
    viewsNumber?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    brandId?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    publishStatus?: true;
    @Field(() => Boolean, {nullable:true})
    productStatus?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProductMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    desc?: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:true})
    size?: ProductSize;
    @Field(() => ProductSeason, {nullable:true})
    season?: ProductSeason;
    @Field(() => Date, {nullable:true})
    dateOfPurchase?: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => String, {nullable:true})
    categoryId?: string;
    @Field(() => String, {nullable:true})
    brandId?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:true})
    publishStatus?: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:true})
    productStatus?: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    desc?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    size?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    season?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateOfPurchase?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    viewsNumber?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brandId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    publishStatus?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productStatus?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}

@InputType()
export class ProductRelationFilter {
    @Field(() => ProductWhereInput, {nullable:true})
    is?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductScalarWhereWithAggregatesInput {
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    desc?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => EnumProductSizeWithAggregatesFilter, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeWithAggregatesFilter>;
    @Field(() => EnumProductSeasonWithAggregatesFilter, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    viewsNumber?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cityId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brandId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    authorId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumProductPublishStatusWithAggregatesFilter, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusWithAggregatesFilter>;
    @Field(() => EnumProductStatusWithAggregatesFilter, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ProductScalarWhereInput {
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    AND?: Array<ProductScalarWhereInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    OR?: Array<ProductScalarWhereInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    NOT?: Array<ProductScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    desc?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    price?: InstanceType<typeof FloatFilter>;
    @Field(() => EnumProductSizeFilter, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFilter>;
    @Field(() => EnumProductSeasonFilter, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntFilter, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    cityId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    brandId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumProductPublishStatusFilter, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFilter>;
    @Field(() => EnumProductStatusFilter, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ProductSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    viewsNumber?: true;
}

@ObjectType()
export class ProductSumAggregate {
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [ProductCreateWithoutAuthorInput], {nullable:true})
    create?: Array<ProductCreateWithoutAuthorInput>;
    @Field(() => [ProductCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutAuthorInput>;
    @Field(() => ProductCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyAuthorInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutBrandInput {
    @Field(() => [ProductCreateWithoutBrandInput], {nullable:true})
    create?: Array<ProductCreateWithoutBrandInput>;
    @Field(() => [ProductCreateOrConnectWithoutBrandInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBrandInput>;
    @Field(() => ProductCreateManyBrandInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyBrandInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutCategoryInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutCityInput {
    @Field(() => [ProductCreateWithoutCityInput], {nullable:true})
    create?: Array<ProductCreateWithoutCityInput>;
    @Field(() => [ProductCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCityInput>;
    @Field(() => ProductCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyCityInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutBrandInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutCityInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutFavoritesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutLikesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutAuthorInput {
    @Field(() => [ProductCreateWithoutAuthorInput], {nullable:true})
    create?: Array<ProductCreateWithoutAuthorInput>;
    @Field(() => [ProductCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutAuthorInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => ProductCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyAuthorInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutBrandInput {
    @Field(() => [ProductCreateWithoutBrandInput], {nullable:true})
    create?: Array<ProductCreateWithoutBrandInput>;
    @Field(() => [ProductCreateOrConnectWithoutBrandInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBrandInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutBrandInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutBrandInput>;
    @Field(() => ProductCreateManyBrandInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyBrandInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutBrandInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutBrandInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutBrandInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutBrandInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutCategoryInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>;
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCategoryInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutCityInput {
    @Field(() => [ProductCreateWithoutCityInput], {nullable:true})
    create?: Array<ProductCreateWithoutCityInput>;
    @Field(() => [ProductCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCityInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => ProductCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyCityInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutCityInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUncheckedUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedUpdateManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutProductInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutBrandInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUncheckedUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedUpdateManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutProductInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUncheckedUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedUpdateManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutProductInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutCityInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUncheckedUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedUpdateManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutProductInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutFavoritesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUncheckedUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedUpdateManyWithoutProductInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutImagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutProductInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutLikesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUncheckedUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedUpdateManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUncheckedUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUncheckedUpdateManyWithoutProductInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutProductInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutBrandInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutCategoryInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutCityInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithoutAuthorInput {
    @Field(() => [ProductCreateWithoutAuthorInput], {nullable:true})
    create?: Array<ProductCreateWithoutAuthorInput>;
    @Field(() => [ProductCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutAuthorInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => ProductCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyAuthorInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateManyWithoutBrandInput {
    @Field(() => [ProductCreateWithoutBrandInput], {nullable:true})
    create?: Array<ProductCreateWithoutBrandInput>;
    @Field(() => [ProductCreateOrConnectWithoutBrandInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBrandInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutBrandInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutBrandInput>;
    @Field(() => ProductCreateManyBrandInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyBrandInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutBrandInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutBrandInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutBrandInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutBrandInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateManyWithoutCategoryInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>;
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCategoryInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateManyWithoutCityInput {
    @Field(() => [ProductCreateWithoutCityInput], {nullable:true})
    create?: Array<ProductCreateWithoutCityInput>;
    @Field(() => [ProductCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCityInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => ProductCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductCreateManyCityInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutCityInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateOneWithoutFavoritesInput {
    @Field(() => ProductCreateWithoutFavoritesInput, {nullable:true})
    create?: InstanceType<typeof ProductCreateWithoutFavoritesInput>;
    @Field(() => ProductCreateOrConnectWithoutFavoritesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutFavoritesInput>;
    @Field(() => ProductUpsertWithoutFavoritesInput, {nullable:true})
    upsert?: InstanceType<typeof ProductUpsertWithoutFavoritesInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProductUpdateWithoutFavoritesInput, {nullable:true})
    update?: InstanceType<typeof ProductUpdateWithoutFavoritesInput>;
}

@InputType()
export class ProductUpdateOneWithoutImagesInput {
    @Field(() => ProductCreateWithoutImagesInput, {nullable:true})
    create?: InstanceType<typeof ProductCreateWithoutImagesInput>;
    @Field(() => ProductCreateOrConnectWithoutImagesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutImagesInput>;
    @Field(() => ProductUpsertWithoutImagesInput, {nullable:true})
    upsert?: InstanceType<typeof ProductUpsertWithoutImagesInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProductUpdateWithoutImagesInput, {nullable:true})
    update?: InstanceType<typeof ProductUpdateWithoutImagesInput>;
}

@InputType()
export class ProductUpdateOneWithoutLikesInput {
    @Field(() => ProductCreateWithoutLikesInput, {nullable:true})
    create?: InstanceType<typeof ProductCreateWithoutLikesInput>;
    @Field(() => ProductCreateOrConnectWithoutLikesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutLikesInput>;
    @Field(() => ProductUpsertWithoutLikesInput, {nullable:true})
    upsert?: InstanceType<typeof ProductUpsertWithoutLikesInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProductUpdateWithoutLikesInput, {nullable:true})
    update?: InstanceType<typeof ProductUpdateWithoutLikesInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutAuthorInput, {nullable:false})
    data!: InstanceType<typeof ProductUpdateWithoutAuthorInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutBrandInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutBrandInput, {nullable:false})
    data!: InstanceType<typeof ProductUpdateWithoutBrandInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    data!: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCityInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutCityInput, {nullable:false})
    data!: InstanceType<typeof ProductUpdateWithoutCityInput>;
}

@InputType()
export class ProductUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUpdateManyWithoutProductInput>;
    @Field(() => CityUpdateOneRequiredWithoutProductsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutProductsInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutProductsInput>;
    @Field(() => BrandUpdateOneRequiredWithoutProductsInput, {nullable:true})
    brand?: InstanceType<typeof BrandUpdateOneRequiredWithoutProductsInput>;
    @Field(() => FavoriteUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutProductInput>;
    @Field(() => LikeUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUpdateWithoutBrandInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUpdateManyWithoutProductInput>;
    @Field(() => CityUpdateOneRequiredWithoutProductsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutProductsInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutProductsInput>;
    @Field(() => UserUpdateOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutProductsInput>;
    @Field(() => FavoriteUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutProductInput>;
    @Field(() => LikeUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUpdateWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUpdateManyWithoutProductInput>;
    @Field(() => CityUpdateOneRequiredWithoutProductsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutProductsInput>;
    @Field(() => BrandUpdateOneRequiredWithoutProductsInput, {nullable:true})
    brand?: InstanceType<typeof BrandUpdateOneRequiredWithoutProductsInput>;
    @Field(() => UserUpdateOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutProductsInput>;
    @Field(() => FavoriteUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutProductInput>;
    @Field(() => LikeUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUpdateWithoutCityInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUpdateManyWithoutProductInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutProductsInput>;
    @Field(() => BrandUpdateOneRequiredWithoutProductsInput, {nullable:true})
    brand?: InstanceType<typeof BrandUpdateOneRequiredWithoutProductsInput>;
    @Field(() => UserUpdateOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutProductsInput>;
    @Field(() => FavoriteUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutProductInput>;
    @Field(() => LikeUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUpdateWithoutFavoritesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUpdateManyWithoutProductInput>;
    @Field(() => CityUpdateOneRequiredWithoutProductsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutProductsInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutProductsInput>;
    @Field(() => BrandUpdateOneRequiredWithoutProductsInput, {nullable:true})
    brand?: InstanceType<typeof BrandUpdateOneRequiredWithoutProductsInput>;
    @Field(() => UserUpdateOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutProductsInput>;
    @Field(() => LikeUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUpdateWithoutImagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUpdateOneRequiredWithoutProductsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutProductsInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutProductsInput>;
    @Field(() => BrandUpdateOneRequiredWithoutProductsInput, {nullable:true})
    brand?: InstanceType<typeof BrandUpdateOneRequiredWithoutProductsInput>;
    @Field(() => UserUpdateOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutProductsInput>;
    @Field(() => FavoriteUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutProductInput>;
    @Field(() => LikeUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUpdateWithoutLikesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUpdateManyWithoutProductInput>;
    @Field(() => CityUpdateOneRequiredWithoutProductsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutProductsInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutProductsInput>;
    @Field(() => BrandUpdateOneRequiredWithoutProductsInput, {nullable:true})
    brand?: InstanceType<typeof BrandUpdateOneRequiredWithoutProductsInput>;
    @Field(() => UserUpdateOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutProductsInput>;
    @Field(() => FavoriteUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => EnumProductSizeFieldUpdateOperationsInput, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFieldUpdateOperationsInput>;
    @Field(() => EnumProductSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumProductPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFieldUpdateOperationsInput>;
    @Field(() => EnumProductStatusFieldUpdateOperationsInput, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductImageUpdateManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ProductImageUpdateManyWithoutProductInput>;
    @Field(() => CityUpdateOneRequiredWithoutProductsInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneRequiredWithoutProductsInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutProductsInput>;
    @Field(() => BrandUpdateOneRequiredWithoutProductsInput, {nullable:true})
    brand?: InstanceType<typeof BrandUpdateOneRequiredWithoutProductsInput>;
    @Field(() => UserUpdateOneWithoutProductsInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneWithoutProductsInput>;
    @Field(() => FavoriteUpdateManyWithoutProductInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutProductInput>;
    @Field(() => LikeUpdateManyWithoutProductInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutProductInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutAuthorInput, {nullable:false})
    update!: InstanceType<typeof ProductUpdateWithoutAuthorInput>;
    @Field(() => ProductCreateWithoutAuthorInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutAuthorInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutBrandInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutBrandInput, {nullable:false})
    update!: InstanceType<typeof ProductUpdateWithoutBrandInput>;
    @Field(() => ProductCreateWithoutBrandInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutBrandInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    update!: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
    @Field(() => ProductCreateWithoutCategoryInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutCityInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutCityInput, {nullable:false})
    update!: InstanceType<typeof ProductUpdateWithoutCityInput>;
    @Field(() => ProductCreateWithoutCityInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutCityInput>;
}

@InputType()
export class ProductUpsertWithoutFavoritesInput {
    @Field(() => ProductUpdateWithoutFavoritesInput, {nullable:false})
    update!: InstanceType<typeof ProductUpdateWithoutFavoritesInput>;
    @Field(() => ProductCreateWithoutFavoritesInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutFavoritesInput>;
}

@InputType()
export class ProductUpsertWithoutImagesInput {
    @Field(() => ProductUpdateWithoutImagesInput, {nullable:false})
    update!: InstanceType<typeof ProductUpdateWithoutImagesInput>;
    @Field(() => ProductCreateWithoutImagesInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutImagesInput>;
}

@InputType()
export class ProductUpsertWithoutLikesInput {
    @Field(() => ProductUpdateWithoutLikesInput, {nullable:false})
    update!: InstanceType<typeof ProductUpdateWithoutLikesInput>;
    @Field(() => ProductCreateWithoutLikesInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateWithoutLikesInput>;
}

@InputType()
export class ProductWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class ProductWhereInput {
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    desc?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    price?: InstanceType<typeof FloatFilter>;
    @Field(() => EnumProductSizeFilter, {nullable:true})
    size?: InstanceType<typeof EnumProductSizeFilter>;
    @Field(() => EnumProductSeasonFilter, {nullable:true})
    season?: InstanceType<typeof EnumProductSeasonFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    dateOfPurchase?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntFilter, {nullable:true})
    viewsNumber?: InstanceType<typeof IntFilter>;
    @Field(() => ProductImageListRelationFilter, {nullable:true})
    images?: InstanceType<typeof ProductImageListRelationFilter>;
    @Field(() => CityRelationFilter, {nullable:true})
    city?: InstanceType<typeof CityRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    cityId?: InstanceType<typeof StringFilter>;
    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: InstanceType<typeof CategoryRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringFilter>;
    @Field(() => BrandRelationFilter, {nullable:true})
    brand?: InstanceType<typeof BrandRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    brandId?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    authorId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => FavoriteListRelationFilter, {nullable:true})
    favorites?: InstanceType<typeof FavoriteListRelationFilter>;
    @Field(() => LikeListRelationFilter, {nullable:true})
    likes?: InstanceType<typeof LikeListRelationFilter>;
    @Field(() => EnumProductPublishStatusFilter, {nullable:true})
    publishStatus?: InstanceType<typeof EnumProductPublishStatusFilter>;
    @Field(() => EnumProductStatusFilter, {nullable:true})
    productStatus?: InstanceType<typeof EnumProductStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Product {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => ProductSize, {nullable:false})
    size!: ProductSize;
    @Field(() => ProductSeason, {nullable:false})
    season!: ProductSeason;
    @Field(() => Date, {nullable:false})
    dateOfPurchase!: Date | string;
    @Field(() => Int, {nullable:false})
    viewsNumber!: number;
    @Field(() => [ProductImage], {nullable:true})
    images?: Array<ProductImage>;
    @Field(() => City, {nullable:false})
    city!: InstanceType<typeof City>;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => Category, {nullable:false})
    category!: InstanceType<typeof Category>;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => Brand, {nullable:false})
    brand!: InstanceType<typeof Brand>;
    @Field(() => String, {nullable:false})
    brandId!: string;
    @Field(() => User, {nullable:true})
    author?: InstanceType<typeof User>;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => [Favorite], {nullable:true})
    favorites?: Array<Favorite>;
    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;
    @Field(() => ProductPublishStatus, {nullable:false})
    publishStatus!: ProductPublishStatus;
    @Field(() => ProductStatus, {nullable:false})
    productStatus!: ProductStatus;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@ArgsType()
export class UpdateManyProductArgs {
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductWhereInput>;
}

@ArgsType()
export class UpdateOneProductArgs {
    @Field(() => ProductUpdateInput, {nullable:false})
    data!: InstanceType<typeof ProductUpdateInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateInput, {nullable:false})
    create!: InstanceType<typeof ProductCreateInput>;
    @Field(() => ProductUpdateInput, {nullable:false})
    update!: InstanceType<typeof ProductUpdateInput>;
}

@ArgsType()
export class AggregateProductImageArgs {
    @Field(() => ProductImageWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductImageWhereInput>;
    @Field(() => [ProductImageOrderByInput], {nullable:true})
    orderBy?: Array<ProductImageOrderByInput>;
    @Field(() => ProductImageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductImageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductImageCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof ProductImageCountAggregateInput>;
    @Field(() => ProductImageMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof ProductImageMinAggregateInput>;
    @Field(() => ProductImageMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof ProductImageMaxAggregateInput>;
}

@ObjectType()
export class AggregateProductImage {
    @Field(() => ProductImageCountAggregate, {nullable:true})
    count?: InstanceType<typeof ProductImageCountAggregate>;
    @Field(() => ProductImageMinAggregate, {nullable:true})
    min?: InstanceType<typeof ProductImageMinAggregate>;
    @Field(() => ProductImageMaxAggregate, {nullable:true})
    max?: InstanceType<typeof ProductImageMaxAggregate>;
}

@ArgsType()
export class CreateManyProductImageArgs {
    @Field(() => [ProductImageCreateManyInput], {nullable:false})
    data!: Array<ProductImageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductImageArgs {
    @Field(() => ProductImageCreateInput, {nullable:false})
    data!: InstanceType<typeof ProductImageCreateInput>;
}

@ArgsType()
export class DeleteManyProductImageArgs {
    @Field(() => ProductImageWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductImageWhereInput>;
}

@ArgsType()
export class DeleteOneProductImageArgs {
    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductImageWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProductImageArgs {
    @Field(() => ProductImageWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductImageWhereInput>;
    @Field(() => [ProductImageOrderByInput], {nullable:true})
    orderBy?: Array<ProductImageOrderByInput>;
    @Field(() => ProductImageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductImageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductImageScalarFieldEnum], {nullable:true})
    distinct?: Array<ProductImageScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductImageArgs {
    @Field(() => ProductImageWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductImageWhereInput>;
    @Field(() => [ProductImageOrderByInput], {nullable:true})
    orderBy?: Array<ProductImageOrderByInput>;
    @Field(() => ProductImageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductImageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductImageScalarFieldEnum], {nullable:true})
    distinct?: Array<ProductImageScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductImageArgs {
    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductImageWhereUniqueInput>;
}

@ArgsType()
export class GroupByProductImageArgs {
    @Field(() => ProductImageWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductImageWhereInput>;
    @Field(() => [ProductImageOrderByInput], {nullable:true})
    orderBy?: Array<ProductImageOrderByInput>;
    @Field(() => [ProductImageScalarFieldEnum], {nullable:false})
    by!: Array<ProductImageScalarFieldEnum>;
    @Field(() => ProductImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductImageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductImageCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof ProductImageCountAggregateInput>;
    @Field(() => ProductImageMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof ProductImageMinAggregateInput>;
    @Field(() => ProductImageMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof ProductImageMaxAggregateInput>;
}

@InputType()
export class ProductImageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    desc?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductImageCountAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    title?: number;
    @Field(() => Int, {nullable:true})
    desc?: number;
    @Field(() => Int, {nullable:true})
    url?: number;
    @Field(() => Int, {nullable:true})
    productId?: number;
    @Field(() => Int, {nullable:true})
    createdAt?: number;
    @Field(() => Int, {nullable:true})
    updatedAt?: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProductImageCreateManyProductInputEnvelope {
    @Field(() => [ProductImageCreateManyProductInput], {nullable:false})
    data!: Array<ProductImageCreateManyProductInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductImageCreateManyProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductImageCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductImageCreateNestedManyWithoutProductInput {
    @Field(() => [ProductImageCreateWithoutProductInput], {nullable:true})
    create?: Array<ProductImageCreateWithoutProductInput>;
    @Field(() => [ProductImageCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ProductImageCreateOrConnectWithoutProductInput>;
    @Field(() => ProductImageCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductImageCreateManyProductInputEnvelope>;
    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    connect?: Array<ProductImageWhereUniqueInput>;
}

@InputType()
export class ProductImageCreateOrConnectWithoutProductInput {
    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductImageWhereUniqueInput>;
    @Field(() => ProductImageCreateWithoutProductInput, {nullable:false})
    create!: InstanceType<typeof ProductImageCreateWithoutProductInput>;
}

@InputType()
export class ProductImageCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductImageCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedOneWithoutImagesInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutImagesInput>;
}

@ObjectType()
export class ProductImageGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => ProductImageCountAggregate, {nullable:true})
    count?: InstanceType<typeof ProductImageCountAggregate>;
    @Field(() => ProductImageMinAggregate, {nullable:true})
    min?: InstanceType<typeof ProductImageMinAggregate>;
    @Field(() => ProductImageMaxAggregate, {nullable:true})
    max?: InstanceType<typeof ProductImageMaxAggregate>;
}

@InputType()
export class ProductImageListRelationFilter {
    @Field(() => ProductImageWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductImageWhereInput>;
    @Field(() => ProductImageWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductImageWhereInput>;
    @Field(() => ProductImageWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductImageWhereInput>;
}

@InputType()
export class ProductImageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    desc?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProductImageMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    desc?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductImageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    desc?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class ProductImageMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    desc?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductImageOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    desc?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    url?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}

@InputType()
export class ProductImageScalarWhereWithAggregatesInput {
    @Field(() => [ProductImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductImageScalarWhereWithAggregatesInput>;
    @Field(() => [ProductImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductImageScalarWhereWithAggregatesInput>;
    @Field(() => [ProductImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductImageScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    desc?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ProductImageScalarWhereInput {
    @Field(() => [ProductImageScalarWhereInput], {nullable:true})
    AND?: Array<ProductImageScalarWhereInput>;
    @Field(() => [ProductImageScalarWhereInput], {nullable:true})
    OR?: Array<ProductImageScalarWhereInput>;
    @Field(() => [ProductImageScalarWhereInput], {nullable:true})
    NOT?: Array<ProductImageScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    desc?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ProductImageUncheckedCreateNestedManyWithoutProductInput {
    @Field(() => [ProductImageCreateWithoutProductInput], {nullable:true})
    create?: Array<ProductImageCreateWithoutProductInput>;
    @Field(() => [ProductImageCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ProductImageCreateOrConnectWithoutProductInput>;
    @Field(() => ProductImageCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductImageCreateManyProductInputEnvelope>;
    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    connect?: Array<ProductImageWhereUniqueInput>;
}

@InputType()
export class ProductImageUncheckedCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductImageUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class ProductImageUncheckedUpdateManyWithoutImagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductImageUncheckedUpdateManyWithoutProductInput {
    @Field(() => [ProductImageCreateWithoutProductInput], {nullable:true})
    create?: Array<ProductImageCreateWithoutProductInput>;
    @Field(() => [ProductImageCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ProductImageCreateOrConnectWithoutProductInput>;
    @Field(() => [ProductImageUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<ProductImageUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => ProductImageCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductImageCreateManyProductInputEnvelope>;
    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    connect?: Array<ProductImageWhereUniqueInput>;
    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    set?: Array<ProductImageWhereUniqueInput>;
    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductImageWhereUniqueInput>;
    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    delete?: Array<ProductImageWhereUniqueInput>;
    @Field(() => [ProductImageUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<ProductImageUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [ProductImageUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<ProductImageUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [ProductImageScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductImageScalarWhereInput>;
}

@InputType()
export class ProductImageUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductImageUncheckedUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductImageUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductImageUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductImageUpdateManyWithWhereWithoutProductInput {
    @Field(() => ProductImageScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof ProductImageScalarWhereInput>;
    @Field(() => ProductImageUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ProductImageUpdateManyMutationInput>;
}

@InputType()
export class ProductImageUpdateManyWithoutProductInput {
    @Field(() => [ProductImageCreateWithoutProductInput], {nullable:true})
    create?: Array<ProductImageCreateWithoutProductInput>;
    @Field(() => [ProductImageCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<ProductImageCreateOrConnectWithoutProductInput>;
    @Field(() => [ProductImageUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<ProductImageUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => ProductImageCreateManyProductInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof ProductImageCreateManyProductInputEnvelope>;
    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    connect?: Array<ProductImageWhereUniqueInput>;
    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    set?: Array<ProductImageWhereUniqueInput>;
    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductImageWhereUniqueInput>;
    @Field(() => [ProductImageWhereUniqueInput], {nullable:true})
    delete?: Array<ProductImageWhereUniqueInput>;
    @Field(() => [ProductImageUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<ProductImageUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [ProductImageUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<ProductImageUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [ProductImageScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductImageScalarWhereInput>;
}

@InputType()
export class ProductImageUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductImageWhereUniqueInput>;
    @Field(() => ProductImageUpdateWithoutProductInput, {nullable:false})
    data!: InstanceType<typeof ProductImageUpdateWithoutProductInput>;
}

@InputType()
export class ProductImageUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ProductImageUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    desc?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateOneWithoutImagesInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutImagesInput>;
}

@InputType()
export class ProductImageUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductImageWhereUniqueInput>;
    @Field(() => ProductImageUpdateWithoutProductInput, {nullable:false})
    update!: InstanceType<typeof ProductImageUpdateWithoutProductInput>;
    @Field(() => ProductImageCreateWithoutProductInput, {nullable:false})
    create!: InstanceType<typeof ProductImageCreateWithoutProductInput>;
}

@InputType()
export class ProductImageWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class ProductImageWhereInput {
    @Field(() => [ProductImageWhereInput], {nullable:true})
    AND?: Array<ProductImageWhereInput>;
    @Field(() => [ProductImageWhereInput], {nullable:true})
    OR?: Array<ProductImageWhereInput>;
    @Field(() => [ProductImageWhereInput], {nullable:true})
    NOT?: Array<ProductImageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    desc?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class ProductImage {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    desc!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => Product, {nullable:true})
    product?: InstanceType<typeof Product>;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}

@ArgsType()
export class UpdateManyProductImageArgs {
    @Field(() => ProductImageUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ProductImageUpdateManyMutationInput>;
    @Field(() => ProductImageWhereInput, {nullable:true})
    where?: InstanceType<typeof ProductImageWhereInput>;
}

@ArgsType()
export class UpdateOneProductImageArgs {
    @Field(() => ProductImageUpdateInput, {nullable:false})
    data!: InstanceType<typeof ProductImageUpdateInput>;
    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductImageWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProductImageArgs {
    @Field(() => ProductImageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProductImageWhereUniqueInput>;
    @Field(() => ProductImageCreateInput, {nullable:false})
    create!: InstanceType<typeof ProductImageCreateInput>;
    @Field(() => ProductImageUpdateInput, {nullable:false})
    update!: InstanceType<typeof ProductImageUpdateInput>;
}

@ArgsType()
export class AggregateUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByInput], {nullable:true})
    orderBy?: Array<UserOrderByInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByInput], {nullable:true})
    orderBy?: Array<UserOrderByInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByInput], {nullable:true})
    orderBy?: Array<UserOrderByInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class GroupByUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByInput], {nullable:true})
    orderBy?: Array<UserOrderByInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    googleId?: true;
    @Field(() => Boolean, {nullable:true})
    facebookId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    email?: number;
    @Field(() => Int, {nullable:true})
    password?: number;
    @Field(() => Int, {nullable:true})
    firstName?: number;
    @Field(() => Int, {nullable:true})
    lastName?: number;
    @Field(() => Int, {nullable:true})
    avatar?: number;
    @Field(() => Int, {nullable:true})
    phoneNumber?: number;
    @Field(() => Int, {nullable:true})
    showPhoneNumber?: number;
    @Field(() => Int, {nullable:true})
    role?: number;
    @Field(() => Int, {nullable:true})
    status?: number;
    @Field(() => Int, {nullable:true})
    googleId?: number;
    @Field(() => Int, {nullable:true})
    facebookId?: number;
    @Field(() => Int, {nullable:true})
    cityId?: number;
    @Field(() => Int, {nullable:true})
    createdAt?: number;
    @Field(() => Int, {nullable:true})
    updatedAt?: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCreateManyCityInputEnvelope {
    @Field(() => [UserCreateManyCityInput], {nullable:false})
    data!: Array<UserCreateManyCityInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class UserCreateManyCityInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedManyWithoutCityInput {
    @Field(() => [UserCreateWithoutCityInput], {nullable:true})
    create?: Array<UserCreateWithoutCityInput>;
    @Field(() => [UserCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutCityInput>;
    @Field(() => UserCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof UserCreateManyCityInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedManyWithoutFollowedByInput {
    @Field(() => [UserCreateWithoutFollowedByInput], {nullable:true})
    create?: Array<UserCreateWithoutFollowedByInput>;
    @Field(() => [UserCreateOrConnectWithoutFollowedByInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowedByInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedManyWithoutFollowingInput {
    @Field(() => [UserCreateWithoutFollowingInput], {nullable:true})
    create?: Array<UserCreateWithoutFollowingInput>;
    @Field(() => [UserCreateOrConnectWithoutFollowingInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutFavoritesInput {
    @Field(() => UserCreateWithoutFavoritesInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutFavoritesInput>;
    @Field(() => UserCreateOrConnectWithoutFavoritesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutFavoritesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutLikesInput {
    @Field(() => UserCreateWithoutLikesInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutLikesInput>;
    @Field(() => UserCreateOrConnectWithoutLikesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutLikesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutProductsInput {
    @Field(() => UserCreateWithoutProductsInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProductsInput>;
    @Field(() => UserCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProductsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutCityInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutCityInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutCityInput>;
}

@InputType()
export class UserCreateOrConnectWithoutFavoritesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutFavoritesInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutFavoritesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutFollowedByInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutFollowedByInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutFollowedByInput>;
}

@InputType()
export class UserCreateOrConnectWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutFollowingInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutFollowingInput>;
}

@InputType()
export class UserCreateOrConnectWithoutLikesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutLikesInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutLikesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutProductsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutProductsInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutProductsInput>;
}

@InputType()
export class UserCreateWithoutCityInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutAuthorInput>;
    @Field(() => FavoriteCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutUserInput>;
    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutUserInput>;
    @Field(() => UserCreateNestedManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
    @Field(() => UserCreateNestedManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserCreateNestedManyWithoutFollowedByInput>;
}

@InputType()
export class UserCreateWithoutFavoritesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityCreateNestedOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedOneWithoutUsersInput>;
    @Field(() => ProductCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutAuthorInput>;
    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutUserInput>;
    @Field(() => UserCreateNestedManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
    @Field(() => UserCreateNestedManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserCreateNestedManyWithoutFollowedByInput>;
}

@InputType()
export class UserCreateWithoutFollowedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityCreateNestedOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedOneWithoutUsersInput>;
    @Field(() => ProductCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutAuthorInput>;
    @Field(() => FavoriteCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutUserInput>;
    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutUserInput>;
    @Field(() => UserCreateNestedManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserCreateNestedManyWithoutFollowedByInput>;
}

@InputType()
export class UserCreateWithoutFollowingInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityCreateNestedOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedOneWithoutUsersInput>;
    @Field(() => ProductCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutAuthorInput>;
    @Field(() => FavoriteCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutUserInput>;
    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutUserInput>;
    @Field(() => UserCreateNestedManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
}

@InputType()
export class UserCreateWithoutLikesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityCreateNestedOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedOneWithoutUsersInput>;
    @Field(() => ProductCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutAuthorInput>;
    @Field(() => FavoriteCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutUserInput>;
    @Field(() => UserCreateNestedManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
    @Field(() => UserCreateNestedManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserCreateNestedManyWithoutFollowedByInput>;
}

@InputType()
export class UserCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityCreateNestedOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedOneWithoutUsersInput>;
    @Field(() => FavoriteCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutUserInput>;
    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutUserInput>;
    @Field(() => UserCreateNestedManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
    @Field(() => UserCreateNestedManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserCreateNestedManyWithoutFollowedByInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CityCreateNestedOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityCreateNestedOneWithoutUsersInput>;
    @Field(() => ProductCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutAuthorInput>;
    @Field(() => FavoriteCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteCreateNestedManyWithoutUserInput>;
    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeCreateNestedManyWithoutUserInput>;
    @Field(() => UserCreateNestedManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserCreateNestedManyWithoutFollowingInput>;
    @Field(() => UserCreateNestedManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserCreateNestedManyWithoutFollowedByInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:false})
    showPhoneNumber!: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:false})
    status!: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserListRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    every?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    some?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    none?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    googleId?: true;
    @Field(() => Boolean, {nullable:true})
    facebookId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    phoneNumber?: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:true})
    role?: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    googleId?: true;
    @Field(() => Boolean, {nullable:true})
    facebookId?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:true})
    phoneNumber?: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:true})
    role?: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    showPhoneNumber?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    googleId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    facebookId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    avatar?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phoneNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => EnumUserRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
    @Field(() => EnumUserStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    googleId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    facebookId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    cityId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFilter>;
    @Field(() => EnumUserRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFilter>;
    @Field(() => EnumUserStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    googleId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    facebookId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    cityId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class UserUncheckedCreateNestedManyWithoutCityInput {
    @Field(() => [UserCreateWithoutCityInput], {nullable:true})
    create?: Array<UserCreateWithoutCityInput>;
    @Field(() => [UserCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutCityInput>;
    @Field(() => UserCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof UserCreateManyCityInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}

@InputType()
export class UserUncheckedCreateWithoutCityInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutFavoritesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutFollowedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutFollowingInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutLikesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:true})
    showPhoneNumber?: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:true})
    status?: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => FavoriteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => LikeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutCityInput {
    @Field(() => [UserCreateWithoutCityInput], {nullable:true})
    create?: Array<UserCreateWithoutCityInput>;
    @Field(() => [UserCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutCityInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => UserCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof UserCreateManyCityInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutCityInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutFollowedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutFollowingInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutCityInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutAuthorInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutUserInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutFavoritesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutAuthorInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutFollowedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutAuthorInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutUserInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutFollowingInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutAuthorInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutUserInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutLikesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutAuthorInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutUserInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutAuthorInput>;
    @Field(() => FavoriteUncheckedUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUncheckedUpdateManyWithoutUserInput>;
    @Field(() => LikeUncheckedUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUncheckedUpdateManyWithoutUserInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateManyWithWhereWithoutCityInput {
    @Field(() => UserScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof UserScalarWhereInput>;
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithWhereWithoutFollowedByInput {
    @Field(() => UserScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof UserScalarWhereInput>;
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithWhereWithoutFollowingInput {
    @Field(() => UserScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof UserScalarWhereInput>;
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithoutCityInput {
    @Field(() => [UserCreateWithoutCityInput], {nullable:true})
    create?: Array<UserCreateWithoutCityInput>;
    @Field(() => [UserCreateOrConnectWithoutCityInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutCityInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => UserCreateManyCityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof UserCreateManyCityInputEnvelope>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutCityInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateManyWithoutFollowedByInput {
    @Field(() => [UserCreateWithoutFollowedByInput], {nullable:true})
    create?: Array<UserCreateWithoutFollowedByInput>;
    @Field(() => [UserCreateOrConnectWithoutFollowedByInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowedByInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowedByInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowedByInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowedByInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutFollowedByInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutFollowedByInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutFollowedByInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateManyWithoutFollowingInput {
    @Field(() => [UserCreateWithoutFollowingInput], {nullable:true})
    create?: Array<UserCreateWithoutFollowingInput>;
    @Field(() => [UserCreateOrConnectWithoutFollowingInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowingInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowingInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowingInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutFollowingInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutFollowingInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutFollowingInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateOneWithoutFavoritesInput {
    @Field(() => UserCreateWithoutFavoritesInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutFavoritesInput>;
    @Field(() => UserCreateOrConnectWithoutFavoritesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutFavoritesInput>;
    @Field(() => UserUpsertWithoutFavoritesInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutFavoritesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserUpdateWithoutFavoritesInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutFavoritesInput>;
}

@InputType()
export class UserUpdateOneWithoutLikesInput {
    @Field(() => UserCreateWithoutLikesInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutLikesInput>;
    @Field(() => UserCreateOrConnectWithoutLikesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutLikesInput>;
    @Field(() => UserUpsertWithoutLikesInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutLikesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserUpdateWithoutLikesInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutLikesInput>;
}

@InputType()
export class UserUpdateOneWithoutProductsInput {
    @Field(() => UserCreateWithoutProductsInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProductsInput>;
    @Field(() => UserCreateOrConnectWithoutProductsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProductsInput>;
    @Field(() => UserUpsertWithoutProductsInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutProductsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserUpdateWithoutProductsInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutProductsInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutCityInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutCityInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateWithoutCityInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowedByInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutFollowedByInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateWithoutFollowedByInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutFollowingInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateWithoutFollowingInput>;
}

@InputType()
export class UserUpdateWithoutCityInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutAuthorInput>;
    @Field(() => FavoriteUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutUserInput>;
    @Field(() => LikeUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutUserInput>;
    @Field(() => UserUpdateManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserUpdateManyWithoutFollowingInput>;
    @Field(() => UserUpdateManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserUpdateManyWithoutFollowedByInput>;
}

@InputType()
export class UserUpdateWithoutFavoritesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUpdateOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneWithoutUsersInput>;
    @Field(() => ProductUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutAuthorInput>;
    @Field(() => LikeUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutUserInput>;
    @Field(() => UserUpdateManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserUpdateManyWithoutFollowingInput>;
    @Field(() => UserUpdateManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserUpdateManyWithoutFollowedByInput>;
}

@InputType()
export class UserUpdateWithoutFollowedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUpdateOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneWithoutUsersInput>;
    @Field(() => ProductUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutAuthorInput>;
    @Field(() => FavoriteUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutUserInput>;
    @Field(() => LikeUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutUserInput>;
    @Field(() => UserUpdateManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserUpdateManyWithoutFollowedByInput>;
}

@InputType()
export class UserUpdateWithoutFollowingInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUpdateOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneWithoutUsersInput>;
    @Field(() => ProductUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutAuthorInput>;
    @Field(() => FavoriteUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutUserInput>;
    @Field(() => LikeUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutUserInput>;
    @Field(() => UserUpdateManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserUpdateManyWithoutFollowingInput>;
}

@InputType()
export class UserUpdateWithoutLikesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUpdateOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneWithoutUsersInput>;
    @Field(() => ProductUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutAuthorInput>;
    @Field(() => FavoriteUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutUserInput>;
    @Field(() => UserUpdateManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserUpdateManyWithoutFollowingInput>;
    @Field(() => UserUpdateManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserUpdateManyWithoutFollowedByInput>;
}

@InputType()
export class UserUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUpdateOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneWithoutUsersInput>;
    @Field(() => FavoriteUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutUserInput>;
    @Field(() => LikeUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutUserInput>;
    @Field(() => UserUpdateManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserUpdateManyWithoutFollowingInput>;
    @Field(() => UserUpdateManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserUpdateManyWithoutFollowedByInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    facebookId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CityUpdateOneWithoutUsersInput, {nullable:true})
    city?: InstanceType<typeof CityUpdateOneWithoutUsersInput>;
    @Field(() => ProductUpdateManyWithoutAuthorInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutAuthorInput>;
    @Field(() => FavoriteUpdateManyWithoutUserInput, {nullable:true})
    favorites?: InstanceType<typeof FavoriteUpdateManyWithoutUserInput>;
    @Field(() => LikeUpdateManyWithoutUserInput, {nullable:true})
    likes?: InstanceType<typeof LikeUpdateManyWithoutUserInput>;
    @Field(() => UserUpdateManyWithoutFollowingInput, {nullable:true})
    followedBy?: InstanceType<typeof UserUpdateManyWithoutFollowingInput>;
    @Field(() => UserUpdateManyWithoutFollowedByInput, {nullable:true})
    following?: InstanceType<typeof UserUpdateManyWithoutFollowedByInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutCityInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutCityInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutCityInput>;
    @Field(() => UserCreateWithoutCityInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutCityInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowedByInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutFollowedByInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutFollowedByInput>;
    @Field(() => UserCreateWithoutFollowedByInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutFollowedByInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutFollowingInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutFollowingInput>;
    @Field(() => UserCreateWithoutFollowingInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutFollowingInput>;
}

@InputType()
export class UserUpsertWithoutFavoritesInput {
    @Field(() => UserUpdateWithoutFavoritesInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutFavoritesInput>;
    @Field(() => UserCreateWithoutFavoritesInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutFavoritesInput>;
}

@InputType()
export class UserUpsertWithoutLikesInput {
    @Field(() => UserUpdateWithoutLikesInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutLikesInput>;
    @Field(() => UserCreateWithoutLikesInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutLikesInput>;
}

@InputType()
export class UserUpsertWithoutProductsInput {
    @Field(() => UserUpdateWithoutProductsInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutProductsInput>;
    @Field(() => UserCreateWithoutProductsInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutProductsInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    showPhoneNumber?: InstanceType<typeof BoolFilter>;
    @Field(() => EnumUserRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumUserRoleFilter>;
    @Field(() => EnumUserStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumUserStatusFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    googleId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    facebookId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => CityRelationFilter, {nullable:true})
    city?: InstanceType<typeof CityRelationFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    cityId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
    @Field(() => FavoriteListRelationFilter, {nullable:true})
    favorites?: InstanceType<typeof FavoriteListRelationFilter>;
    @Field(() => LikeListRelationFilter, {nullable:true})
    likes?: InstanceType<typeof LikeListRelationFilter>;
    @Field(() => UserListRelationFilter, {nullable:true})
    followedBy?: InstanceType<typeof UserListRelationFilter>;
    @Field(() => UserListRelationFilter, {nullable:true})
    following?: InstanceType<typeof UserListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => Boolean, {nullable:false,defaultValue:true})
    showPhoneNumber!: boolean;
    @Field(() => UserRole, {nullable:false})
    role!: UserRole;
    @Field(() => UserStatus, {nullable:false,defaultValue:'active'})
    status!: UserStatus;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => City, {nullable:true})
    city?: InstanceType<typeof City>;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
    @Field(() => [Favorite], {nullable:true})
    favorites?: Array<Favorite>;
    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;
    @Field(() => [User], {nullable:true})
    followedBy?: Array<User>;
    @Field(() => [User], {nullable:true})
    following?: Array<User>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}
