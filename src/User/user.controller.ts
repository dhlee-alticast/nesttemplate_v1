import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('/')
  setDB(): string {
    //DB 저장 후 확인

    return this.userService.setDB();
  }
}
