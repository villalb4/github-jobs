import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../Store/thunks/jobsFetchThunk";

const useFetchJobs = () => {
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.jobs.allJobs)
  const isLoading = useSelector(state => state.jobs.isLoading)

  const fetchJobs =   useCallback(() => dispatch(getJobs()),[dispatch])

  useEffect(() => {
    if(isLoading) {
      fetchJobs();
    }
  }, [fetchJobs, isLoading]);

  return {jobs, isLoading, fetchJobs}
}

export default useFetchJobs
