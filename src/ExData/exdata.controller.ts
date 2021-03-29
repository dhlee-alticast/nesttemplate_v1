import { Controller, Get, Post } from '@nestjs/common';
import { ExDataService } from './exdata.service';

@Controller('exdata')
export class ExDataController {
  constructor(private readonly EeDataService: ExDataService) {}

  @Get('/')
  getHello(): string {
    return this.EeDataService.getHello();
  }

  @Post('/')
  setDB(): Promise<string> {
    //DB 저장 후 확인

    return this.EeDataService.setDB();
  }
}
