import { Field, Int, ObjectType } from '@nestjs/graphql';
import { <%=singular(classify(name))%> } from 'src/@generated';

@ObjectType()
export class <%=classify(name)%> {
  @Field(() => Int)
  totalPages: number;
  @Field(() => [<%=singular(classify(name))%>])
  nodes!: Array<<%=singular(classify(name))%>>;
}
