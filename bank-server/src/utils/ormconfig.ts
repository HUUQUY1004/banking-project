import 'providers/polyfill.provider';

import { SnakeNamingStrategy } from 'utils/strategies';
import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import {
  UserAuthForgottenPasswordSubscriber,
  UserAuthSubscriber,
  UserSubscriber,
} from 'modules/user/subscribers';

// const configService = new ConfigService();


dotenv.config(); 

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  namingStrategy: new SnakeNamingStrategy(),
  entities: ['src/modules/**/*{.entity,.index}{.ts,.js}'],
  migrations: ['src/migrations/*{.ts,.js}'],
  migrationsRun: true,
  subscribers: [
    UserSubscriber,
    UserAuthSubscriber,
    UserAuthForgottenPasswordSubscriber,
  ],
  synchronize: false,
  logging: true,
};

export = config;
