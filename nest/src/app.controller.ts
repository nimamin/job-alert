import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { JobEventDto } from './job.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('jobs')
  PostJobs(@Body() { event: newJobEvent }: {event: JobEventDto}) {
    console.log( "New job event:", newJobEvent );

    return this.appService.newJob(newJobEvent);
  }

}
