import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Location } from '../location/location.entity';

@Entity({ name: 'store' })
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => Location, { eager: true })
  @JoinTable()
  location: Location;

  @Column()
  opening_time: string;

  @Column()
  phone_number: string;
}
