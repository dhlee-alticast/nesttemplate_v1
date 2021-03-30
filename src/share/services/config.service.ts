import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import dotenv from 'dotenv';
@Injectable()
export class ConfigService implements TypeOrmOptionsFactory {
  // [x: string]: any;
  constructor() {
    const nodeEnv = this.nodeEnv;
    dotenv.config({
      path: `.${nodeEnv}.env`,
      // path: `.env`,
    });

    // Replace \\n with \n to support multiline strings in AWS
    for (const envName of Object.keys(process.env)) {
      process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
    }
  }
  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  public get(key: string): string {
    return process.env[key];
  }

  public getNumber(key: string): number {
    return Number(this.get(key));
  }

  get nodeEnv(): string {
    return this.get('NODE_ENV') || 'development';
  }
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      //   type: 'mongodb',
      //   url: 'mongodb://chnirt:chin04071803@ds055690.mlab.com:55690/nest-graphql',
      //   entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      //   // entities: [User],
      //   // entities: [__dirname + '/**/*.entity.ts'],
      //   synchronize: true,
      //   useNewUrlParser: true,
      //   logging: true,
      /////////////
      // type: 'mongodb',
      // host: 'localhost',
      // port: 27017,
      // database: 'test',
      type:
        this.get('DB_TYPE') === 'mongodb'
          ? 'mongodb'
          : this.get('DB_TYPE') === 'postgres'
          ? 'postgres'
          : 'mysql',
      host: this.get('DB_HOST'),
      port: parseInt(this.get('DB_PORT')),
      database: this.get('DB_DATABASE'),
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
    };
  }
}
