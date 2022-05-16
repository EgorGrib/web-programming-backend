import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import hbs = require('hbs');
import {LoggingInterceptor} from "./logging.interceptor";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";
import supertokens from "supertokens-node";
import {SupertokensExceptionFilter} from "./auth/auth.filter";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({errorHttpStatusCode: 400,}));

  app.enableCors({
    origin: ['https://applemarketru.herokuapp.com'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });
  app.useGlobalFilters(new SupertokensExceptionFilter());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));

  app.useGlobalInterceptors(new LoggingInterceptor());

  const config = new DocumentBuilder()
      .setTitle('Apple Market API')
      .setDescription('Early version of Api')
      .setVersion('0.1')
      .addTag('user')
      .addTag('device')
      .addTag('basket')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
}

bootstrap();