import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import config from './configs/config';
import { SettingsModule } from './settings/settings.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRoot({
      introspection: true,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
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
    AuthModule,
    UserModule,
    SettingsModule,
  ],
  providers: [],
})
export class AppModule {}
