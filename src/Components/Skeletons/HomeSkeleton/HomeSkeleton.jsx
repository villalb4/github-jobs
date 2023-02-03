import React from 'react'
import './HomeSkeleton.css'

function HomeSkeleton() {
  return (
    <div className='Skeleton'>
      <div className='Skeleton_header'>
        <div className='Skeleton_logo'></div>
      </div>
      <div className='Skeleton_search'></div>
      <div className='Skeleton_divFilterData'>
        <div className='Skeleton_filters'></div>
        <div className='Skeleton_data'></div>
      </div>
      <div className='Skeleton_pagination'></div>
    </div>
  )
}

export default HomeSkeleton