const { dateAdder } = require('./date-adder')

describe('date adder tests', () => {
  it('returns a new date with 7 secs added to date', () => {
    const date = new Date(2020, 1, 10, 2, 30, 20)
    const expected = new Date(2020, 1, 10, 2, 30, 27)

    expect(dateAdder(date, '7s')).toEqual(expected)
  })
  it('returns a new date with 4 mins added to date', () => {
    const date = new Date(2020, 1, 10, 2, 30)
    const expected = new Date(2020, 1, 10, 2, 34)

    expect(dateAdder(date, '4m')).toEqual(expected)
  })
  it('returns a new date with 5 hours added to date', () => {
    const date = new Date(2020, 1, 10, 23)
    const expected = new Date(2020, 1, 11, 4)

    expect(dateAdder(date, '5h')).toEqual(expected)
  })
  it('returns a new date with 10 days added to date', () => {
    const date = new Date(2020, 1, 10)
    const expected = new Date(2020, 1, 20)

    expect(dateAdder(date, '10d')).toEqual(expected)
  })
  it('returns a new date with 1 weeks hours added to date', () => {
    const date = new Date(2020, 0, 30)
    const expected = new Date(2020, 1, 6)

    expect(dateAdder(date, '1w')).toEqual(expected)
  })

})