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
    const value = e.target.value
    dispatch(setCurrentPage(value))
  }

  return (
    <div className='Pagination'>
      <div className='Pagination_divContent'>
        <button className='Pagination_Prev'>
          <img src={prev_icon} alt="" />
        </button>

        {
          pageNumbers.map((e, i) => {
            return (
              <div key={i} className="Pagination_divNumbers">
                <button 
                  value={e}
                  onClick={handleClick}
                  className={currentPage === e ? "Pagination_button active" : "Pagination_button"}
                >{e}</button>
              </div>
            )
          })
        }
        
        <button className='Pagination_Next'>
          <img src={next_icon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Pagination