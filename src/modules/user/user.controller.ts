import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post()
  async addUser(@Body() payload: User): Promise<User> {
    const users = await this.userService.addUser(payload);
    return users;
  }

  @Patch()
  async updateUser(@Body() payload: User): Promise<User[]> {
    const updatedUser = await this.userService.updateUser(payload);
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    console.log(id);
    await this.userService.remove(id);
  }
}
