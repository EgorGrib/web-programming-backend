import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import hbs = require('hbs');
import {LoggingInterceptor} from "./logging.interceptor";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.useGlobalInterceptors(new LoggingInterceptor());

  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));

  const port = process.env.PORT || 3000;
  await app.listen(port);
}

bootstrap();