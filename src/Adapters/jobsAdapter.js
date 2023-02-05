import jobTypeUtil from "../Utils/jobTypeUtil"
import locationUtil from "../Utils/locationUtil"
import dateUtil from "../Utils/dateUtil"

const jobsAdapter = (data) => {
  const adapting = data.jobs.map(e => {
    return {
      id: e.id,
      location: locationUtil(e.candidate_required_location),
      company_logo: e.company_logo,
      company_name: e.company_name,
      description: e.description,
      job_type: jobTypeUtil(e.job_type),
      title: e.title,
      date: dateUtil(e.publication_date),
    }
  })
  return adapting
}

export default jobsAdapter