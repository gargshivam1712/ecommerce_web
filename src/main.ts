import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filter/http.exception.filter';
import { AllExceptionsFilter } from './common/filter/mongoose.exception.filter';
import express from 'express'
import { NestExpressApplication } from '@nestjs/platform-express';
// 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
import {join} from "path"

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.enableCors();
  app.useGlobalPipes(new ValidationPipe({whitelist : true}))
  app.useGlobalFilters(new AllExceptionsFilter());
  console.log(join(__dirname , '..' , 'client/build'))
  app.useStaticAssets(join(__dirname , '..' , 'client/build'))
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
