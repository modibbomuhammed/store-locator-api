import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthCredentialsDto } from './Dto/auth-credentials.dto';
import { User } from '../user';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    // const { username, password } = payload;
    // const user = await this.authService.validateUser(username, password);
    return this.authService.login(req.user);
  }

  @Post('register')
  async signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return await this.authService.register(authCredentialsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
