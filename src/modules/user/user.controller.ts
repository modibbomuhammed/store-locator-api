import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post()
  async addUser(@Body() payload: User): Promise<any[]> {
    const users = await this.userService.addUser(payload);
    // await this.userService.addUser(payload);
    console.log(users);
    return;
  }
}
