class Set {
  constructor(contents = []) {
    this.array = [...contents]
  }
  add(value) {
    if (!this.array.includes(value)) this.array.push(value)
    return this.array
  }
  remove(value) {
    this.array = this.array.filter((val) => val !== value)
    return this.array
  }
  has(value) {
    if (this.array.includes(value)) return true
    return false
  }
  intersection(set) {
    if (this.array.length > set.array.length) {
      const interArray = this.array.filter((val) => set.has(val))
      return new Set([...interArray])
    }
    const interArray = set.array.filter((val) => this.has(val))
    return new Set([...interArray])
  }
  union(set) {
    const unionArray = new Set(this.array)
    set.array.forEach(element => unionArray.add(element))
    return unionArray
  }
  difference(set) {
    const union = this.union(set)
    const intersection = this.intersection(set)
    const diffArray = union.array.filter((val) => !intersection.has(val))
    return new Set([...diffArray])
  }

  //static
  static intersection(set1, set2) {
    if (set1.array.length > set2.array.length) {
      const interArray = set1.array.filter((val) => set2.has(val))
      return new Set([...interArray])
    }
    const interArray = set2.array.filter((val) => set1.has(val))
    return new Set([...interArray])
  }
  static union(set1, set2) {
    const unionArray = new Set(set1.array)
    set2.array.forEach(element => unionArray.add(element))
    return unionArray
  }
  static difference(set1, set2) {
    const union = set1.union(set2)
    const intersection = set1.intersection(set2)
    const diffArray = union.array.filter((val) => !intersection.has(val))
    return new Set([...diffArray])
  }
}

module.exports = { Set }