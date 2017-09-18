const expect = require('chai').expect;
const ams = require('../lib/index.babel.js');

// Test instances
const u = [2,1];
const v = [17,4,8,16];
const prdct =ams.product(u)(v);
console.log(
  // ams.reduce(u)(3),
  //
  //
  // ams.sort(prdct),
  // prdct,
  //
  // ams.reduce(prdct)(),
  // ams.reduce(prdct)(3),
  // ams.reduce(prdct)(4),
  // ams.reduce(prdct)(10),



  // '\n--------------\n',3,
  // ams.reduceByAvg(prdct)(3),
  // '\n--------------\n',4,
  // ams.reduceByAvg(prdct)(4),
  // '\n--------------\n',5,
  // ams.reduceByAvg(prdct)(5),
  // '\n--------------\n',6,
  // ams.reduceByAvg(prdct)(6),
  // '\n--------------\n',10,
  // ams.reduceByAvg(prdct)(10),
  // '\n--------------\n',8,
  // ams.reduceByAvg(prdct)(8),
  // '\n--------------\n',
  // prdct.length,




  ams.___(prdct)(7)
);

describe('#multiset', () => {
  it(`should return ¿operated cartesian product? of granted multisets: u ⋈ v`, () => {
    const result = ams.product(u)(v);

    const product = [];
    for (const x of u)
      for (const y of v)
        product.push(x + y);

    expect(JSON.stringify(result)).to.equal(JSON.stringify(product));
  });
  it(`should return empty multiset: u ⋈ ∅ = ∅`, () => {
    const result = ams.product(u)([]);
    expect(JSON.stringify(result)).to.equal('[]');
  });
  it(`should return true: u ⋈ v = v ⋈ u`, () => {
    const vXu = ams.product(u)(v);
    const uXv = ams.product(v)(u);
    expect(ams.equal(vXu)(uXv)).to.equal(true);
  });
  it(`should return true (again, another comparison method): u ⋈ v = v ⋈ u`, () => {
    const vXu = ams.product(u)(v);
    const uXv = ams.product(v)(u);
    expect(JSON.stringify(ams.sort(vXu))).to.equal(JSON.stringify(ams.sort(uXv)));
  });
  it(`should return false: u ⋈ v ≠ u + v`, () => {
    const sum = ams.sum(u)(v);
    const product = ams.product(v)(u);
    expect(ams.equal(sum)(product)).to.equal(false);
  });
  it(`should reduce ordered multiset by edges properly`, () => {
    const reduced = ams.reduceByEdges(u)();
    const minMax = [Math.min(...u), Math.max(...u)];
    expect(JSON.stringify(reduced)).to.equal(JSON.stringify(minMax));
  });
});
