import React from 'react'
import './Home.css'
import Cards from '../../Components/Cards/Cards'
import Filters from '../../Components/Filters/Filters'
import Search from '../../Components/Search/Search'

function Home() {
  return (
    <div className='Home'>
      <Search />
      <div className='Home_divMain'>
        <Filters />
        <Cards />
      </div>
    </div>
  )
}

export default Home