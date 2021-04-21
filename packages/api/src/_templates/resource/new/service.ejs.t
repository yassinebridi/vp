---
to: <%=h.inflection.pluralize(name)%>/<%=h.inflection.pluralize(name)%>.service.ts
---
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';
import {
  FindMany<%=Name%>Args,
  FindUnique<%=Name%>Args,
  <%=Name%>CreateInput,
  <%=Name%>WhereUniqueInput,
  UpdateOne<%=Name%>Args,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class <%=h.inflection.pluralize(Name)%>Service {
  private readonly logger = new Logger(<%=h.inflection.pluralize(Name)%>Service.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly translateService: I18nRequestScopeService,
  ) {}

  async getAll<%=h.inflection.pluralize(Name)%>(getAll<%=h.inflection.pluralize(Name)%>Input: FindMany<%=Name%>Args) {
    const <%=h.inflection.pluralize(name)%>Transaction = await this.prismaService.$transaction([
      this.prismaService.<%=name%>.count(),
      this.prismaService.<%=name%>.findMany(getAll<%=h.inflection.pluralize(Name)%>Input),
    ]);

    return {
      totalPages: <%=h.inflection.pluralize(name)%>Transaction[0],
      nodes: <%=h.inflection.pluralize(name)%>Transaction[1],
    };
  }

  async getOne<%=Name%>(getOne<%=Name%>Input: FindUnique<%=Name%>Args) {
    return await this.prismaService.<%=name%>.findUnique(getOne<%=Name%>Input);
  }

  async create<%=Name%>(create<%=Name%>Input: <%=Name%>CreateInput) {
    try {
      await this.prismaService.<%=name%>.create({
        data: create<%=Name%>Input,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('<%=h.inflection.pluralize(name)%>.create'),
      );
    }
  }

  async update<%=Name%>(update<%=Name%>Input: UpdateOne<%=Name%>Args) {
    const { data, where } = update<%=Name%>Input;

    const <%=name%> = await this.prismaService.<%=name%>.findUnique({
      where,
      select: { id: true },
    });
    if (!<%=name%>) {
      throw new NotFoundException(
        await this.translateService.translate('<%=h.inflection.pluralize(name)%>.generics.no_item'),
      );
    }

    try {
      await this.prismaService.<%=name%>.update({
        where,
        data,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('<%=h.inflection.pluralize(name)%>.update'),
      );
    }
  }

  async remove<%=Name%>(where: <%=Name%>WhereUniqueInput) {
    const <%=name%> = await this.prismaService.<%=name%>.findUnique({
      where,
      select: { id: true },
    });
    if (!<%=name%>) {
      throw new NotFoundException(
        await this.translateService.translate('<%=h.inflection.pluralize(name)%>.generics.no_item'),
      );
    }
    try {
      await this.prismaService.<%=name%>.delete({ where });

      return true;
    } catch (error) {
      this.logger.error(error);
      if (error.code === 'P2002') {
        throw new ConflictException(
          await this.translateService.translate('<%=h.inflection.pluralize(name)%>.generics.conflict'),
        );
      }
      throw new InternalServerErrorException(
        await this.translateService.translate('<%=h.inflection.pluralize(name)%>.remove'),
      );
    }
  }

  async bulk<%=h.inflection.pluralize(Name)%>(number: number) {
    console.log('number: ', number);
    return true;
  }

  async bulkRemove<%=h.inflection.pluralize(Name)%>(): Promise<boolean | Error> {
    try {
      await this.prismaService.<%=name%>.deleteMany({});

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new ConflictException(
        await this.translateService.translate('<%=h.inflection.pluralize(name)%>.generics.conflict'),
      );
    }
  }
}
