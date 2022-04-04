import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app
    .listen(3001)
    .then(() => logger.log(`🍹 Listening @ http://localhost:3001`));
}
bootstrap();
