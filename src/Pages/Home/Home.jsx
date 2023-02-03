import React from 'react'
import './Home.css'
import Cards from '../../Components/Cards/Cards'
import Filters from '../../Components/Filters/Filters'
import Search from '../../Components/Search/Search'
import Pagination from '../../Components/Pagination/Pagination'
import Credits from '../../Components/Credits/Credits'
import Header from '../../Components/Header/Header'
import useFetchJobs from '../../Hooks/useFetchJobs'
import HomeSkeleton from '../../Components/Skeletons/HomeSkeleton/HomeSkeleton'

function Home() {

  const { isLoading } = useFetchJobs()

  if(isLoading) return <HomeSkeleton />

  return (
    <div className='Home'>
      <Header />
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