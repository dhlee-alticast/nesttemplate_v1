import { Global, Module } from '@nestjs/common';

import { DataBaseService } from './shareService/database.service';

//config에서 사용되는 provider 리스트
const providers = [DataBaseService];

@Global()
@Module({
  providers,
  imports: [],
  exports: [...providers],
})
export class ConfigModule {}
