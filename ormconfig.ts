// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

//export const ormConfig: TypeOrmModuleOptions = {
//  const ormConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'password',
//   database: 'storelocatorapi',
//   // entities: ['dist/**/*.entity{.ts,.js}'],
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   migrations: [__dirname + '/migration/**/*.js'],
//   synchronize: false,
//   cli: {
//     migrationsDir: 'src/migrations',
//   },
// };

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'store-locator-db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  //entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },
};

console.log(ormConfig, 'checking');

// export ormConfig
