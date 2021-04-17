---
to: <%=h.inflection.pluralize(name)%>/<%=h.inflection.pluralize(name)%>.module.ts
---
import { Module } from '@nestjs/common';
import { <%=h.inflection.pluralize(Name)%>Service } from './<%=h.inflection.pluralize(name)%>.service';
import { <%=h.inflection.pluralize(Name)%>Resolver } from './<%=h.inflection.pluralize(name)%>.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PrismaService, <%=h.inflection.pluralize(Name)%>Resolver, <%=h.inflection.pluralize(Name)%>Service],
})
export class <%=h.inflection.pluralize(Name)%>Module {}
