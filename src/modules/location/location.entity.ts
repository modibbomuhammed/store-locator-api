import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
// import { IsString, IsNotEmpty, MinLength } from 'class-validator';

@Entity({ name: 'location' })
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address_one: string;

  @Column()
  address_two: string;

  @Column()
  address_three: string;

  @Column()
  post_code: string;

  @Column()
  long: string;

  @Column()
  lat: string;
}
