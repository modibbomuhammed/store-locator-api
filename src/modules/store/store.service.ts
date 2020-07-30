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
      storeLocation.location = [location];
      const store = await this.storeRepo.save(storeLocation);
      finalDetails.push(store);
    }

    // const that = this;
    // async function loadDetails() {
    //   storeDetails.forEach(async store => {
    //     const location = new Location();
    //     location.address_one = store.address_one;
    //     location.address_two = store.address_two;
    //     location.address_three = store.address_three;
    //     location.post_code = store.post_code;
    //     location.long = store.long;
    //     location.lat = store.lat;

    //     const newLocation = await that.locationService.saveLocation(location);
    //     // await this.locationRepo.save(location);

    //     const storeLocation = new Store();
    //     storeLocation.opening_time = store.opening_time;
    //     storeLocation.phone_number = store.phone_number;
    //     storeLocation.location = [location];
    //     await that.storeRepo.save(storeLocation);
    //     console.log(storeLocation, 'final');
    //   });
    console.log(finalDetails, 'please work');
    return finalDetails;
  }
}
