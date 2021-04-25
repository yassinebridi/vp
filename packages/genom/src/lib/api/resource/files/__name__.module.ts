import { Module } from '@nestjs/common';
import { <%=classify(name)%>Service } from './<%=name%>.service';
import { <%=classify(name)%>Resolver } from './<%=name%>.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PrismaService, <%=classify(name)%>Resolver, <%=classify(name)%>Service],
})
export class <%=classify(name)%>Module {}
