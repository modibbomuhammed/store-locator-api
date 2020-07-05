import { Injectable } from '@nestjs/common';
import { UserService } from '../user';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

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
}
