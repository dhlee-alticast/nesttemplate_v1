import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UserModule } from './User/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import dbconfig from './configs/cfgDB.json';
import { User } from './User/user.entity';
import { ExData } from './ExData/exdata.entity';
import { ExDataModule } from './ExData/exdata.module';
@Module({
  imports: [
    // TypeOrmModule.forRoot(dbconfig.mongoDB as TypeOrmModuleOptions),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'test',
      entities: [User, ExData],
    }),
    // TypeOrmModule.forRoot(),
    UserModule,
    ExDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // constructor(private connection: Connection) {}
}
