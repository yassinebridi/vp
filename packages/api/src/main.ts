import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { CorsConfig, NestConfig } from './configs/config.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');

  const consumerUrlsArray = corsConfig.consumerUrls.split(',');

  app.enableCors({
    origin: consumerUrlsArray,
    credentials: true,
  });

  app.use(cookieParser());

  await app.listen(process.env.PORT || nestConfig.port || 4000);
}
bootstrap();

// export const createViteNodeApp = NestFactory.create(AppModule, {
//   cors: { origin: 'http://localhost:3000', credentials: true },
// });
