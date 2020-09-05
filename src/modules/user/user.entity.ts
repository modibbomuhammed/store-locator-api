import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
// import { IsString, IsNotEmpty, MinLength } from 'class-validator';

@Entity({ name: 'user' })
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  message: string;
}
