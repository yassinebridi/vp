import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/@generated';

@ObjectType()
export class Categories {
  @Field(() => Int)
  totalPages: number;
  @Field(() => [Category])
  nodes!: Array<Category>;
}
