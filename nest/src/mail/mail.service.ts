import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Job } from 'src/jobs/job.type';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }
    
    async sendNewJobEmail(email: string, job: Job) {
        await this.mailerService.sendMail({
          to: email,
          // from: '"Support Team" <support@example.com>', // override default from
          subject: `New Job (${job.title}) in ${job.city}`,
          template: './new-job', 
          context: {
            job
          },
        });
    }
}
