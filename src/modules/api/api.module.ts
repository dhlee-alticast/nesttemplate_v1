import { Module, HttpModule } from '@nestjs/common';

import { ApiService } from './api.service';
import { ShareModule } from '../../share/share.module';
import { ConfigService } from 'src/share/services/config.service';

const providers = [ApiService];
@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ShareModule],
      useFactory: async (config: ConfigService) => ({
        baseURL: config.get('BASEURL'),
        headers: config.get('HEADERS'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers,
  exports: [...providers],
})
export class ApiModule {}
