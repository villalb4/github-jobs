import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../Store/slice/pagination'
import './Pagination.css'
import prev_icon from '../../Assets/icons/prev.svg'
import next_icon from '../../Assets/icons/next.svg'
import useFetchJobs from '../../Hooks/useFetchJobs'

function Pagination() {

  const dispatch = useDispatch()

  const { pageNumbers, currentPage } = useFetchJobs()

  const handleClick = (e) => {
    const value = e
    dispatch(setCurrentPage(value))
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNext = () => {
    if(currentPage < pageNumbers.length) {
      dispatch(setCurrentPage(currentPage + 1))
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const handlePrev = () => {
    if(currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1))
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className='Pagination'>
      <div className='Pagination_divContent'>
        <button className='Pagination_Prev' onClick={handlePrev}>
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
        
        <button className='Pagination_Next' onClick={handleNext}>
          <img src={next_icon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Pagination