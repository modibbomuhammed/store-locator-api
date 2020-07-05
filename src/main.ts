import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/main/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

// his lines 31 on his userService what would lead to that error
// instead of creating a user dto i used user entity for validation
