import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Patch,
  Delete,
  Param,
  Logger,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  logger = new Logger('UserController');
  constructor(private userService: UserService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers(@GetUser() user: User) {
    return await this.userService.getUsers();
  }

  // @Post()
  // async addUser(@Body() payload: User): Promise<User> {
  //   const users = await this.userService.addUser(payload);
  //   return users;
  // }

  @Patch()
  async updateUser(@Body() payload: User): Promise<User[]> {
    const updatedUser = await this.userService.updateUser(payload);
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.remove(id);
  }
}
