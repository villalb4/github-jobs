import React from 'react'
import './Search.css'
import searchBg from '../../Assets/backgroundSearch.jpg'
import work_icon from '../../Assets/icons/work.svg'

function Search() {
  return (
    <div className='Search'>
      <div className='Search_content' style={{backgroundImage: `url(${searchBg})`}}>
        <form className='Search_searcher'>
          <div className='Search_divInput'>
            <img src={work_icon} alt="" />
            <input type="text" placeholder='Title, companies, expertise or benefits' />
          </div>
          <div className='Search_divButton'>
            <input type="submit" value="Search"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search