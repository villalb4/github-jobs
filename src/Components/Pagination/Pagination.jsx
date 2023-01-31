import React from 'react'
import './Pagination.css'
import prev_icon from '../../Assets/icons/prev.svg'
import next_icon from '../../Assets/icons/next.svg'
import useFetchJobs from '../../Hooks/useFetchJobs'

function Pagination() {

  // https://www.youtube.com/watch?v=wAGIOCqS8tk  minute: 5:53
  // https://www.youtube.com/watch?v=GmWUYZ2xovI aprox minute: 10:00

  const { pageNumbers, currentPage } = useFetchJobs()

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
                <button className={currentPage === e ? "Pagination_buttonActive" : "Pagination_button"}>{e}</button>
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