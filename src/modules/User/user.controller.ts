import { Controller, Get, Logger, Post } from '@nestjs/common';
import { TranslationService } from 'src/share/services/translate.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly translateService: TranslationService,
  ) {}
  private readonly logger: Logger = new Logger(UserController.name, false);

  @Get('/')
  getHello(): string {
    this.logger.debug('gethello');
    return this.userService.getHello();
  }

  @Get('/i18n')
  getI18N(): string {
    const transdata = this.translateService.translate('user.firstName', {
      lang: 'en',
    });
    this.logger.log(`i18n   ${transdata}`);
    return this.userService.getHello();
  }

  @Post('/')
  setDB(): Promise<string> {
    //DB 저장 후 확인

    return this.userService.setDB();
  }

  @Post('/useAPI')
  getapiCall(): Promise<string> {
    return this.userService.getapiCall();
  }
}
