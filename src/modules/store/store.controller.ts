import {
  Controller,
  Get,
  UseGuards,
  Post,
  UseInterceptors,
  BadRequestException,
  UploadedFile,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Store } from './store.entity';

@UseGuards(JwtAuthGuard)
@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Get()
  async getStores(): Promise<Store[]> {
    return await this.storeService.getAllStores();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './',
        filename: (req, file, cb) => {
          return cb(null, file.originalname);
        },
      }),
      fileFilter: (req, file, cb) => {
        const ext = extname(file.originalname);

        if (ext !== '.txt') {
          return cb(
            new BadRequestException('File Extension is not allowed'),
            false,
          );
        }

        return cb(null, true);
      },
    }),
  )
  async createStore(@UploadedFile() file) {
    if (!file || file.size === 0) {
      throw new BadRequestException('Missing Required Parameter');
    }
    return await this.storeService.createStores(file.originalname);
  }
}
