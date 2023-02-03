import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Credits from '../../Components/Credits/Credits'
import Header from '../../Components/Header/Header'
import Apply from '../../Components/Apply/Apply'
import useFetchJobs from '../../Hooks/useFetchJobs'
import './Details.css'

function Details() {
  const { jobId } = useParams()
  const { jobDetail, isLoading } = useFetchJobs(jobId)

  // console.log(jobDetail)

  useEffect(()=> {
    window.scrollTo(0,0)
  },[])

  if(isLoading) return <div>.Cargando...</div>

  return (
    <div className='Details'>
      <Header />
      <div className='Details_applyDescription'>
        <div>
          <div className='Details_divBack'>
            <span className='Details_backToSearch'>Back to search</span>
          </div>
          <Apply />
        </div>
        <section className='Details_section'>
          <h2>{jobDetail.title}</h2>
          <span>{jobDetail.date}</span>
          <div>
            <div>
              <img src={jobDetail.company_logo} alt="logo" />
            </div>
            <div>
              <span>{jobDetail.company_name}</span>
              <span>{jobDetail.locaiton}</span>
            </div>
          </div>
          <div>
            <p>{jobDetail.description}</p>
          </div>
        </section>
      </div>
      <Credits />
    </div>
  )
}

export default Details