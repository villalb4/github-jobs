import React from 'react'
import './Cards.css'
import planet from '../../Assets/icons/planet.svg'
import clock from '../../Assets/icons/clock.svg'
import useFetchJobs from '../../Hooks/useFetchJobs'
import { Link } from 'react-router-dom'

function Cards() {
  
  const { currentJobs } = useFetchJobs()

  return (
    <div className='Cards'>
      {
        currentJobs.map((e, i) => {
          return (
            <Link to={`/job/${e.id}`} className='Cards_card' key={i}>
              <div className='Cards_cardDivLogo'>
                <img src={e.company_logo} alt="company logo" />
              </div>
              <div className='Cards_cardDivInfo'>
                <div className='Cards_cardInfo'>
                  <span className='Cards_cardCompanyName'>{e.company_name}</span>
                  <span className='Cards_cardJobTitle'>{e.title}</span>
                  <div>
                    <div className='Cards_cardDivJobType'>
                      <span>{e.job_type}</span>
                    </div>
                  </div>
                </div>
                <div className='Cards_cardDateLocation'>
                  <div className='Cards_cardDivLocation'>
                    <img src={planet} alt="" />
                    <span>{e.location}</span>
                  </div>
                  <div className='Cards_cardDivDate'>
                    <img src={clock} alt="" />
                    <span>{e.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Cards