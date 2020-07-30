import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationService } from './location.service';
import { Location } from './location.entity';
import { LocationRepository } from './location.repo';

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationService],
  exports: [LocationService],
})
export class LocationModule {}
