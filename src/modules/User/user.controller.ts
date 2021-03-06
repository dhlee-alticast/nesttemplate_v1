import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  Res,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TranslationService } from 'src/share/services/translate.service';
import { UserService } from './user.service';
import { Request, Response } from 'express';
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly translateService: TranslationService,
  ) {}
  private readonly logger: Logger = new Logger(UserController.name, false);

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users list',
    type: String,
  })
  getHello(@Res() res: Response): Response {
    this.logger.debug('gethello');
    // return this.userService.getHello();
    // res.status(200);
    return res.send(this.userService.getHello());
  }

  @Get('/test')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users list',
    type: String,
  })
  getHellotest(@Res() res: Response): Response {
    this.logger.debug('gethello');
    // return this.userService.getHello();
    // res.status(200);
    return res.send(this.userService.getHello());
  }

  @Get('/i18n')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users i18n',
    type: String,
  })
  getI18N(): string {
    const transdata = this.translateService.translate('user.firstName', {
      lang: 'en',
    });
    this.logger.log(`i18n   ${transdata}`);
    return this.userService.getHello();
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully Registered',
  })
  setDB(): Promise<string> {
    //DB 저장 후 확인

    return this.userService.setDB();
  }

  @Post('/useAPI')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully Registered',
  })
  getapiCall(): Promise<string> {
    return this.userService.getapiCall();
  }
}
