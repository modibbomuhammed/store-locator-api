import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

// export class User {
//   username: string;
//   password: string;
// }

@Injectable()
export class UserService {
  // private users: User[] = [
  //   {
  //     username: 'user1',
  //     password: 'password',
  //   },
  // ];
  constructor(private usersRepo: UserRepository) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepo.find();
  }

  async addUser(user: User) {
    // this.users.push(user);
    // return this.users;
    const newUser = await this.usersRepo.create(user);
    console.log(newUser, 'from userServe');
    return newUser;
  }
}
