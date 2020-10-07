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
  password: string;
}
