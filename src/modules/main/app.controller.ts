import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { resolve, join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get()
  // getHello(@Res() response): void {
  //   console.log(
  //     join(__dirname, '../../..', 'client/build', 'index.html'),
  //     'ash',
  //   );
  //   response.sendFile(
  //     resolve(join(__dirname, '../../..', 'client/build', 'index.html')),
  //   );
  // }
}
