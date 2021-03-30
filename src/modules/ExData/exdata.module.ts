import { Module } from '@nestjs/common';
// import { AppController } from '../controllers/app.controller';
// import { AppService } from '../services/app.service';

import { ExDataController } from './exdata.controller';
import { ExDataService } from './exdata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExData } from './exdata.entity';
import { ExDAtaRepository } from './exdata.repository';
@Module({
  imports: [TypeOrmModule.forFeature([ExData])],
  controllers: [ExDataController],
  exports: [ExDataService],
  providers: [ExDataService],
})
export class ExDataModule {
  //   constructor(private connection: Connection) {}
}
