import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { Repository } from 'typeorm';

// export class User {
//   username: string;
//   password: string;
// }

@Injectable()
export class UserService {
  // constructor(private usersRepo: UserRepository) {}

  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    const users = await this.usersRepo.find();
    return users;
  }

  async addUser(user: User) {
    const newUser = await this.usersRepo.save(user);
    return newUser;
  }
}
