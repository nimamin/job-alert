export interface Job {
  company_id: number;
  city: string;
  id: number;
  title: string;
}

export interface JobEventDto {
    op: string;
    data: {
        old: Job | null;
        new: Job;
    }
}
