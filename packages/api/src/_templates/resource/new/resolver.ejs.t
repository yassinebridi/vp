---
to: <%=h.inflection.pluralize(name)%>/<%=h.inflection.pluralize(name)%>.resolver.ts
---
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  FindMany<%=Name%>Args,
  FindUnique<%=Name%>Args,
  <%=Name%>,
  <%=Name%>CreateInput,
  <%=Name%>WhereUniqueInput,
  UpdateOne<%=Name%>Args,
} from 'src/@generated';
import { <%=h.inflection.pluralize(Name)%>Service } from './<%=h.inflection.pluralize(name)%>.service';

@Resolver(() => <%=Name%>)
export class <%=h.inflection.pluralize(Name)%>Resolver {
  constructor(private readonly <%=h.inflection.pluralize(name)%>Service: <%=h.inflection.pluralize(Name)%>Service) {}

  @Query(() => [<%=Name%>])
  getAll<%=h.inflection.pluralize(Name)%>(@Args() getAll<%=h.inflection.pluralize(Name)%>Input: FindMany<%=Name%>Args) {
    return this.<%=h.inflection.pluralize(name)%>Service.getAll<%=h.inflection.pluralize(Name)%>(getAll<%=h.inflection.pluralize(Name)%>Input);
  }

  @Query(() => <%=Name%>)
  getOne<%=Name%>(@Args() getOne<%=Name%>Input: FindUnique<%=Name%>Args) {
    return this.<%=h.inflection.pluralize(name)%>Service.getOne<%=Name%>(getOne<%=Name%>Input);
  }

  @Mutation(() => <%=Name%>)
  create<%=Name%>(
    @Args('create<%=Name%>Input') create<%=Name%>Input: <%=Name%>CreateInput,
  ) {
    return this.<%=h.inflection.pluralize(name)%>Service.create<%=Name%>(create<%=Name%>Input);
  }

  @Mutation(() => <%=Name%>)
  update<%=Name%>(@Args() update<%=Name%>Input: UpdateOne<%=Name%>Args) {
    return this.<%=h.inflection.pluralize(name)%>Service.update<%=Name%>(update<%=Name%>Input);
  }

  @Mutation(() => <%=Name%>)
  remove<%=Name%>(
    @Args('where<%=Name%>Input') where<%=Name%>Input: <%=Name%>WhereUniqueInput,
  ) {
    return this.<%=h.inflection.pluralize(name)%>Service.remove<%=Name%>(where<%=Name%>Input);
  }

  @Mutation(() => Boolean)
  async bulk<%=Name%>(@Args('number') number: number): Promise<boolean> {
    return await this.<%=h.inflection.pluralize(name)%>Service.bulk<%=h.inflection.pluralize(Name)%>(number);
  }

  @Mutation(() => Boolean)
  async bulkDelete<%=Name%>(): Promise<boolean | Error> {
    return await this.<%=h.inflection.pluralize(name)%>Service.bulkDelete<%=h.inflection.pluralize(Name)%>();
  }
}