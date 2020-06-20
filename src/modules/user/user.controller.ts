import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userServer: UserService) {}

  @Get()
  getUsers() {
    return this.userServer.getUsers();
  }

  @Post()
  addUser(@Body() payload: User): User[] {
    const users = this.userServer.addUser(payload);
    return users;
  }
}
