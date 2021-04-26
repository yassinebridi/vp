import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  AcceptLanguageResolver,
  CookieResolver,
  HeaderResolver,
  I18nJsonParser,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';
import { AuthModule } from './auth/auth.module';
import { BrandsModule } from './brands/brands.module';
import config from './configs/config';
import { ProductsModule } from './products/products.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    I18nModule.forRoot({
      fallbackLanguage: 'fr',
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['vp-locale'] },
        new HeaderResolver(['vp-locale']),
        AcceptLanguageResolver,
        new CookieResolver(['vp-locale']),
      ],
    }),
    GraphQLModule.forRoot({
      introspection: true,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      path: '/',
      context: ({ req, res, connection }) =>
        connection
          ? { req: { headers: connection.context }, res }
          : { req, res },
      cors: {
        credentials: true,
        origin: true,
      },
    }),
    BrandsModule,
    ProductsModule,
    AuthModule,
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
