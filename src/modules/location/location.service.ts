import { Injectable } from '@nestjs/common';
import { LocationRepository } from './location.repo';
import { Location } from './location.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepo: Repository<Location>,
  ) {}

  async saveLocation(location) {
    return await this.locationRepo.save(location);
    // console.log(this.locationRepo, 'are you working');
  }
}
