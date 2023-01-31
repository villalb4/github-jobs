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


  // ---- Pagination ----
  const currentPage = useSelector(state => state.pagination.currentPage)
  const postPerPage = useSelector(state => state.pagination.postPerPage)
  const lastIndex = currentPage * postPerPage
  const firstIndex = lastIndex - postPerPage
  const currentJobs = jobs.slice(firstIndex, lastIndex)

  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(jobs.length / postPerPage); i ++) {
    pageNumbers.push(i)
  }

  // console.log(pageNumbers)
    

  return {currentJobs, isLoading, fetchJobs, pageNumbers, currentPage}
}

export default useFetchJobs
