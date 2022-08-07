import { Injectable } from '@nestjs/common';
import { Job, JobDto } from 'src/jobs/job.type';

@Injectable()
export class JobsService {
  async newJob(jobDto: JobDto): Promise<void> {
    const job = await this.getJob(jobDto.id);
    console.log({ job });
    return;
  }

    async getJob(id: number): Promise<Job> {
        return null;
  }
}
