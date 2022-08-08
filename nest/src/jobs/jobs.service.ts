import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Job, JobDto } from 'src/jobs/job.type';
import { MailService } from 'src/mail/mail.service';
import { JOBS_QUERY, JOB_BY_ID_QUERY } from './queries';
import { email, cities, keywords } from 'src/settings';


@Injectable()
export class JobsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mailService: MailService,
  ) {}

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

  filterJobs(job: Job): boolean {
    return (
      cities.indexOf(job.city.toLowerCase()) > -1 &&
      keywords.indexOf(job.title.toLowerCase()) > -1
    );
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
    if (this.filterJobs(job)) await this.mailService.sendNewJobEmail(email, job);
    return;
  }
}
