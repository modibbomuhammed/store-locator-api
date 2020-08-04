import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class PostCodeService {
  constructor(private httpService: HttpService) {}

  getCoordinates(postcode) {
    return this.httpService.get(
      `https://api.postcodes.io/postcodes/${postcode}`,
    );
  }
}
