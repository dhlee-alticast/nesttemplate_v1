import { Module } from '@nestjs/common';
import { UserModule } from './modules/User/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ExDataModule } from './modules/ExData/exdata.module';
import { ConfigService } from './share/services/config.service';
import { ShareModule } from './share/share.module';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import path from 'path';
import { client } from './eurekaModule';

@Module({
  imports: [
    // TypeOrmModule.forRoot(dbconfig.mongoDB as TypeOrmModuleOptions),
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   host: 'localhost',
    //   port: 27017,
    //   database: 'test',
    //   entities: [User, ExData],
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ShareModule],
      useFactory: (configService: ConfigService) =>
        configService.createTypeOrmOptions(),
      inject: [ConfigService],
    }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        // fallbackLanguage: configService.get('fallbackLanguage'),
        fallbackLanguage: 'ko',
        parserOptions: {
          path: path.join(__dirname, '/i18n/'),
          watch: configService.isDevelopment,
        },
      }),
      imports: [ShareModule],
      parser: I18nJsonParser,
      inject: [ConfigService],
    }),
    ShareModule,
    UserModule,
    ExDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
