const dateUtil = (date) => {
  // obtengo la fecha del dia de inicio
  const start = new Date(date.slice(0, 10))
  // la fecha de hoy
  const hoy = new Date()
  // al restar dos fechas obtengo la diferencia entre un dia y otro en milisegundos
  const diferenceMs = hoy - start
  // convierto los milisegundos a dias, 1000 es el valor para convertir milisegundos
  // a segundos, luego se multiplica X 60 para convertir los segundos a minutos,
  // X 60 para convertirlo en horas y X 24 para convertirlo en dias, uso el Math.floor
  // para redondear el numero a un numero sin decimales
  const differenceDays = Math.floor(diferenceMs / (1000 * 60 * 60 * 24))

  return `${differenceDays} Days ago`
}

export default dateUtil