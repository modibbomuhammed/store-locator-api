import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user';
// import { ormConfig } from '../../../ormconfig';
import * as ormConfig from '../../../ormconfig';
import { AuthModule } from '../auth/auth.module';
import { StoreModule } from '../store/store.module';
import { LocationModule } from '../location/location.module';
import { PostCodeModule } from '../post-code/post-code.module';
// import { User } from '../user/user.entity';

// @Module({
//   imports: [
//     UserModule,
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: '00ASHSecret*',
//       database: 'postgres',
//       entities: [User],
//       synchronize: true,
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

@Module({
  imports: [
    UserModule,
    AuthModule,
    StoreModule,
    LocationModule,
    TypeOrmModule.forRoot(ormConfig),
    PostCodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
