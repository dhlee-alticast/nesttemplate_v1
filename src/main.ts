import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ShareModule } from './share/share.module';
import { ConfigService } from './share/services/config.service';
import { Logger } from '@nestjs/common';
import { client } from './eurekaModule';
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
  const app = await NestFactory.create(AppModule);
  const logger: Logger = new Logger('Server Booting', false);
  const configService = app.select(ShareModule).get(ConfigService);
  const RUN_TIME_ENV = configService.get('RUN_TIME_ENV') || 'local';
  app.useLogger(log[RUN_TIME_ENV].level);
  //swagger
  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('The nest API description')
    .setVersion('1.0')
    .addTag('Nest')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  const serverport = configService.getNumber('PORT');

  await app.listen(serverport);

  logger.log(`Server running on port ${serverport}`);
  client.start((res) => {
    console.dir(res);
  });
}
bootstrap();
