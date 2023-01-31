import { setJobs, startLoadingJobs } from "../slice/jobs"
import jobsAdapter from '../../Adapters/jobsAdapter'

export const getJobs = () => {
  return async( dispatch, getState ) => {
    dispatch(startLoadingJobs())
    const response = await fetch('https://remotive.com/api/remote-jobs?category=software-dev&limit=100')
    const data = await response.json()

    const dataFiltered = jobsAdapter(data)
   
    dispatch(setJobs(dataFiltered))
  }
}