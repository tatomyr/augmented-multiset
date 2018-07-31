/**
 * Discrete uniform distributions
 */

// Define 'Zero'
const O = []

// Define 'One'
const I = [0]

// sum :: ([Number], [Number]) -> [Number]
const sum = (u, v) => [...u, ...v]

// convolution :: [Number] -> [Number] -> [Number]
const convolution = (u, v) => u.reduce(($, x) => sum($, v.map(y => x + y)), O)

// sort :: [Number] -> [Number]
const sort = ([...u]) => u.sort((a, b) => a - b)

// round :: ([Number], Int) -> [Number]
const round = (rounding = Infinity) => u => {
  const v = sort(u)

  if (rounding < 2) throw new Error('Rounding the muliset to less than 2 elements.')

  if (rounding >= v.length) return v

  return Array(rounding).fill().map((_, j) => {
    const K = (v.length - 1) * j / (rounding - 1)
    return (v[Math.floor(K)] + v[Math.ceil(K)]) / 2
  })
}

// reduce :: [Number] -> [Number]
// TODO: implement reduce… Or maybe ¿RESIZE?

// Cumulative distribution function at i-th point of m
// F :: Int -> Int -> Number
const F = i => m => (i + 1) / m

// convertToXY :: (Number, Int, [Number]) -> (Number, Number)
const convertToXY = mapXY => (x, i, arr) => mapXY(x, F(i)(arr.length))
// Possible mapXY:
// const mapXY = (x, y) => [x, y * 100]
// const mapXY = (x, y) => { x, y: y * 100 }

// cumulativeGraph :: [Number] -> [(Number, Number)]
const cumulativeGraph = mapXY => u => sort(u).map(convertToXY(mapXY))

const exclude = u => x => {
  const index = u.indexOf(x)
  return index === -1
    ? u
    : u.filter((_, i) => i !== index)
}
const diff = u => v => v.reduce(($, x) => exclude($)(x), u)
const equal = u => v => diff(u)(v).length === 0 && diff(v)(u).length === 0

module.exports = ({
  O,
  I,
  sum,
  convolution,
  sort,
  round,
  cumulativeGraph,
  diff,
  equal,
})
