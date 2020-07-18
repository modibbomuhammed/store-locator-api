import { Injectable, Get } from '@nestjs/common';
import { Store } from './store.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepo: Repository<Store>,
  ) {}

  async getAllStores(): Promise<Store[]> {
    return await this.storeRepo.find();
  }
}
