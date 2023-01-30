import './Filters.css'
import planet from '../../Assets/icons/planet.svg'

function Filters() {
  return (
    <div className='Filters'>
      <form>
        {/* --- Full time filter --- */}
        <div className='Filters_divFullTime'>
          <input type="checkbox" name="full_time"/>
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
          <div className='Filters_divCityInput'>
            <input type="radio" name="city1"/>
            <label htmlFor="city1">London</label>
          </div>
          <div className='Filters_divCityInput'>
            <input type="radio" name="city2"/>
            <label htmlFor="city2">Amsterdam</label>
          </div>
          <div className='Filters_divCityInput'>
            <input type="radio" name="city3"/>
            <label htmlFor="city3">New York</label>
          </div>
          <div className='Filters_divCityInput'>
            <input type="radio" name="city4"/>
            <label htmlFor="city4">Berlin</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filters
