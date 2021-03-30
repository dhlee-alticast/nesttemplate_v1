import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const env = process.env.RUN_TIME_ENV || 'local';
const log = {
  local: {
    level: ['error', 'log', 'warn', 'debug', 'verbose'],
  },
  dev: {
    level: ['error', 'log', 'warn', 'debug'],
  },
  staging: {
    level: ['error', 'log', 'warn', 'debug'],
  },
  preprod: {
    level: ['error', 'log', 'warn', 'debug'],
  },
  prod: {
    level: ['error', 'log', 'warn'],
  },
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: log[env].level,
  });

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('The nest API description')
    .setVersion('1.0')
    .addTag('Nest')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3001);
}
bootstrap();
