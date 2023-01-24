import React from 'react'
import './Search.css'
import searchBg from '../../Assets/backgroundImg.png'

function Search() {
  return (
    <div className='Search'>
      <div className='Search_content' style={{backgroundImage: `url(${searchBg})`}}>
        <form className='Search_searcher'>
          <div className='Search_divInput'>
            <img src="" alt="" />
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