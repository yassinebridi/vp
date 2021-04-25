import { Field, Int, ObjectType } from '@nestjs/graphql';
import { <%=classify(singular(name))%> } from 'src/@generated';

@ObjectType()
export class <%=classify(name)%> {
  @Field(() => Int)
  totalPages: number;
  @Field(() => [<%=classify(singular(name))%>])
  nodes!: Array<<%=classify(singular(name))%>>;
}
