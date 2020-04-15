function dailyRev(input) {
  return input.reduce((acc, cur) => {
    const date = new Date(cur.timestamp)
    const dateString = date.toDateString()
    const cost = cur.price

    if (!acc[dateString]) {
      acc[dateString] = cost
    } else {
      acc[dateString] += cost
    }
    return acc
  }, {})

}

module.exports = {
  dailyRev
}