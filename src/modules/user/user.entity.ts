import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

console.log('getting to the entity');

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
