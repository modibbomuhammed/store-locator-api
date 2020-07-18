import { Controller, Get, UseGuards } from '@nestjs/common';
import { StoreService } from './store.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Get()
  async getStores() {
    return await this.storeService.getAllStores();
  }
}
