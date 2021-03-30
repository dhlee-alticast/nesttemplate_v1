import { Injectable, Logger } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  private logger: Logger = new Logger(UserService.name, false);
  getHello(): string {
    this.logger.log('function gethello');
    return 'this message from project2';
  }

  setDB(): string {
    let sampleData = new User();
    sampleData.firstName = 'dongha';
    sampleData.lastName = 'Lee';

    return 'set Okay Check your DB';
  }
}
