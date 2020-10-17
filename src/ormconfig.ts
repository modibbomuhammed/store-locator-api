import { ConnectionOptions } from 'typeorm';
import * as config from 'config';

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.HOST || 'localhost',
  port: 5432,
  username: process.env.USERNAME || config.dbConfig.USERNAME,
  password: process.env.PASSWORD || 'password',
  database: process.env.DATABASE || 'store-locator-db',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // entities: ['dist/**/**.entity{.ts,.js}'],
  migrationsRun: false,
  logging: true,
  logger: 'file',
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },
};

export = ormConfig;
