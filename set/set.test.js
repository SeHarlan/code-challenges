const { Set } = require('./set')

describe('Set tests', () => {
  const set = new Set
  const set2 = new Set
  it('"add" a item', () => {
    expect(set.add(1)).toEqual([1])
  })
  it('"remove" an item', () => {
    set.add(2)
    expect(set.remove(1)).toEqual([2])
  })
  it('"has" checks that return true or false', () => {
    set.add(3)
    set.add(4)
    expect(set.has(3)).toEqual(true)
    expect(set.has(7)).toEqual(false)
  })
  it('"intersection" takes a set and returns a new Set with intersection of two sets', () => {
    set2.add(3)
    set2.add(4)
    set2.add(5)
    set2.add(6)
    expect(set.intersection(set2).array).toEqual([3, 4])
  })
  it('"union" takes a set and returns a new Set with intersection of those sets', () => {
    expect(set.union(set2).array).toEqual([2, 3, 4, 5, 6])
  })
  it('"difference" takes a set and returns a new Set with the difference of those sets', () => {
    expect(set.difference(set2).array).toEqual([2, 5, 6])
  })

  it('"intersection" static, takes two sets and returns a new Set with intersection of two sets', () => {
    expect(Set.intersection(set, set2).array).toEqual([3, 4])
  })
  it('"union" static, takes two sets and returns a new Set with intersection of those sets', () => {
    expect(Set.union(set, set2).array).toEqual([2, 3, 4, 5, 6])
  })
  it('"difference" static, takes two sets and returns a new Set with the difference of those sets', () => {
    expect(Set.difference(set, set2).array).toEqual([2, 5, 6])
  })
})