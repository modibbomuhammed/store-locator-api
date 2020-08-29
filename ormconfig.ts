import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'storelocatorapi',
  entities: ['dist/**/*.entity{.ts,.js}'],
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
};
