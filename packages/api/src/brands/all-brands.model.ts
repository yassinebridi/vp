import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Brand } from 'src/@generated';

@ObjectType()
export class Brands {
  @Field(() => Int)
  totalPages: number;
  @Field(() => [Brand])
  nodes!: Array<Brand>;
}
