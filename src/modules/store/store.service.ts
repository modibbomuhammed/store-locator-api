import { Injectable, Get } from '@nestjs/common';
import { Store } from './store.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as readline from 'readline';
import { Location } from '../location/location.entity';
import { LocationService } from '../location/location.service';
// import { LocationRepository } from '../location/location.repo';
// import { StoreRepository } from './store.repo';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepo: Repository<Store>,
    private locationService: LocationService,
  ) {}

  async getAllStores(): Promise<Store[]> {
    return await this.storeRepo.find();
  }

  async createStores(file: string) {
    const storeDetails = [];
    async function processLineByLine() {
      const rl = readline.createInterface({
        input: fs.createReadStream(file),
        terminal: false,
      });

      for await (const line of rl) {
        const [
          ,
          name,
          ,
          ,
          ,
          address_one,
          address_two,
          address_three,
          post_code,
          opening_time,
          ,
          phone_number,
          long,
          lat,
        ] = line.split('|');
        storeDetails.push({
          name,
          address_one,
          address_two,
          address_three,
          post_code,
          opening_time,
          phone_number,
          long,
          lat,
        });
      }
    }
    await processLineByLine();

    const finalDetails = [];
    for (let storeLoc of storeDetails) {
      const location = new Location();
      location.address_one = storeLoc.address_one;
      location.address_two = storeLoc.address_two;
      location.address_three = storeLoc.address_three;
      location.post_code = storeLoc.post_code;
      location.long = storeLoc.long;
      location.lat = storeLoc.lat;

      const newLocation = await this.locationService.saveLocation(location);

      const storeLocation = new Store();
      storeLocation.opening_time = storeLoc.opening_time;
      storeLocation.phone_number = storeLoc.phone_number;
      storeLocation.location = newLocation;
      const store = await this.storeRepo.save(storeLocation);
      finalDetails.push(store);
    }
    return finalDetails;
  }
}
