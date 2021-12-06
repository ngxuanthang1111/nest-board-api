import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  //  Database Type
  type: process.env.TYPE || dbConfig.type,
  host: process.env.HOST || dbConfig.host,
  port: process.env.PORT_POSTGRES || dbConfig.port,
  username: process.env.USERNAME || dbConfig.username,
  password: process.env.PASSWORD || dbConfig.password,
  database: process.env.DATABASE || dbConfig.database,
  // Entities to be loaded for this connection
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: dbConfig.synchronize,
};
