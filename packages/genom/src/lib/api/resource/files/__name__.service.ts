import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';
import {
  <%=singular(classify(name))%>CreateInput,
  <%=singular(classify(name))%>WhereUniqueInput,
  DeleteMany<%=singular(classify(name))%>Args,
  FindMany<%=singular(classify(name))%>Args,
  FindUnique<%=singular(classify(name))%>Args,
  UpdateMany<%=singular(classify(name))%>Args,
  UpdateOne<%=singular(classify(name))%>Args,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class <%=classify(name)%>Service {
  private readonly logger = new Logger(<%=classify(name)%>Service.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly translateService: I18nRequestScopeService,
  ) {}

  async getAll<%=classify(name)%>(getAll<%=classify(name)%>Input: FindMany<%=singular(classify(name))%>Args) {
    const <%=name%>Transaction = await this.prismaService.$transaction([
      this.prismaService.<%=singular(name)%>.count(getAll<%=classify(name)%>Input),
      this.prismaService.<%=singular(name)%>.findMany(getAll<%=classify(name)%>Input),
    ]);

    return {
      totalPages: <%=name%>Transaction[0],
      nodes: <%=name%>Transaction[1],
    };
  }

  async count<%=classify(name)%>(count<%=classify(name)%>Input: FindMany<%=singular(classify(name))%>Args) {
    return await this.prismaService.<%=singular(name)%>.count(count<%=classify(name)%>Input);
  }

  async getOne<%=singular(classify(name))%>(getOne<%=singular(classify(name))%>Input: FindUnique<%=singular(classify(name))%>Args) {
    return await this.prismaService.<%=singular(name)%>.findUnique(getOne<%=singular(classify(name))%>Input);
  }

  async create<%=singular(classify(name))%>(create<%=singular(classify(name))%>Input: <%=singular(classify(name))%>CreateInput) {
    try {
      await this.prismaService.<%=singular(name)%>.create({
        data: create<%=singular(classify(name))%>Input,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('<%=name%>.create'),
      );
    }
  }

  async update<%=singular(classify(name))%>(update<%=singular(classify(name))%>Input: UpdateOne<%=singular(classify(name))%>Args) {
    const { data, where } = update<%=singular(classify(name))%>Input;

    const <%=singular(name)%> = await this.prismaService.<%=singular(name)%>.findUnique({
      where,
      select: { id: true },
    });
    if (!<%=singular(name)%>) {
      throw new NotFoundException(
        await this.translateService.translate('<%=name%>.generics.no_item'),
      );
    }

    try {
      await this.prismaService.<%=singular(name)%>.update({
        where,
        data,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('<%=name%>.update'),
      );
    }
  }

  async update<%=classify(name)%>(update<%=classify(name)%>Input: UpdateMany<%=singular(classify(name))%>Args) {
    try {
      await this.prismaService.<%=singular(name)%>.updateMany(update<%=classify(name)%>Input);

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(
        await this.translateService.translate('<%=name%>.update'),
      );
    }
  }

  async remove<%=singular(classify(name))%>(where: <%=singular(classify(name))%>WhereUniqueInput) {
    const <%=singular(name)%> = await this.prismaService.<%=singular(name)%>.findUnique({
      where,
      select: { id: true },
    });
    if (!<%=singular(name)%>) {
      throw new NotFoundException(
        await this.translateService.translate('<%=name%>.generics.no_item'),
      );
    }
    try {
      await this.prismaService.<%=singular(name)%>.delete({ where });

      return true;
    } catch (error) {
      this.logger.error(error);
      if (error.code === 'P2002') {
        throw new ConflictException(
          await this.translateService.translate('<%=name%>.generics.conflict'),
        );
      }
      throw new InternalServerErrorException(
        await this.translateService.translate('<%=name%>.remove'),
      );
    }
  }

  async remove<%=classify(name)%>(deleteMany<%=singular(classify(name))%>Args: DeleteMany<%=singular(classify(name))%>Args) {
    try {
      await this.prismaService.<%=singular(name)%>.deleteMany(deleteMany<%=singular(classify(name))%>Args);

      return true;
    } catch (error) {
      this.logger.error(error);
      if (error.code === 'P2002') {
        throw new ConflictException(
          await this.translateService.translate('<%=name%>.generics.conflict'),
        );
      }
      throw new InternalServerErrorException(
        await this.translateService.translate('<%=name%>.remove'),
      );
    }
  }

  async bulk<%=classify(name)%>(number: number) {
    console.log('number: ', number);
    return true;
  }

  async bulkRemove<%=classify(name)%>(): Promise<boolean | Error> {
    try {
      await this.prismaService.<%=singular(name)%>.deleteMany({});

      return true;
    } catch (error) {
      this.logger.error(error);
      throw new ConflictException(
        await this.translateService.translate('<%=name%>.generics.conflict'),
      );
    }
  }
}
