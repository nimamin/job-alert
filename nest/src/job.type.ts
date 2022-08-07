export interface JobDto {
  company_id: number;
  city: string;
  id: number;
  title: string;
}
export interface CompanyInvestors {
  investor: { name: string }
}
export interface Company {
  name: string;
  company_investors: Array<CompanyInvestors>;
}
export interface Job {
  company: Company;
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
