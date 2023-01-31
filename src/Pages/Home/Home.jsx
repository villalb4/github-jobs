import React from 'react'
import './Home.css'
import Cards from '../../Components/Cards/Cards'
import Filters from '../../Components/Filters/Filters'
import Search from '../../Components/Search/Search'
import Pagination from '../../Components/Pagination/Pagination'
import Credits from '../../Components/Credits/Credits'

function Home() {
  return (
    <div className='Home'>
      <Search />
      <div className='Home_divMain'>
        <Filters />
        <Cards />
      </div>
      <div className='Home_divPagination'>
        <Pagination />
      </div>
      <Credits />
    </div>
  )
}

export default Home