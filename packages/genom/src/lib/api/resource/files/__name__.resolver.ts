import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  <%=singular(classify(name))%>,
  <%=singular(classify(name))%>CreateInput,
  <%=singular(classify(name))%>WhereUniqueInput,
  DeleteMany<%=singular(classify(name))%>Args,
  FindMany<%=singular(classify(name))%>Args,
  FindUnique<%=singular(classify(name))%>Args,
  UpdateMany<%=singular(classify(name))%>Args,
  UpdateOne<%=singular(classify(name))%>Args,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';
import { <%=classify(name)%> } from './all-<%=name%>.model';
import { <%=classify(name)%>Service } from './<%=name%>.service';

@Resolver(() => <%=singular(classify(name))%>)
export class <%=classify(name)%>Resolver {
  constructor(
    private readonly <%=name%>Service: <%=classify(name)%>Service,
    private readonly prismaService: PrismaService,
  ) {}

  @Query(() => <%=classify(name)%>)
  getAll<%=classify(name)%>(@Args() getAll<%=classify(name)%>Input: FindMany<%=singular(classify(name))%>Args) {
    return this.<%=name%>Service.getAll<%=classify(name)%>(getAll<%=classify(name)%>Input);
  }

  @Query(() => Number)
  count<%=classify(name)%>(@Args() count<%=classify(name)%>Input: FindMany<%=singular(classify(name))%>Args) {
    return this.<%=name%>Service.count<%=classify(name)%>(count<%=classify(name)%>Input);
  }

  @Query(() => <%=singular(classify(name))%>)
  getOne<%=singular(classify(name))%>(@Args() getOne<%=singular(classify(name))%>Input: FindUnique<%=singular(classify(name))%>Args) {
    return this.<%=name%>Service.getOne<%=singular(classify(name))%>(getOne<%=singular(classify(name))%>Input);
  }

  @Mutation(() => Boolean)
  create<%=singular(classify(name))%>(
    @Args('create<%=singular(classify(name))%>Input') create<%=singular(classify(name))%>Input:<%=singular(classify(name))%>CreateInput,
  ) {
    return this.<%=name%>Service.create<%=singular(classify(name))%>(create<%=singular(classify(name))%>Input);
  }

  @Mutation(() => Boolean)
  update<%=singular(classify(name))%>(@Args() update<%=singular(classify(name))%>Input: UpdateOne<%=singular(classify(name))%>Args) {
    return this.<%=name%>Service.update<%=singular(classify(name))%>(update<%=singular(classify(name))%>Input);
  }

  @Mutation(() => Boolean)
  update<%=classify(name)%>(@Args() update<%=classify(name)%>Input: UpdateMany<%=singular(classify(name))%>Args) {
    return this.<%=name%>Service.update<%=classify(name)%>(update<%=classify(name)%>Input);
  }

  @Mutation(() => Boolean)
  remove<%=singular(classify(name))%>(
    @Args('where<%=singular(classify(name))%>Input') where<%=singular(classify(name))%>Input:<%=singular(classify(name))%>WhereUniqueInput,
  ) {
    return this.<%=name%>Service.remove<%=singular(classify(name))%>(where<%=singular(classify(name))%>Input);
  }

  @Mutation(() => Boolean)
  remove<%=classify(name)%>(@Args() remove<%=classify(name)%>Input: DeleteMany<%=singular(classify(name))%>Args) {
    return this.<%=name%>Service.remove<%=classify(name)%>(remove<%=classify(name)%>Input);
  }

  @Mutation(() => Boolean)
  async bulk<%=classify(name)%>(
    @Args('number', { type: () => Int }) number: number,
  ): Promise<boolean> {
    return await this.<%=name%>Service.bulk<%=classify(name)%>(number);
  }

  @Mutation(() => Boolean)
  async bulkRemove<%=classify(name)%>(): Promise<boolean | Error> {
    return await this.<%=name%>Service.bulkRemove<%=classify(name)%>();
  }
}
