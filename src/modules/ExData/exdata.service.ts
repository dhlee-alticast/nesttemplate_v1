import { Injectable } from '@nestjs/common';
import { ExData } from './exdata.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExDataService {
  constructor(
    @InjectRepository(ExData)
    private exDataRepo: Repository<ExData>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  getExcelData(): string {
    return 'excelData';
  }

  async setDB(): Promise<string> {
    let sampleData = new ExData();
    sampleData.parkingId = 'dongha';
    sampleData.soId = 'Lee';
    const result = await this.exDataRepo.save(sampleData);
    console.log('save testData');
    console.log(result);
    return 'set Okay Check your DB';
  }
}
