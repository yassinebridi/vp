import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';
import {
  FindMany<%=classify(singular(name))%>Args,
  FindUnique<%=classify(singular(name))%>Args,
  <%=classify(singular(name))%>CreateInput,
  <%=classify(singular(name))%>WhereUniqueInput,
  UpdateOne<%=classify(singular(name))%>Args,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class <%=classify(name)%>Service {
  private readonly logger = new Logger(<%=classify(name)%>Service.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly translateService: I18nRequestScopeService,
  ) {}

  async getAll<%=classify(name)%>(getAll<%=classify(name)%>Input: FindMany<%=classify(singular(name))%>Args) {
    const <%=name>Transaction = await this.prismaService.$transaction([
      this.prismaService.<%=name%>.count(getAll<%=classify(name)%>Input),
      this.prismaService.<%=name%>.findMany(getAll<%=classify(name)%>Input),
    ]);

    return {
      totalPages: <%=name>Transaction[0],
      nodes: <%=name>Transaction[1],
    };
  }

  async getOne<%=classify(singular(name))%>(getOne<%=classify(singular(name))%>Input: FindUnique<%=classify(singular(name))%>Args) {
    return await this.prismaService.<%=name%>.findUnique(getOne<%=classify(singular(name))%>Input);
  }

  async create<%=classify(singular(name))%>(create<%=classify(singular(name))%>Input: <%=classify(singular(name))%>CreateInput) {
    try {
      await this.prismaService.<%=name%>.create({
        data: create<%=classify(singular(name))%>Input,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('<%=name>.create'),
      );
    }
  }

  async update<%=classify(singular(name))%>(update<%=classify(singular(name))%>Input: UpdateOne<%=classify(singular(name))%>Args) {
    const { data, where } = update<%=classify(singular(name))%>Input;

    const <%=name%> = await this.prismaService.<%=name%>.findUnique({
      where,
      select: { id: true },
    });
    if (!<%=name%>) {
      throw new NotFoundException(
        await this.translateService.translate('<%=name>.generics.no_item'),
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
        await this.translateService.translate('<%=name>.update'),
      );
    }
  }

  async remove<%=classify(singular(name))%>(where: <%=classify(singular(name))%>WhereUniqueInput) {
    const <%=name%> = await this.prismaService.<%=name%>.findUnique({
      where,
      select: { id: true },
    });
    if (!<%=name%>) {
      throw new NotFoundException(
        await this.translateService.translate('<%=name>.generics.no_item'),
      );
    }
    try {
      await this.prismaService.<%=name%>.delete({ where });

      return true;
    } catch (error) {
      this.logger.error(error);
      if (error.code === 'P2002') {
        throw new ConflictException(
          await this.translateService.translate('<%=name>.generics.conflict'),
        );
      }
      throw new InternalServerErrorException(
        await this.translateService.translate('<%=name>.remove'),
      );
    }
  }

  async bulk<%=classify(name)%>(number: number) {
    console.log('number: ', number);
    return true;
  }

  async bulkRemove<%=classify(name)%>(): Promise<boolean | Error> {
    try {
      await this.prismaService.<%=name%>.deleteMany({});

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new ConflictException(
        await this.translateService.translate('<%=name>.generics.conflict'),
      );
    }
  }
}
