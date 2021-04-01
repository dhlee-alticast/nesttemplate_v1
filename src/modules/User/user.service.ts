import { Injectable, Logger } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiService } from '../api/api.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,

    private apiservice: ApiService,
  ) {}
  private logger: Logger = new Logger(UserService.name, false);
  getHello(): string {
    this.logger.log('function gethello');
    return 'this message from project2';
  }

  async setDB(): Promise<string> {
    let sampleData = new User();
    const nowData = Date.now();
    sampleData.firstName = `dongha ${nowData}`;
    sampleData.lastName = 'Lee';
    const res = await this.userRepo.save(sampleData);
    this.logger.log('Save Data Result ');
    this.logger.log(res);

    return 'set Okay Check your DB';
  }

  async getapiCall(): Promise<string> {
    const res = await this.apiservice.getCallexdata();
    return res;
  }
}
