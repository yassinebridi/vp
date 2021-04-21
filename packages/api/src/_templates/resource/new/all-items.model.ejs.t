---
to: <%=h.inflection.pluralize(name)%>/all-<%=h.inflection.pluralize(name)%>.model.ts
---
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { <%=Name%> } from 'src/@generated';

@ObjectType()
export class <%=h.inflection.pluralize(Name)%> {
  @Field(() => Int)
  totalPages: number;
  @Field(() => [<%=Name%>])
  nodes!: Array<<%=Name%>>;
}
