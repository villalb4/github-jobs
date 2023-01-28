import React from 'react'
import Filters from '../../Components/Filters/Filters'
import Search from '../../Components/Search/Search'

function Home() {
  return (
    <div>
      <Search />
      <section>
        <Filters />
      </section>
    </div>
  )
}

export default Home