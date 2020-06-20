import { Injectable } from '@nestjs/common';

export class User {
  username: string;
  password: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    {
      username: 'user1',
      password: 'password',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
    return this.users;
  }
}
