import { Field, Int, ObjectType } from '@nestjs/graphql';
import { City } from 'src/@generated';

@ObjectType()
export class Cities {
  @Field(() => Int)
  totalPages: number;
  @Field(() => [City])
  nodes!: Array<City>;
}
