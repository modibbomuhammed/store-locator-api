import { Injectable, Get } from '@nestjs/common';
import { Store } from './store.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as readline from 'readline';
import { Location } from '../location/location.entity';
import { LocationService } from '../location/location.service';
import { PostCodeService } from '../post-code/post-code.service';
// import { LocationRepository } from '../location/location.repo';
// import { StoreRepository } from './store.repo';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepo: Repository<Store>,
    private locationService: LocationService,
    private postcodeService: PostCodeService,
  ) {}

  async getAllStores(): Promise<Store[]> {
    return await this.storeRepo.find();
  }

  async getClosestStore(postCode) {
    const coodinates = await this.postcodeService
      .getCoordinates(postCode)
      .toPromise();

    const { latitude: lat1, longitude: lon1 } = coodinates.data.result;

    let distances: Store[] = await this.getAllStores();

    let newDistances = distances.map(val => {
      return {
        ...val,
        distance: calcDist(lat1, lon1, val.location.lat, val.location.long),
      };
    });

    newDistances.sort((a, b) => a.distance - b.distance);

    return newDistances;
    function calcDist(lat1, lon1, lat2, lon2) {
      let R = 3959;
      let dLat = toRad(lat2 - lat1);
      let dLon = toRad(lon2 - lon1);
      let latitude1 = toRad(lat1);
      let latitude2 = toRad(lat2);
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(latitude1) *
          Math.cos(latitude2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c;
      return Math.abs(d);
    }
    // Converts numeric degrees to radians
    function toRad(Value) {
      return (Value * Math.PI) / 180;
    }
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
          lat,
          long,
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
