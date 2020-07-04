import { Module } from '@nestjs/common';
import { UserController } from './user.Controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([UserRepository])],
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
