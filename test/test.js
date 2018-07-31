const expect = require('chai').expect;
const {
  O,
  I,
  sum,
  convolution,
  sort,
  round,
  equal,
} = require('../src/index.js')

// Test instances
const u = [2, 1]
const v = [17, 4, 8, 16]

// Log some auxiliary info
const prdct = convolution(u, v)
console.log(prdct, sort(prdct), round(3)(prdct))

describe('#discrete-uniform-distribution', () => {
  it(`should return convolution of granted granted multisets: u ∗ v`, () => {
    const result = convolution(u, v)

    const prod = []
    for (const x of u)
      for (const y of v)
        prod.push(x + y)

    expect(JSON.stringify(result)).to.equal(JSON.stringify(prod))
  })
  it(`should return empty multiset: u ∗ ∅ ≡ ∅`, () => {
    const result = convolution(u, O)
    expect(JSON.stringify(result)).to.equal('[]')
  })
  it(`should return the same multiset: u ∗ I ≡ I`, () => {
    const result = convolution(u, I)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(u))
  })
  it(`should obey the commutativity law: u ∗ v ≡ v ∗ u`, () => {
    const vXu = convolution(u, v)
    const uXv = convolution(v, u)
    expect(equal(vXu)(uXv)).to.equal(true)
  })
  it(`should obey the commutativity law (again, another comparison method): u ∗ v ≡ v ∗ u`, () => {
    const vXu = convolution(u, v)
    const uXv = convolution(v, u)
    expect(JSON.stringify(sort(vXu))).to.equal(JSON.stringify(sort(uXv)))
  })
  it(`should return false: u ∗ v ≠ u + v`, () => {
    const s = sum(u, v)
    const prod = convolution(v, u)
    expect(equal(s)(prod)).to.equal(false)
  })
  it(`should round a multiset properly`, () => {
    const rounded = round(2)(u)
    const minMax = [Math.min(...u), Math.max(...u)]
    expect(JSON.stringify(rounded)).to.equal(JSON.stringify(minMax))
  })
})
