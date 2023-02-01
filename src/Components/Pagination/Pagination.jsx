import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../Store/slice/pagination'
import './Pagination.css'
import prev_icon from '../../Assets/icons/prev.svg'
import next_icon from '../../Assets/icons/next.svg'
import usePagination from '../../Hooks/useFetchJobs'

function Pagination() {

  const dispatch = useDispatch()

  const { pageNumbers, currentPage } = usePagination()

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleClick = (e) => {
    const value = e
    dispatch(setCurrentPage(value))
    handleScroll()
  }

  const handleMove = (direction) => {
    dispatch(setCurrentPage(
      direction === 'next' ?
      (currentPage < pageNumbers.length ? currentPage + 1 : currentPage) :
      (currentPage > 1 ? currentPage - 1 : currentPage)
    ))
    handleScroll()
  } 

  return (
    <div className='Pagination'>
      <div className='Pagination_divContent'>
        <button className='Pagination_Prev' onClick={() => handleMove("prev")}>
          <img src={prev_icon} alt="" />
        </button>

        {
          pageNumbers.map((e, i) => {
            return (
              <div key={i} className="Pagination_divNumbers">
                <button 
                  onClick={() => handleClick(e)}
                  className={currentPage === e ? "Pagination_button active" : "Pagination_button"}
                >{e}</button>
              </div>
            )
          })
        }
        
        <button className='Pagination_Next' onClick={() => handleMove("next")}>
          <img src={next_icon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Pagination