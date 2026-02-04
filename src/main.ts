import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('DEVELOPER')
  const app = await NestFactory.create(AppModule);
  logger.log("Testing")
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
