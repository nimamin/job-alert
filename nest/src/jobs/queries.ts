export const JOBS_QUERY = `query { jobs { id title city } }`;
export const JOB_BY_ID_QUERY = `
query($id: Int!) { 
    jobs_by_pk(id: $id) { 
        id 
        title 
        city 
        company {
        name
        id
        company_investors {
            investor {
            id
            name
            }
        }
        }
    }
}
`;