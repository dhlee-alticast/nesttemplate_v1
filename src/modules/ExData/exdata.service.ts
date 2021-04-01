import { Injectable, Logger } from '@nestjs/common';
import { ExData } from './exdata.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import fs from 'fs';
const {
  Parser,
  transforms: { unwind },
} = require('json2csv');

@Injectable()
export class ExDataService {
  constructor(
    @InjectRepository(ExData)
    private exDataRepo: Repository<ExData>,
  ) {}

  private readonly logger: Logger = new Logger('ExData Service', false);

  getHello(): string {
    return 'Hello World! from exdata';
  }

  getExcelData(): string {
    return 'excelData';
  }

  async setDB(): Promise<string> {
    let sampleData = new ExData();
    sampleData.parkingId = `dongha ${Date.now()}`;
    sampleData.soId = 'Lee';
    const result = await this.exDataRepo.save(sampleData);
    console.log('save testData');
    console.log(result);
    return 'set Okay Check your DB';
  }

  async toCSV(): Promise<any> {
    const fileName = `[Test Data]`;
    const fields = ['parkingId', 'soId', 'isActive'];

    const data = await this.exDataRepo.find();
    console.dir(data);
    data.forEach((element) => {
      console.log(element.parkingId);
    });
    const transforms = [unwind({ paths: ['fieldToUnwind'] })];
    const json2csvParser = new Parser({
      fields,
      transforms,
      withBOM: true,
      excelStrings: false,
    });
    const csvFile = json2csvParser.parse(data);
    console.log(csvFile);
    // fs.writeFileSync(`../../createdData/${fileName}.csv`, data.toString());
    fs.writeFile(`createdData/${fileName}.csv`, csvFile, function err(errs) {
      console.log(errs);
    });
    return 'check file';
  }
}
