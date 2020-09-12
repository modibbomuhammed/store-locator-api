import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  // host: 'localhost',
  host: 'ec2-3-95-87-221.compute-1.amazonaws.com',
  port: 5432,
  // username: 'postgres',
  username: 'swasbiogklieiq',
  // password: 'password',
  password: 'd531aabb5994ea6f62dcbb0a8363ae65398f243fd6297f48501c8ea3b4a450d7',
  // database: 'store-locator-db',
  database: 'deh4rs2p5430tk',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
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
