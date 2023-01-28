import React from 'react'
import { useGetJobsQuery } from '../../Store/apis/jobs'
import './Cards.css'
import planet from '../../Assets/icons/planet.svg'
import clock from '../../Assets/icons/clock.svg'

function Cards() {

  const { data, isLoading } = useGetJobsQuery()

  return (
    <div className='Cards'>
      {
        isLoading === true ?
          null :

          data.jobs.map((e, i) => {
            return (
              <div className='Cards_card' key={i}>
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
                      <span>{e.candidate_required_location}</span>
                    </div>
                    <div className='Cards_cardDivDate'>
                      <img src={clock} alt="" />
                      <span>{e.publication_date}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
      }
    </div>
  )
}

export default Cards