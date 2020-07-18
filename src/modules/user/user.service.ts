import {
  Injectable,
  Logger,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcrypt';

// import { Hash } from 'crypto';

// export class User {
//   username: string;
//   password: string;
// }

@Injectable()
export class UserService {
  // constructor(private usersRepo: UserRepository) {}
  logger = new Logger('UserService');

  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    const users = await this.usersRepo.find();
    return users;
  }

  async addUser(user: any): Promise<User> {
    try {
      const { password } = user;
      const hashed = await hash(password, 10);
      let securedUser = { ...user, password: hashed };
      const newUser = await this.usersRepo.save(securedUser);
      return newUser;
    } catch (e) {
      if (e.code === '23505') {
        this.logger.log(e);
        throw new ConflictException(
          'Username Already Exists. Please pick another username.',
        );
      }
    }
  }

  async updateUser(user: User): Promise<User[]> {
    const { username, password, message } = user;
    const [found] = await this.findOne(username);
    const isMatching = await compare(password, found.password);
    if (isMatching) {
      found.message = message;
      await this.usersRepo.save(found);
    }
    return found;
  }

  async remove(id: string): Promise<any> {
    const found = await this.usersRepo.find({
      where: {
        id,
      },
    });
    await this.usersRepo.remove(found);
  }

  async findOne(username: string): Promise<any> {
    return await this.usersRepo.find({
      where: {
        username,
      },
    });
  }
}
