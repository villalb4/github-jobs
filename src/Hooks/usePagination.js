import { useSelector } from "react-redux";

const usePagination = (jobs) => {
  const currentPage = Number(useSelector(state => state.pagination.currentPage))
  const postPerPage = useSelector(state => state.pagination.postPerPage)
  const lastIndex = currentPage * postPerPage
  const firstIndex = lastIndex - postPerPage
  const currentJobs = jobs.slice(firstIndex, lastIndex)

  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(jobs.length / postPerPage); i ++) {
    pageNumbers.push(i)
  }

  return {currentPage, currentJobs, pageNumbers}
}

export default usePagination
