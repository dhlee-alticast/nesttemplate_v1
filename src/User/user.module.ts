import { HttpModule, Module } from '@nestjs/common';
// import { AppController } from '../controllers/app.controller';
// import { AppService } from '../services/app.service';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // HttpModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (config: ConfigService) => ({
    //     baseURL: config.get('conn.baseUrl'),
    //     headers: config.get('conn.headers')
    //   }),
    //   inject: [ConfigService]
    // }
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  //   constructor(private connection: Connection) {}
}
