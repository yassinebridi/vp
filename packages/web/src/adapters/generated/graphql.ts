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

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
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

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
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
  updateSettings: Scalars['Boolean'];
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


export type MutationUpdateSettingsArgs = {
  updateSettingsInput: UpdateSettingsInput;
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

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
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

export type Query = {
  __typename?: 'Query';
  me: User;
  getAllUsers: Array<User>;
  getOneUser: User;
  getOneSettings: Settings;
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


export type QueryGetOneSettingsArgs = {
  where: SettingsWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
};

export enum Role {
  Admin = 'admin',
  Editor = 'editor',
  Visitor = 'visitor'
}

export type Settings = {
  __typename?: 'Settings';
  id: Scalars['ID'];
  defaultRole: Role;
  urls: Scalars['String'];
};

export type SettingsCountAggregate = {
  __typename?: 'SettingsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  defaultRole?: Maybe<Scalars['Int']>;
  urls?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type SettingsMaxAggregate = {
  __typename?: 'SettingsMaxAggregate';
  id?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Role>;
  urls?: Maybe<Scalars['String']>;
};

export type SettingsMinAggregate = {
  __typename?: 'SettingsMinAggregate';
  id?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Role>;
  urls?: Maybe<Scalars['String']>;
};

export type SettingsUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  defaultRole?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  urls?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SettingsWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
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

export type UpdateSettingsInput = {
  where: SettingsWhereUniqueInput;
  data: SettingsUpdateInput;
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
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  role: Role;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  googleId?: Maybe<Scalars['Int']>;
  facebookId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  firstname?: Maybe<SortOrder>;
  lastname?: Maybe<SortOrder>;
  avatar?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  googleId?: Maybe<SortOrder>;
  facebookId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Password = 'password',
  Firstname = 'firstname',
  Lastname = 'lastname',
  Avatar = 'avatar',
  Role = 'role',
  GoogleId = 'googleId',
  FacebookId = 'facebookId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  googleId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  facebookId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  firstname?: Maybe<StringNullableFilter>;
  lastname?: Maybe<StringNullableFilter>;
  avatar?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
  googleId?: Maybe<StringNullableFilter>;
  facebookId?: Maybe<StringNullableFilter>;
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
      & Pick<User, 'id' | 'avatar' | 'email' | 'firstname' | 'lastname'>
    ) }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UpdateSettingsMutationVariables = Exact<{
  updateSettingsInput: UpdateSettingsInput;
}>;


export type UpdateSettingsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateSettings'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'avatar'>
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
  & Pick<User, 'id' | 'name' | 'firstname' | 'lastname' | 'email' | 'avatar' | 'role' | 'createdAt' | 'updatedAt'>
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

export type SettingsFieldsFragment = (
  { __typename?: 'Settings' }
  & Pick<Settings, 'id' | 'urls' | 'defaultRole'>
);

export type GetOneSettingsQueryVariables = Exact<{
  where: SettingsWhereUniqueInput;
}>;


export type GetOneSettingsQuery = (
  { __typename?: 'Query' }
  & { getOneSettings: (
    { __typename?: 'Settings' }
    & SettingsFieldsFragment
  ) }
);

export const UserFieldsFragmentDoc = `
    fragment UserFields on User {
  id
  name
  firstname
  lastname
  email
  avatar
  role
  createdAt
  updatedAt
}
    `;
export const SettingsFieldsFragmentDoc = `
    fragment SettingsFields on Settings {
  id
  urls
  defaultRole
}
    `;
export const LoginDocument = `
    mutation login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    accessToken
    user {
      id
      avatar
      email
      firstname
      lastname
    }
  }
}
    `;
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
export const UpdateSettingsDocument = `
    mutation updateSettings($updateSettingsInput: UpdateSettingsInput!) {
  updateSettings(updateSettingsInput: $updateSettingsInput)
}
    `;
export const useUpdateSettingsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateSettingsMutation, TError, UpdateSettingsMutationVariables, TContext>) => 
    useMutation<UpdateSettingsMutation, TError, UpdateSettingsMutationVariables, TContext>(
      (variables?: UpdateSettingsMutationVariables) => client<UpdateSettingsMutation, UpdateSettingsMutationVariables>(UpdateSettingsDocument, variables)(),
      options
    );
export const MeDocument = `
    query me {
  me {
    id
    name
    email
    avatar
  }
}
    `;
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
export const GetOneSettingsDocument = `
    query getOneSettings($where: SettingsWhereUniqueInput!) {
  getOneSettings(where: $where) {
    ...SettingsFields
  }
}
    ${SettingsFieldsFragmentDoc}`;
export const useGetOneSettingsQuery = <
      TData = GetOneSettingsQuery,
      TError = unknown
    >(
      variables: GetOneSettingsQueryVariables, 
      options?: UseQueryOptions<GetOneSettingsQuery, TError, TData>
    ) => 
    useQuery<GetOneSettingsQuery, TError, TData>(
      ['getOneSettings', variables],
      client<GetOneSettingsQuery, GetOneSettingsQueryVariables>(GetOneSettingsDocument, variables),
      options
    );