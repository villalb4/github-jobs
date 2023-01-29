const jobTypeAdapter = (type) => {
  return (
    type === 'full_time' || type === '' ? 'Full time' :
    type === 'other' ? 'Part time' : 'contract'
  )

}

export default jobTypeAdapter