import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './store.entity';
import { LocationRepository } from '../location/location.repo';
import { LocationModule } from '../location/location.module';
import { PostCodeModule } from '../post-code/post-code.module';

@Module({
  imports: [TypeOrmModule.forFeature([Store]), LocationModule, PostCodeModule],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
