import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Job, JobEventDto } from './job.type';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async getAllJobs(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<any> {
    return this.jobsService.findOne(params.id);
  }

  @Post()
  PostJobs(@Body() { event: newJobEvent }: { event: JobEventDto }) {
    console.log('New job event:', newJobEvent);

    return this.jobsService.newJob(newJobEvent.data.new);
  }
}
