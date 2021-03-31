import { HttpService, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ApiService {
  constructor(private readonly http: HttpService) {}
  private readonly logger: Logger = new Logger('apiService', false);

  async getCallexdata(): Promise<string> {
    let datas = '';
    const res2 = await this.http.get('/exdata').toPromise();
    this.logger.log(`Get res2 ${res2.data}`);
    return res2.data ?? datas;
  }
}
