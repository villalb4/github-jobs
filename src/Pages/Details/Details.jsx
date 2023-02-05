import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Credits from '../../Components/Credits/Credits'
import Header from '../../Components/Header/Header'
import Apply from '../../Components/Apply/Apply'
import useFetchJobs from '../../Hooks/useFetchJobs'
import './Details.css'
import back_icon from '../../Assets/icons/back.svg'
import planet_icon from '../../Assets/icons/planet.svg'
import clock_icon from '../../Assets/icons/clock.svg'

function Details() {
  const { jobId } = useParams()
  const { jobDetail, isLoading } = useFetchJobs(jobId)

  useEffect(()=> {
    window.scrollTo(0,0)
  },[])

  if(isLoading) return <div>.Cargando...</div>

  return (
    <div className='Details'>
      <Header />
      <div className='Details_applyDescription'>
        <div>
          <div onClick={() => window.history.back()} className='Details_divBack'>
            <img src={back_icon} alt="" />
            <span className='Details_backToSearch'>Back to search</span>
          </div>
          <Apply />
        </div>
        <section className='Details_section'>
          <div className='Details_divTitleType'>
            <h2 className='Deatils_jobTitle'>{jobDetail.title}</h2>
            <div className='Details_divJobType'>
              <span>{jobDetail.job_type}</span>
            </div>
          </div>
          <div className='Details_divDate'>
            <img src={clock_icon} alt="" />
            <span>{jobDetail.date}</span>
          </div>
          <div className='Details_divCompanyInfo'>
            <div className='Details_divImage'>
              <img src={jobDetail.company_logo} alt={`${jobDetail.company_name} logo`} />
            </div>
            <div className='Details_divNameLocation'>
              <span>{jobDetail.company_name}</span>
              <div>
                <img src={planet_icon} alt="" />
                <span>{jobDetail.location}</span>
              </div>
            </div>
          </div>
          <div className='Details_divDescription'>
            <p dangerouslySetInnerHTML={{__html: jobDetail.description}}></p>
          </div>
        </section>
      </div>
      <Credits />
    </div>
  )
}

export default Details