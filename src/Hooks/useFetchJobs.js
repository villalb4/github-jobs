import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../Store/thunks/jobsFetchThunk";
import usePagination from "../Hooks/usePagination"

const useFetchJobs = (jobId) => {
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.jobs.allJobs)
  const isLoading = useSelector(state => state.jobs.isLoading)
  const fetchJobs =   useCallback(() => dispatch(getJobs()),[dispatch])

  useEffect(() => {
    if(isLoading) {
      fetchJobs();
    }
  }, [fetchJobs, isLoading]);

  const { currentJobs, pageNumbers, currentPage } = usePagination(jobs)

  const jobDetail = jobs.find(e => e.id === Number(jobId))

  return {currentJobs, isLoading, fetchJobs, pageNumbers, currentPage, jobDetail}
}

export default useFetchJobs
