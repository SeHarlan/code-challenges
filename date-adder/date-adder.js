function dateAdder(date, dif) {
  const number = Number(dif.slice(0, dif.length - 1))
  const operator = dif.slice(dif.length - 1)
  const newDate = new Date(date)

  if (operator === 's') newDate.setSeconds(date.getSeconds() + number)
  if (operator === 'm') newDate.setMinutes(date.getMinutes() + number)
  if (operator === 'h') newDate.setHours(date.getHours() + number)
  if (operator === 'd') newDate.setDate(date.getDate() + number)
  if (operator === 'w') newDate.setDate(date.getDate() + (number * 7))


  return newDate
}


module.exports = {
  dateAdder
}