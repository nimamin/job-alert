import { Injectable } from '@nestjs/common';
import { JobEventDto } from './job-event.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  newJob(newJobEvent: JobEventDto): void {
    return;
  }
}
