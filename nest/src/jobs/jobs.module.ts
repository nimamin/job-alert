import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { HttpModule } from '@nestjs/axios';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [HttpModule, MailModule],
  providers: [JobsService],
  controllers: [JobsController],
})
export class JobsModule {}
