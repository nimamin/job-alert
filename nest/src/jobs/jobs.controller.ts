import { Body, Controller, Post } from '@nestjs/common';
import { JobEventDto } from './job.type';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) { }
    
  @Post()
  PostJobs(@Body() { event: newJobEvent }: { event: JobEventDto }) {
    console.log('New job event:', newJobEvent);

    return this.jobsService.newJob(newJobEvent.data.new);
  }
}
