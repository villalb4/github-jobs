import { useState } from 'react'
import './Filters.css'
import planet from '../../Assets/icons/planet.svg'

function Filters() {

  const data = [
    {location: "USA"},
    {location: "UK"},
    {location: "LATAM"},
    {location: "Worldwide"},
  ]

  const [fullTime, setFulltime] = useState(false)

  const handleFullTime = () => {
    setFulltime(e => !e)
    // console.log(fullTime)
  }
  
  const handleLocation = (e) => {
    // console.log(e.target.value)
  }

  return (
    <div className='Filters'>
      {/* --- Full time filter --- */}
      <div className='Filters_divFullTime'>
        <input type="checkbox" name="full_time" value={fullTime} onClick={handleFullTime}/>
        <label htmlFor="full_time">Full time</label>
      </div>
      {/* --- Location filter --- */}
      <div className='Filters_divLocation'>
        <h2>LOCATION</h2>
        <div>
          <img src={planet} alt="" />
          <input type="text" placeholder='City, state, zip, code our country'/>
        </div>
      </div>
      {/* --- Citys filter --- */}
      <div className='Filters_divCitys'>
        {data.map((e, i) => (
            <div className='Filters_divCityInput' key={i}>
              <input type="radio" name="location" value={e.location} onClick={handleLocation}/>
              <label htmlFor="city1">{e.location}</label>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Filters
