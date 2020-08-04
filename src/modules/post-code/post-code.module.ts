import { Module, HttpModule } from '@nestjs/common';
import { PostCodeService } from './post-code.service';

@Module({
  imports: [HttpModule],
  providers: [PostCodeService],
  exports: [PostCodeService],
})
export class PostCodeModule {}
