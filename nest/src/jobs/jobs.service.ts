import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Job, JobDto } from 'src/jobs/job.type';
import { JOBS_QUERY, JOB_BY_ID_QUERY } from './queries';


@Injectable()
export class JobsService {
  constructor(private readonly httpService: HttpService) {}

  async sendQuery<T>(query: string, variables): Promise<T> {
    return await this.httpService.axiosRef.request({
      url: 'http://graphql-engine:8080/v1/graphql',
      method: 'post',
      headers: { 'content-type': 'application/json' },
      data: {
        query,
        variables,
      },
    });
  }

  async findAll(): Promise<Job[]> {
    const res = await this.sendQuery<any>(JOBS_QUERY, {});
    return res.data.data.jobs;
  }

  async findOne(id: number): Promise<Job> {
    const res = await this.sendQuery<any>(JOB_BY_ID_QUERY, { id });
    return res.data.data.jobs_by_pk;
  }

  async newJob(jobDto: JobDto): Promise<void> {
    const job = await this.findOne(jobDto.id);
    console.log({ job });
    return;
  }
}
