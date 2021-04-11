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
};

export type AuthUser = {
  __typename?: 'AuthUser';
  /** JWT access token */
  accessToken: Scalars['String'];
  user: User;
};

export type BulkCategoriesInput = {
  number: Scalars['Int'];
};

export type BulkPostsInput = {
  number: Scalars['Int'];
};

export type BulkProjectsInput = {
  number: Scalars['Int'];
};

export type BulkTagsInput = {
  number: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['String'];
  desc: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  project: Project;
  projectId: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  desc?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CategoryCreateInput = {
  createdAt?: Maybe<Scalars['String']>;
  desc: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutCategoryInput>;
  project: ProjectCreateOneWithoutCategoriesInput;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CategoryCreateManyWithoutProjectInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutprojectInput>>;
  create?: Maybe<Array<CategoryCreateWithoutProjectInput>>;
};

export type CategoryCreateOneWithoutPostsInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutpostsInput>;
  create?: Maybe<CategoryCreateWithoutPostsInput>;
};

export type CategoryCreateOrConnectWithoutpostsInput = {
  create: CategoryCreateWithoutPostsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutprojectInput = {
  create: CategoryCreateWithoutProjectInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutPostsInput = {
  createdAt?: Maybe<Scalars['String']>;
  desc: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  project: ProjectCreateOneWithoutCategoriesInput;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CategoryCreateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['String']>;
  desc: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutCategoryInput>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CategoryListRelationFilter = {
  every?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  createdAt?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  createdAt?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CategoryOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  desc?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum CategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Desc = 'desc',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  ProjectId = 'projectId',
  UpdatedAt = 'updatedAt'
}

export type CategoryScalarWhereInput = {
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  desc?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  projectId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryUpdateInput = {
  createdAt?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutCategoryInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutCategoriesInput>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyWithWhereWithoutProjectInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutprojectInput>>;
  create?: Maybe<Array<CategoryCreateWithoutProjectInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type CategoryUpdateOneRequiredWithoutPostsInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutpostsInput>;
  create?: Maybe<CategoryCreateWithoutPostsInput>;
  update?: Maybe<CategoryUpdateWithoutPostsInput>;
  upsert?: Maybe<CategoryUpsertWithoutPostsInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutProjectInput = {
  data: CategoryUpdateWithoutProjectInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutPostsInput = {
  createdAt?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutCategoriesInput>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CategoryUpdateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutCategoryInput>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CategoryUpsertWithWhereUniqueWithoutProjectInput = {
  create: CategoryCreateWithoutProjectInput;
  update: CategoryUpdateWithoutProjectInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithoutPostsInput = {
  create: CategoryCreateWithoutPostsInput;
  update: CategoryUpdateWithoutPostsInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  desc?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
  project?: Maybe<ProjectWhereInput>;
  projectId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<DateTimeFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type EnumPostStatusFilter = {
  equals?: Maybe<PostStatus>;
  in?: Maybe<Array<PostStatus>>;
  not?: Maybe<EnumPostStatusFilter>;
  notIn?: Maybe<Array<PostStatus>>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<EnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  bulkCategories: Scalars['Boolean'];
  bulkDeleteCategories: Scalars['Boolean'];
  bulkDeletePosts: Scalars['Boolean'];
  bulkDeleteProjects: Scalars['Boolean'];
  bulkDeleteTags: Scalars['Boolean'];
  bulkPosts: Scalars['Boolean'];
  bulkProjects: Scalars['Boolean'];
  bulkTags: Scalars['Boolean'];
  changePassword: User;
  createCategory: Scalars['Boolean'];
  createPost: Scalars['Boolean'];
  createProject: Scalars['Boolean'];
  createTag: Scalars['Boolean'];
  deleteCategory: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  deleteProject: Scalars['Boolean'];
  deleteTag: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: AuthUser;
  logout: Scalars['Boolean'];
  register: AuthUser;
  searchCategories: Array<Category>;
  searchPosts: Array<Post>;
  searchProjects: Array<Project>;
  searchTags: Array<Tag>;
  searchUsers: Array<User>;
  updateCategory: Scalars['Boolean'];
  updatePost: Scalars['Boolean'];
  updateProject: Scalars['Boolean'];
  updateSettings: Scalars['Boolean'];
  updateTag: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
};


export type MutationBulkCategoriesArgs = {
  bulkCategoriesInput: BulkCategoriesInput;
};


export type MutationBulkPostsArgs = {
  bulkPostsInput: BulkPostsInput;
};


export type MutationBulkProjectsArgs = {
  bulkProjectsInput: BulkProjectsInput;
};


export type MutationBulkTagsArgs = {
  bulkTagsInput: BulkTagsInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CategoryCreateInput;
};


export type MutationCreatePostArgs = {
  createPostInput: PostCreateInput;
};


export type MutationCreateProjectArgs = {
  createProjectInput: ProjectCreateInput;
};


export type MutationCreateTagArgs = {
  createTagInput: TagCreateInput;
};


export type MutationDeleteCategoryArgs = {
  whereCategoryInput: CategoryWhereUniqueInput;
};


export type MutationDeletePostArgs = {
  wherePostInput: PostWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  whereProjectInput: ProjectWhereUniqueInput;
};


export type MutationDeleteTagArgs = {
  whereTagInput: TagWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  whereUserInput: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationSearchCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type MutationSearchPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type MutationSearchProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


export type MutationSearchTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<Array<TagScalarFieldEnum>>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};


export type MutationSearchUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdateProjectArgs = {
  updateProjectInput: UpdateProjectInput;
};


export type MutationUpdateSettingsArgs = {
  updateSettingsInput: UpdateSettingsInput;
};


export type MutationUpdateTagArgs = {
  updateTagInput: UpdateTagInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  category: Category;
  categoryId: Scalars['String'];
  content: Scalars['String'];
  cover: Scalars['String'];
  createdAt: Scalars['String'];
  excerpt: Scalars['String'];
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['String'];
  status: PostStatus;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int'];
  categoryId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['Int']>;
  cover?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  excerpt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type PostCreateInput = {
  category: CategoryCreateOneWithoutPostsInput;
  content: Scalars['String'];
  cover: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  excerpt: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  project: ProjectCreateOneWithoutPostsInput;
  status?: Maybe<PostStatus>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostCreateManyWithoutCategoryInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutcategoryInput>>;
  create?: Maybe<Array<PostCreateWithoutCategoryInput>>;
};

export type PostCreateManyWithoutProjectInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutprojectInput>>;
  create?: Maybe<Array<PostCreateWithoutProjectInput>>;
};

export type PostCreateManyWithoutTagsInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithouttagsInput>>;
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
};

export type PostCreateOrConnectWithoutcategoryInput = {
  create: PostCreateWithoutCategoryInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutprojectInput = {
  create: PostCreateWithoutProjectInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithouttagsInput = {
  create: PostCreateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutCategoryInput = {
  content: Scalars['String'];
  cover: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  excerpt: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  project: ProjectCreateOneWithoutPostsInput;
  status?: Maybe<PostStatus>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostCreateWithoutProjectInput = {
  category: CategoryCreateOneWithoutPostsInput;
  content: Scalars['String'];
  cover: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  excerpt: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<TagCreateManyWithoutPostsInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostCreateWithoutTagsInput = {
  category: CategoryCreateOneWithoutPostsInput;
  content: Scalars['String'];
  cover: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  excerpt: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  project: ProjectCreateOneWithoutPostsInput;
  status?: Maybe<PostStatus>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  categoryId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  categoryId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostOrderByInput = {
  categoryId?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  cover?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  excerpt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  CategoryId = 'categoryId',
  Content = 'content',
  Cover = 'cover',
  CreatedAt = 'createdAt',
  Excerpt = 'excerpt',
  Id = 'id',
  ProjectId = 'projectId',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  categoryId?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  cover?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  excerpt?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  projectId?: Maybe<StringFilter>;
  status?: Maybe<EnumPostStatusFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export enum PostStatus {
  Draft = 'draft',
  Published = 'published',
  Trash = 'trash'
}

export type PostUpdateInput = {
  category?: Maybe<CategoryUpdateOneRequiredWithoutPostsInput>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutPostsInput>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostUpdateManyMutationInput = {
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostUpdateManyWithWhereWithoutCategoryInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutProjectInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutTagsInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutCategoryInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutcategoryInput>>;
  create?: Maybe<Array<PostCreateWithoutCategoryInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type PostUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutprojectInput>>;
  create?: Maybe<Array<PostCreateWithoutProjectInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type PostUpdateManyWithoutTagsInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithouttagsInput>>;
  create?: Maybe<Array<PostCreateWithoutTagsInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutTagsInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type PostUpdateWithWhereUniqueWithoutCategoryInput = {
  data: PostUpdateWithoutCategoryInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutProjectInput = {
  data: PostUpdateWithoutProjectInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutTagsInput = {
  data: PostUpdateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutCategoryInput = {
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutPostsInput>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostUpdateWithoutProjectInput = {
  category?: Maybe<CategoryUpdateOneRequiredWithoutPostsInput>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<TagUpdateManyWithoutPostsInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostUpdateWithoutTagsInput = {
  category?: Maybe<CategoryUpdateOneRequiredWithoutPostsInput>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutPostsInput>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostUpsertWithWhereUniqueWithoutCategoryInput = {
  create: PostCreateWithoutCategoryInput;
  update: PostUpdateWithoutCategoryInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutProjectInput = {
  create: PostCreateWithoutProjectInput;
  update: PostUpdateWithoutProjectInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutTagsInput = {
  create: PostCreateWithoutTagsInput;
  update: PostUpdateWithoutTagsInput;
  where: PostWhereUniqueInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  category?: Maybe<CategoryWhereInput>;
  categoryId?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  cover?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  excerpt?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  project?: Maybe<ProjectWhereInput>;
  projectId?: Maybe<StringFilter>;
  status?: Maybe<EnumPostStatusFilter>;
  tags?: Maybe<TagListRelationFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  categories?: Maybe<Array<Category>>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  settings?: Maybe<Settings>;
  tags?: Maybe<Array<Tag>>;
  updatedAt: Scalars['String'];
  users?: Maybe<Array<User>>;
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProjectCreateInput = {
  categories?: Maybe<CategoryCreateManyWithoutProjectInput>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutProjectInput>;
  settings?: Maybe<SettingsCreateOneWithoutProjectInput>;
  tags?: Maybe<TagCreateManyWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
  users?: Maybe<UserCreateManyWithoutProjectsInput>;
};

export type ProjectCreateOneWithoutCategoriesInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutcategoriesInput>;
  create?: Maybe<ProjectCreateWithoutCategoriesInput>;
};

export type ProjectCreateOneWithoutPostsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutpostsInput>;
  create?: Maybe<ProjectCreateWithoutPostsInput>;
};

export type ProjectCreateOneWithoutTagsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithouttagsInput>;
  create?: Maybe<ProjectCreateWithoutTagsInput>;
};

export type ProjectCreateOrConnectWithoutcategoriesInput = {
  create: ProjectCreateWithoutCategoriesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutpostsInput = {
  create: ProjectCreateWithoutPostsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutsettingsInput = {
  create: ProjectCreateWithoutSettingsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithouttagsInput = {
  create: ProjectCreateWithoutTagsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutusersInput = {
  create: ProjectCreateWithoutUsersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutCategoriesInput = {
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutProjectInput>;
  settings?: Maybe<SettingsCreateOneWithoutProjectInput>;
  tags?: Maybe<TagCreateManyWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
  users?: Maybe<UserCreateManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutPostsInput = {
  categories?: Maybe<CategoryCreateManyWithoutProjectInput>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  settings?: Maybe<SettingsCreateOneWithoutProjectInput>;
  tags?: Maybe<TagCreateManyWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
  users?: Maybe<UserCreateManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutSettingsInput = {
  categories?: Maybe<CategoryCreateManyWithoutProjectInput>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutProjectInput>;
  tags?: Maybe<TagCreateManyWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
  users?: Maybe<UserCreateManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutTagsInput = {
  categories?: Maybe<CategoryCreateManyWithoutProjectInput>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutProjectInput>;
  settings?: Maybe<SettingsCreateOneWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
  users?: Maybe<UserCreateManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutUsersInput = {
  categories?: Maybe<CategoryCreateManyWithoutProjectInput>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutProjectInput>;
  settings?: Maybe<SettingsCreateOneWithoutProjectInput>;
  tags?: Maybe<TagCreateManyWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProjectListRelationFilter = {
  every?: Maybe<ProjectWhereInput>;
  none?: Maybe<ProjectWhereInput>;
  some?: Maybe<ProjectWhereInput>;
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProjectOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum ProjectScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ProjectScalarWhereInput = {
  AND?: Maybe<Array<ProjectScalarWhereInput>>;
  NOT?: Maybe<Array<ProjectScalarWhereInput>>;
  OR?: Maybe<Array<ProjectScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProjectUpdateInput = {
  categories?: Maybe<CategoryUpdateManyWithoutProjectInput>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutProjectInput>;
  settings?: Maybe<SettingsUpdateOneWithoutProjectInput>;
  tags?: Maybe<TagUpdateManyWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
  users?: Maybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProjectUpdateManyWithWhereWithoutUsersInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutUsersInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutusersInput>>;
  create?: Maybe<Array<ProjectCreateWithoutUsersInput>>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type ProjectUpdateOneRequiredWithoutCategoriesInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutcategoriesInput>;
  create?: Maybe<ProjectCreateWithoutCategoriesInput>;
  update?: Maybe<ProjectUpdateWithoutCategoriesInput>;
  upsert?: Maybe<ProjectUpsertWithoutCategoriesInput>;
};

export type ProjectUpdateOneRequiredWithoutPostsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutpostsInput>;
  create?: Maybe<ProjectCreateWithoutPostsInput>;
  update?: Maybe<ProjectUpdateWithoutPostsInput>;
  upsert?: Maybe<ProjectUpsertWithoutPostsInput>;
};

export type ProjectUpdateOneRequiredWithoutSettingsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutsettingsInput>;
  create?: Maybe<ProjectCreateWithoutSettingsInput>;
  update?: Maybe<ProjectUpdateWithoutSettingsInput>;
  upsert?: Maybe<ProjectUpsertWithoutSettingsInput>;
};

export type ProjectUpdateOneRequiredWithoutTagsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithouttagsInput>;
  create?: Maybe<ProjectCreateWithoutTagsInput>;
  update?: Maybe<ProjectUpdateWithoutTagsInput>;
  upsert?: Maybe<ProjectUpsertWithoutTagsInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutUsersInput = {
  data: ProjectUpdateWithoutUsersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutCategoriesInput = {
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutProjectInput>;
  settings?: Maybe<SettingsUpdateOneWithoutProjectInput>;
  tags?: Maybe<TagUpdateManyWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
  users?: Maybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutPostsInput = {
  categories?: Maybe<CategoryUpdateManyWithoutProjectInput>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  settings?: Maybe<SettingsUpdateOneWithoutProjectInput>;
  tags?: Maybe<TagUpdateManyWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
  users?: Maybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutSettingsInput = {
  categories?: Maybe<CategoryUpdateManyWithoutProjectInput>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutProjectInput>;
  tags?: Maybe<TagUpdateManyWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
  users?: Maybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutTagsInput = {
  categories?: Maybe<CategoryUpdateManyWithoutProjectInput>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutProjectInput>;
  settings?: Maybe<SettingsUpdateOneWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
  users?: Maybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutUsersInput = {
  categories?: Maybe<CategoryUpdateManyWithoutProjectInput>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutProjectInput>;
  settings?: Maybe<SettingsUpdateOneWithoutProjectInput>;
  tags?: Maybe<TagUpdateManyWithoutProjectInput>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProjectUpsertWithWhereUniqueWithoutUsersInput = {
  create: ProjectCreateWithoutUsersInput;
  update: ProjectUpdateWithoutUsersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutCategoriesInput = {
  create: ProjectCreateWithoutCategoriesInput;
  update: ProjectUpdateWithoutCategoriesInput;
};

export type ProjectUpsertWithoutPostsInput = {
  create: ProjectCreateWithoutPostsInput;
  update: ProjectUpdateWithoutPostsInput;
};

export type ProjectUpsertWithoutSettingsInput = {
  create: ProjectCreateWithoutSettingsInput;
  update: ProjectUpdateWithoutSettingsInput;
};

export type ProjectUpsertWithoutTagsInput = {
  create: ProjectCreateWithoutTagsInput;
  update: ProjectUpdateWithoutTagsInput;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<ProjectWhereInput>>;
  NOT?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  categories?: Maybe<CategoryListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
  settings?: Maybe<SettingsWhereInput>;
  tags?: Maybe<TagListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllCategories: Array<Category>;
  getAllPosts: Array<Post>;
  getAllProjects: Array<Project>;
  getAllTags: Array<Tag>;
  getAllUsers: Array<User>;
  getOneCategory: Category;
  getOnePost: Post;
  getOneProject: Project;
  getOneSettings: Settings;
  getOneTag: Tag;
  getOneUser: User;
  me: User;
};


export type QueryGetAllCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryGetAllPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryGetAllProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};


export type QueryGetAllTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<Array<TagScalarFieldEnum>>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};


export type QueryGetAllUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryGetOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryGetOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryGetOneProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryGetOneSettingsArgs = {
  where: SettingsWhereUniqueInput;
};


export type QueryGetOneTagArgs = {
  where: TagWhereUniqueInput;
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
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export enum Role {
  Admin = 'admin',
  Editor = 'editor',
  Visitor = 'visitor'
}

export type Settings = {
  __typename?: 'Settings';
  defaultRole: Role;
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['String'];
  urls: Scalars['String'];
};

export type SettingsCountAggregate = {
  __typename?: 'SettingsCountAggregate';
  _all: Scalars['Int'];
  defaultRole?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  urls?: Maybe<Scalars['Int']>;
};

export type SettingsCreateOneWithoutProjectInput = {
  connect?: Maybe<SettingsWhereUniqueInput>;
  connectOrCreate?: Maybe<SettingsCreateOrConnectWithoutprojectInput>;
  create?: Maybe<SettingsCreateWithoutProjectInput>;
};

export type SettingsCreateOrConnectWithoutprojectInput = {
  create: SettingsCreateWithoutProjectInput;
  where: SettingsWhereUniqueInput;
};

export type SettingsCreateWithoutProjectInput = {
  defaultRole: Role;
  id?: Maybe<Scalars['String']>;
  urls: Scalars['String'];
};

export type SettingsMaxAggregate = {
  __typename?: 'SettingsMaxAggregate';
  defaultRole?: Maybe<Role>;
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  urls?: Maybe<Scalars['String']>;
};

export type SettingsMinAggregate = {
  __typename?: 'SettingsMinAggregate';
  defaultRole?: Maybe<Role>;
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  urls?: Maybe<Scalars['String']>;
};

export type SettingsUpdateInput = {
  defaultRole?: Maybe<Role>;
  id?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutSettingsInput>;
  urls?: Maybe<Scalars['String']>;
};

export type SettingsUpdateOneWithoutProjectInput = {
  connect?: Maybe<SettingsWhereUniqueInput>;
  connectOrCreate?: Maybe<SettingsCreateOrConnectWithoutprojectInput>;
  create?: Maybe<SettingsCreateWithoutProjectInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SettingsUpdateWithoutProjectInput>;
  upsert?: Maybe<SettingsUpsertWithoutProjectInput>;
};

export type SettingsUpdateWithoutProjectInput = {
  defaultRole?: Maybe<Role>;
  id?: Maybe<Scalars['String']>;
  urls?: Maybe<Scalars['String']>;
};

export type SettingsUpsertWithoutProjectInput = {
  create: SettingsCreateWithoutProjectInput;
  update: SettingsUpdateWithoutProjectInput;
};

export type SettingsWhereInput = {
  AND?: Maybe<Array<SettingsWhereInput>>;
  NOT?: Maybe<Array<SettingsWhereInput>>;
  OR?: Maybe<Array<SettingsWhereInput>>;
  defaultRole?: Maybe<EnumRoleFilter>;
  id?: Maybe<StringFilter>;
  project?: Maybe<ProjectWhereInput>;
  projectId?: Maybe<StringFilter>;
  urls?: Maybe<StringFilter>;
};

export type SettingsWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<StringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  project: Project;
  projectId: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TagCountAggregate = {
  __typename?: 'TagCountAggregate';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type TagCreateInput = {
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutTagsInput>;
  project: ProjectCreateOneWithoutTagsInput;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TagCreateManyWithoutPostsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutpostsInput>>;
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
};

export type TagCreateManyWithoutProjectInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutprojectInput>>;
  create?: Maybe<Array<TagCreateWithoutProjectInput>>;
};

export type TagCreateOrConnectWithoutpostsInput = {
  create: TagCreateWithoutPostsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutprojectInput = {
  create: TagCreateWithoutProjectInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutPostsInput = {
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  project: ProjectCreateOneWithoutTagsInput;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TagCreateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TagListRelationFilter = {
  every?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
};

export type TagMaxAggregate = {
  __typename?: 'TagMaxAggregate';
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TagMinAggregate = {
  __typename?: 'TagMinAggregate';
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TagOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  ProjectId = 'projectId',
  UpdatedAt = 'updatedAt'
}

export type TagScalarWhereInput = {
  AND?: Maybe<Array<TagScalarWhereInput>>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  projectId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TagUpdateInput = {
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutTagsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutTagsInput>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TagUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TagUpdateManyWithWhereWithoutPostsInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithWhereWithoutProjectInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutPostsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutpostsInput>>;
  create?: Maybe<Array<TagCreateWithoutPostsInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutPostsInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutPostsInput>>;
};

export type TagUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutprojectInput>>;
  create?: Maybe<Array<TagCreateWithoutProjectInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type TagUpdateWithWhereUniqueWithoutPostsInput = {
  data: TagUpdateWithoutPostsInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithWhereUniqueWithoutProjectInput = {
  data: TagUpdateWithoutProjectInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutPostsInput = {
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutTagsInput>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TagUpdateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutTagsInput>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TagUpsertWithWhereUniqueWithoutPostsInput = {
  create: TagCreateWithoutPostsInput;
  update: TagUpdateWithoutPostsInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutProjectInput = {
  create: TagCreateWithoutProjectInput;
  update: TagUpdateWithoutProjectInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
  project?: Maybe<ProjectWhereInput>;
  projectId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type UpdatePostInput = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type UpdateProjectInput = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type UpdateSettingsInput = {
  data: SettingsUpdateInput;
  where: SettingsWhereUniqueInput;
};

export type UpdateTagInput = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type UpdateUserInput = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  facebookId?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  projects?: Maybe<Array<Project>>;
  role: Role;
  updatedAt: Scalars['String'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  avatar?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  facebookId?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['Int']>;
  googleId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type UserCreateManyWithoutProjectsInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutprojectsInput>>;
  create?: Maybe<Array<UserCreateWithoutProjectsInput>>;
};

export type UserCreateOrConnectWithoutprojectsInput = {
  create: UserCreateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutProjectsInput = {
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  facebookId?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  avatar?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  facebookId?: Maybe<SortOrder>;
  firstname?: Maybe<SortOrder>;
  googleId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastname?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Avatar = 'avatar',
  CreatedAt = 'createdAt',
  Email = 'email',
  FacebookId = 'facebookId',
  Firstname = 'firstname',
  GoogleId = 'googleId',
  Id = 'id',
  Lastname = 'lastname',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  avatar?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  facebookId?: Maybe<StringFilter>;
  firstname?: Maybe<StringFilter>;
  googleId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  lastname?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  role?: Maybe<EnumRoleFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserUpdateInput = {
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  projects?: Maybe<ProjectUpdateManyWithoutUsersInput>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserUpdateManyMutationInput = {
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserUpdateManyWithWhereWithoutProjectsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutProjectsInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutprojectsInput>>;
  create?: Maybe<Array<UserCreateWithoutProjectsInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutProjectsInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutProjectsInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutProjectsInput>>;
};

export type UserUpdateWithWhereUniqueWithoutProjectsInput = {
  data: UserUpdateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutProjectsInput = {
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserUpsertWithWhereUniqueWithoutProjectsInput = {
  create: UserCreateWithoutProjectsInput;
  update: UserUpdateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  avatar?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  facebookId?: Maybe<StringFilter>;
  firstname?: Maybe<StringFilter>;
  googleId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  lastname?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  role?: Maybe<EnumRoleFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
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