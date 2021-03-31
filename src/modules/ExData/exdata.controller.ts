import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { string } from 'joi';
import { ExDataService } from './exdata.service';

@Controller('exdata')
@ApiTags('exdata')
export class ExDataController {
  constructor(private readonly EeDataService: ExDataService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users list',
    type: String,
  })
  getHello(): string {
    return this.EeDataService.getHello();
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  setDB(): Promise<string> {
    //DB 저장 후 확인

    return this.EeDataService.setDB();
  }

  @Post('/tocsv')
  @HttpCode(HttpStatus.OK)
  toCSV(): Promise<string> {
    //csv 파일 생성
    return this.EeDataService.toCSV();
  }
}
