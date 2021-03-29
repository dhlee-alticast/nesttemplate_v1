import { Injectable } from '@nestjs/common';
import { User } from '../entity/userTable';
import { InjectConnection } from '@nestjs/typeorm';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  setDB(): string {
    let sampleData = new User();
    sampleData.firstName = 'dongha';
    sampleData.lastName = 'Lee';

    return 'set Okay Check your DB';
  }
}
