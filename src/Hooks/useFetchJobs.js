import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../Store/thunks/jobsFetchThunk";
import usePagination from "../Hooks/usePagination"

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


  // ---- Pagination ----
  const { currentJobs, pageNumbers, currentPage } = usePagination(jobs)

  return {currentJobs, isLoading, fetchJobs, pageNumbers, currentPage}
}

export default useFetchJobs
