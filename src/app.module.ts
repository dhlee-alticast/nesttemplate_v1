import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './User/user.entity';
import { ExData } from './ExData/exdata.entity';
import { ExDataModule } from './ExData/exdata.module';
import { DataBaseService } from './configs/shareService/database.service';
import { ConfigModule } from './configs/config.module';
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
    TypeOrmModule.forRootAsync({ useClass: DataBaseService }),
    // DataBaseModule,
    ConfigModule,
    UserModule,
    ExDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
