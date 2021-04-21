import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/@generated';

@ObjectType()
export class Products {
  @Field(() => Int)
  totalPages: number;
  @Field(() => [Product])
  nodes!: Array<Product>;
}
