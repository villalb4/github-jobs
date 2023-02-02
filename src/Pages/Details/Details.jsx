import React from 'react'
import { useParams } from 'react-router-dom'
import Credits from '../../Components/Credits/Credits'
import useFetchJobs from '../../Hooks/useFetchJobs'

function Details() {
  const { jobId } = useParams()
  const { jobDetail } = useFetchJobs(jobId)

  console.log(jobDetail)

  return (
    <div>
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
      <Credits />
    </div>
  )
}

export default Details