export const getJobs = () => {
  return async (dispatch, state) => {
    const apiData = await fetch('https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&num_pages=10', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ada8708419msh9672023735c8038p133c6fjsn0b640538c416',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    })
    const response = await apiData.json()

    console.log(response)

  }
}