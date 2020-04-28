const { selectionSort } = require('./selection-sort')

describe('selection sort test', () => {
  it('returns sorted array', () => {
    expect(selectionSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42])
  })
})