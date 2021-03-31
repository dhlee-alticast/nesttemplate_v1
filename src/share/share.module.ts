import { Global, Module } from '@nestjs/common';

import { ConfigService } from './services/config.service';
import { TranslationService } from './services/translate.service';

//config에서 사용되는 provider 리스트
const providers = [ConfigService, TranslationService];

@Global()
@Module({
  providers,
  imports: [],
  exports: [...providers],
})
export class ShareModule {}
