const expect = require('chai').expect;
const {
  product,
  equal,
  sort,
  sum,
  reduceByEdges, 
} = require('../lib/index.babel.js');

// Test instances
const u = [2,1];
const v = [17,4,8,16];
const prdct = product(u)(v);

describe('#multiset', () => {
  it(`should return ¿operated cartesian product? of granted multisets: u ⋈ v`, () => {
    const result = product(u)(v);

    const prod = [];
    for (const x of u)
      for (const y of v)
        prod.push(x + y);

    expect(JSON.stringify(result)).to.equal(JSON.stringify(prod));
  });
  it(`should return empty multiset: u ⋈ ∅ = ∅`, () => {
    const result = product(u)([]);
    expect(JSON.stringify(result)).to.equal('[]');
  });
  it(`should return true: u ⋈ v = v ⋈ u`, () => {
    const vXu = product(u)(v);
    const uXv = product(v)(u);
    expect(equal(vXu)(uXv)).to.equal(true);
  });
  it(`should return true (again, another comparison method): u ⋈ v = v ⋈ u`, () => {
    const vXu = product(u)(v);
    const uXv = product(v)(u);
    expect(JSON.stringify(sort(vXu))).to.equal(JSON.stringify(sort(uXv)));
  });
  it(`should return false: u ⋈ v ≠ u + v`, () => {
    const s = sum(u)(v);
    const prod = product(v)(u);
    expect(equal(s)(prod)).to.equal(false);
  });
  it(`should reduce ordered multiset by edges properly`, () => {
    const reduced = reduceByEdges(sort(u))();
    const minMax = [Math.min(...u), Math.max(...u)];
    expect(JSON.stringify(reduced)).to.equal(JSON.stringify(minMax));
  });
});
