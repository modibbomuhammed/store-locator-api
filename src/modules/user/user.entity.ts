import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

@Entity({ name: 'user' })
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @Column()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @Column()
  password: string;
}
