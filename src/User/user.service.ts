import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  getHello(): string {
    console.log('hello');
    return 'this message from project2';
  }

  setDB(): string {
    let sampleData = new User();
    sampleData.firstName = 'dongha';
    sampleData.lastName = 'Lee';

    return 'set Okay Check your DB';
  }
}
