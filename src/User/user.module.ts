import { Module } from '@nestjs/common';
// import { AppController } from '../controllers/app.controller';
// import { AppService } from '../services/app.service';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  //   constructor(private connection: Connection) {}
}
