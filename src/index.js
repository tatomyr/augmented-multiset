/**
 * The Augumented Multiset lib provides methods to deal with special type of multiset.
 * A multiset itself is represented by ordinary JS array.
 // * Those vectors could help to linearize nested loops
 // * (especially it's helpful when an amount of subsidiaries is not specified beforehand).
 // * To use this library features you have to type something like 'nAry(base)(length).someMethod(parameters)'
 // *
 // * @param {number} base - The base (or radix or arity in another words) of vector.
 // * @param {number} length - Amount of digits of vector.
 */


const sum = u => v => [...u, ...v];
const sumEach = U => U.reduce(($, u) => sum($)(u));
const product = u => v => u.reduce(($, x) => sum($)(v.map(y => x + y)), []);
const productEach = U => U.reduce(($, u) => product($)(u));

const exclude = u => x => {
  const index = u.indexOf(x);
  return index === -1
    ? u
    : u.filter((_, i) => i !== index);
}
const diff = u => v => v.reduce(($, x) => exclude($)(x), u);
const equal = u => v => diff(u)(v).length === 0 && diff(v)(u).length === 0;

const sort = ([...u]) => u.sort((a, b) => a - b);
const reduceByEdges = u => (n = 2) => {
  if (n < 2) throw new Error('Rounding the ordered muliset to less than 2 elements');
  const u_ = sort(u);
  if (n >= u_.length) return u_;
  return Array(n).fill().map((_, j) => {
    const m = u_.length;
    const k = (m - 1) * j / (n - 1);
    // return u_[Math.round(k)];
    return (u_[Math.floor(k)] + u_[Math.ceil(k)]) / 2;
  });
}

const reduceByAvg = u => (n = 1) => {
  // if (n < 2) throw new Error('Rounding the ordered muliset to less than 2 elements');
  const u_ = sort(u);
  // if (n >= u_.length) return u_;

  return Array(n).fill().map((_, j) => {
    const m = u_.length;
    const K = m / n;
    console.log(n, {L: [Math.ceil(K*j-1),Math.floor(K*j)], R: [Math.ceil(K*(j+1)-1), Math.floor(K*(j+1))]}, j,[K * (j + 1), [Math.floor(K*j),Math.ceil(K*(j+1)-1)]], K);
    return {
      edges: [Math.floor(K*j),Math.ceil(K*(j+1)-1)],
      halfIncluding: [Math.ceil(K*j-1)===Math.floor(K*j), Math.ceil(K*(j+1)-1)=== Math.floor(K*(j+1))]
    };
  });

  // u_.map((x, i) => {
  //   const m = u_.length;
  //   const k = (n - 1) * i / (m - 1);
  //   console.log(k, Math.floor(k), Math.round(k), Math.ceil(k));
  // })

  // return Array(n).fill().map((_, j) => {
  //   const m = u_.length;
  //   const k = (m - 1) * j / (n - 1);
  //   // return u_[Math.round(k)];
  //   return (u_[Math.floor(k)] + u_[Math.ceil(k)]) / 2;
  // });
}

const ___ = u => (n = 1) => {
  // if (n < 2) throw new Error('Rounding the ordered muliset to less than 2 elements');
  const u_ = sort(u);
  // if (n >= u_.length) return u_;
  //
  return Array(n).fill().map((_, j) => {
    const m = u_.length;
    const K = m / n;
    console.log(n, {L: [Math.ceil(K*j-1),Math.floor(K*j)], R: [Math.ceil(K*(j+1)-1), Math.floor(K*(j+1))]}, j,[K * (j + 1), [Math.floor(K*j),Math.ceil(K*(j+1)-1)]], K);
    return {
      edges: [Math.floor(K*j),Math.ceil(K*(j+1)-1)],
      halfIncluding: [Math.ceil(K*j-1)===Math.floor(K*j), Math.ceil(K*(j+1)-1)=== Math.floor(K*(j+1))]
    };
  });

  // u_.map((x, i) => {
  //   const m = u_.length;
  //   const k = n * i / m;
  //   console.log(k, Math.floor(k), Math.round(k), Math.ceil(k));
  // })

  // return Array(n).fill().map((_, j) => {
  //   const m = u_.length;
  //   const k = (m - 1) * j / (n - 1);
  //   // return u_[Math.round(k)];
  //   return (u_[Math.floor(k)] + u_[Math.ceil(k)]) / 2;
  // });
}

module.exports = {
  sum,
  sumEach,
  product,
  productEach,
  diff,
  equal,
  sort,
  reduceByEdges,
  reduceByAvg,
  ___
};

// console.log(
// '<===========>',
// sum([1,2])([3]),
// sumEach([[1,2],[3]]), sumEach([['a','b'],['c','d'],['e','f','g']]),
// product([1,2])([4,8, 16]),
// productEach([[1,2],[4,8, 16]]), productEach([[1,2],[4,8, 16],[100]]),
// )
