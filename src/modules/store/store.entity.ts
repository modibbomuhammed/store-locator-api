import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Location } from '../location/location.entity';

@Entity({ name: 'store' })
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(type => Location)
  @JoinTable()
  location: Location;

  @Column()
  opening_time: string;

  @Column()
  phone_number: string;
}
