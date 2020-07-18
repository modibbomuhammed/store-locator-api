import { Injectable } from '@nestjs/common';
import { UserService, User } from '../user';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './Dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const [user] = await this.userService.findOne(username);
    try {
      const isMatchingPassword = await compare(pass, user.password);
      if (user && isMatchingPassword) {
        const { password, ...result } = user;
        return result;
      }
    } catch (e) {
      return null;
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return this.userService.addUser(authCredentialsDto);
  }
}
