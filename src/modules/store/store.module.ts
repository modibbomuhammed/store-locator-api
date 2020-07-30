import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './store.entity';
import { LocationRepository } from '../location/location.repo';
import { LocationModule } from '../location/location.module';

@Module({
  imports: [TypeOrmModule.forFeature([Store]), LocationModule],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
