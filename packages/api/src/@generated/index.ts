import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    firstname = "firstname",
    lastname = "lastname",
    avatar = "avatar",
    role = "role",
    googleId = "googleId",
    facebookId = "facebookId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SettingsScalarFieldEnum {
    id = "id",
    defaultRole = "defaultRole",
    urls = "urls"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum Role {
    admin = "admin",
    editor = "editor",
    visitor = "visitor"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

registerEnumType(QueryMode, { name: 'QueryMode' })
registerEnumType(Role, { name: 'Role' })
registerEnumType(SortOrder, { name: 'SortOrder' })
registerEnumType(SettingsScalarFieldEnum, { name: 'SettingsScalarFieldEnum' })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum' })

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
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
export class EnumRoleFieldUpdateOperationsInput {
    @Field(() => Role, {nullable:true})
    set?: Role;
}

@InputType()
export class EnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<Role>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class EnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<Role>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumRoleFilter>;
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
export class NestedEnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<Role>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedEnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<Role>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    max?: InstanceType<typeof NestedEnumRoleFilter>;
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
export class AggregateSettingsArgs {
    @Field(() => SettingsWhereInput, {nullable:true})
    where?: InstanceType<typeof SettingsWhereInput>;
    @Field(() => [SettingsOrderByInput], {nullable:true})
    orderBy?: Array<SettingsOrderByInput>;
    @Field(() => SettingsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SettingsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SettingsCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof SettingsCountAggregateInput>;
    @Field(() => SettingsMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof SettingsMinAggregateInput>;
    @Field(() => SettingsMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof SettingsMaxAggregateInput>;
}

@ObjectType()
export class AggregateSettings {
    @Field(() => SettingsCountAggregate, {nullable:true})
    count?: InstanceType<typeof SettingsCountAggregate>;
    @Field(() => SettingsMinAggregate, {nullable:true})
    min?: InstanceType<typeof SettingsMinAggregate>;
    @Field(() => SettingsMaxAggregate, {nullable:true})
    max?: InstanceType<typeof SettingsMaxAggregate>;
}

@ArgsType()
export class CreateManySettingsArgs {
    @Field(() => [SettingsCreateManyInput], {nullable:false})
    data!: Array<SettingsCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSettingsArgs {
    @Field(() => SettingsCreateInput, {nullable:false})
    data!: InstanceType<typeof SettingsCreateInput>;
}

@ArgsType()
export class DeleteManySettingsArgs {
    @Field(() => SettingsWhereInput, {nullable:true})
    where?: InstanceType<typeof SettingsWhereInput>;
}

@ArgsType()
export class DeleteOneSettingsArgs {
    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SettingsWhereUniqueInput>;
}

@ArgsType()
export class FindFirstSettingsArgs {
    @Field(() => SettingsWhereInput, {nullable:true})
    where?: InstanceType<typeof SettingsWhereInput>;
    @Field(() => [SettingsOrderByInput], {nullable:true})
    orderBy?: Array<SettingsOrderByInput>;
    @Field(() => SettingsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SettingsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<SettingsScalarFieldEnum>;
}

@ArgsType()
export class FindManySettingsArgs {
    @Field(() => SettingsWhereInput, {nullable:true})
    where?: InstanceType<typeof SettingsWhereInput>;
    @Field(() => [SettingsOrderByInput], {nullable:true})
    orderBy?: Array<SettingsOrderByInput>;
    @Field(() => SettingsWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SettingsWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<SettingsScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSettingsArgs {
    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SettingsWhereUniqueInput>;
}

@ArgsType()
export class GroupBySettingsArgs {
    @Field(() => SettingsWhereInput, {nullable:true})
    where?: InstanceType<typeof SettingsWhereInput>;
    @Field(() => [SettingsOrderByInput], {nullable:true})
    orderBy?: Array<SettingsOrderByInput>;
    @Field(() => [SettingsScalarFieldEnum], {nullable:false})
    by!: Array<SettingsScalarFieldEnum>;
    @Field(() => SettingsScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SettingsScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SettingsCountAggregateInput, {nullable:true})
    count?: InstanceType<typeof SettingsCountAggregateInput>;
    @Field(() => SettingsMinAggregateInput, {nullable:true})
    min?: InstanceType<typeof SettingsMinAggregateInput>;
    @Field(() => SettingsMaxAggregateInput, {nullable:true})
    max?: InstanceType<typeof SettingsMaxAggregateInput>;
}

@InputType()
export class SettingsCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    defaultRole?: true;
    @Field(() => Boolean, {nullable:true})
    urls?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SettingsCountAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    defaultRole?: number;
    @Field(() => Int, {nullable:true})
    urls?: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SettingsCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Role, {nullable:false})
    defaultRole!: Role;
    @Field(() => String, {nullable:false})
    urls!: string;
}

@InputType()
export class SettingsCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Role, {nullable:false})
    defaultRole!: Role;
    @Field(() => String, {nullable:false})
    urls!: string;
}

@ObjectType()
export class SettingsGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Role, {nullable:false})
    defaultRole!: Role;
    @Field(() => String, {nullable:false})
    urls!: string;
    @Field(() => SettingsCountAggregate, {nullable:true})
    count?: InstanceType<typeof SettingsCountAggregate>;
    @Field(() => SettingsMinAggregate, {nullable:true})
    min?: InstanceType<typeof SettingsMinAggregate>;
    @Field(() => SettingsMaxAggregate, {nullable:true})
    max?: InstanceType<typeof SettingsMaxAggregate>;
}

@InputType()
export class SettingsMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    defaultRole?: true;
    @Field(() => Boolean, {nullable:true})
    urls?: true;
}

@ObjectType()
export class SettingsMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Role, {nullable:true})
    defaultRole?: Role;
    @Field(() => String, {nullable:true})
    urls?: string;
}

@InputType()
export class SettingsMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    defaultRole?: true;
    @Field(() => Boolean, {nullable:true})
    urls?: true;
}

@ObjectType()
export class SettingsMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Role, {nullable:true})
    defaultRole?: Role;
    @Field(() => String, {nullable:true})
    urls?: string;
}

@InputType()
export class SettingsOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    defaultRole?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    urls?: SortOrder;
}

@InputType()
export class SettingsScalarWhereWithAggregatesInput {
    @Field(() => [SettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SettingsScalarWhereWithAggregatesInput>;
    @Field(() => [SettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SettingsScalarWhereWithAggregatesInput>;
    @Field(() => [SettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SettingsScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumRoleWithAggregatesFilter, {nullable:true})
    defaultRole?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    urls?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class SettingsUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Role, {nullable:false})
    defaultRole!: Role;
    @Field(() => String, {nullable:false})
    urls!: string;
}

@InputType()
export class SettingsUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    defaultRole?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    urls?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class SettingsUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    defaultRole?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    urls?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class SettingsUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    defaultRole?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    urls?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class SettingsUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    defaultRole?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    urls?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class SettingsWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class SettingsWhereInput {
    @Field(() => [SettingsWhereInput], {nullable:true})
    AND?: Array<SettingsWhereInput>;
    @Field(() => [SettingsWhereInput], {nullable:true})
    OR?: Array<SettingsWhereInput>;
    @Field(() => [SettingsWhereInput], {nullable:true})
    NOT?: Array<SettingsWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    defaultRole?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => StringFilter, {nullable:true})
    urls?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Settings {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Role, {nullable:false})
    defaultRole!: Role;
    @Field(() => String, {nullable:false})
    urls!: string;
}

@ArgsType()
export class UpdateManySettingsArgs {
    @Field(() => SettingsUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof SettingsUpdateManyMutationInput>;
    @Field(() => SettingsWhereInput, {nullable:true})
    where?: InstanceType<typeof SettingsWhereInput>;
}

@ArgsType()
export class UpdateOneSettingsArgs {
    @Field(() => SettingsUpdateInput, {nullable:false})
    data!: InstanceType<typeof SettingsUpdateInput>;
    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SettingsWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneSettingsArgs {
    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SettingsWhereUniqueInput>;
    @Field(() => SettingsCreateInput, {nullable:false})
    create!: InstanceType<typeof SettingsCreateInput>;
    @Field(() => SettingsUpdateInput, {nullable:false})
    update!: InstanceType<typeof SettingsUpdateInput>;
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
    firstname?: true;
    @Field(() => Boolean, {nullable:true})
    lastname?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    googleId?: true;
    @Field(() => Boolean, {nullable:true})
    facebookId?: true;
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
    firstname?: number;
    @Field(() => Int, {nullable:true})
    lastname?: number;
    @Field(() => Int, {nullable:true})
    avatar?: number;
    @Field(() => Int, {nullable:true})
    role?: number;
    @Field(() => Int, {nullable:true})
    googleId?: number;
    @Field(() => Int, {nullable:true})
    facebookId?: number;
    @Field(() => Int, {nullable:true})
    createdAt?: number;
    @Field(() => Int, {nullable:true})
    updatedAt?: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    firstname?: string;
    @Field(() => String, {nullable:true})
    lastname?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Role, {nullable:false})
    role!: Role;
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
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    firstname?: string;
    @Field(() => String, {nullable:true})
    lastname?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Role, {nullable:false})
    role!: Role;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    firstname?: string;
    @Field(() => String, {nullable:true})
    lastname?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Role, {nullable:false})
    role!: Role;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
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
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    firstname?: true;
    @Field(() => Boolean, {nullable:true})
    lastname?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    googleId?: true;
    @Field(() => Boolean, {nullable:true})
    facebookId?: true;
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
    firstname?: string;
    @Field(() => String, {nullable:true})
    lastname?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Role, {nullable:true})
    role?: Role;
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
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    firstname?: true;
    @Field(() => Boolean, {nullable:true})
    lastname?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    googleId?: true;
    @Field(() => Boolean, {nullable:true})
    facebookId?: true;
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
    firstname?: string;
    @Field(() => String, {nullable:true})
    lastname?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Role, {nullable:true})
    role?: Role;
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
export class UserOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstname?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastname?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    avatar?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    googleId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    facebookId?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
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
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    firstname?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    lastname?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    avatar?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    googleId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    facebookId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => String, {nullable:true})
    firstname?: string;
    @Field(() => String, {nullable:true})
    lastname?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Role, {nullable:false})
    role!: Role;
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
export class UserUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
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
export class UserUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
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
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
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
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
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
    @Field(() => StringNullableFilter, {nullable:true})
    firstname?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    lastname?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    googleId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    facebookId?: InstanceType<typeof StringNullableFilter>;
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
    @Field(() => String, {nullable:true})
    firstname?: string;
    @Field(() => String, {nullable:true})
    lastname?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Role, {nullable:false})
    role!: Role;
    @Field(() => String, {nullable:true})
    googleId?: string;
    @Field(() => String, {nullable:true})
    facebookId?: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}
