import { Controller, Get, Post } from '@nestjs/common';
// import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'this.appService.getHello()';
  }

  @Post()
  setDB(): string {
    //DB 저장 후 확인
    return 'ok';
  }
}
