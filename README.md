# Discrete Uniform Distribution

Each discrete uniform distribution could be represented as a multiset of numbers which in JavaScript is a regular array.
[Probability mass function](https://en.wikipedia.org/wiki/Probability_mass_function) can be easily derived from an array in a such manner:

```
let u = {u[i] | i ∈ [1, m]}
p_u(t) = | 1 / m, t ∈ u
         | 0 otherwise
```

where p_u(t) - probability of randomly taken value that belogs to space of `u` to be equal to `t`.

Please note that sake of convenience in the description we start with index 1, not 0.

The point is to simplify operations on such distributions by dealing with only their reflections on multisets. You can find a description of a few handy functions below.

# Functions Definition

* `sum(u, v)` - returns a multiset sum of `u` and `v`. The result's cardinality (array length) is `|u ⊎ v| = |u| + |v|`. E.g. `[u1, u2] + [v1] = [u1, u2, u3]`. This operation is usually denoted as `⊎` or `+`.

* `convolution(u, v)` - returns a multiset of sums of all possible permutation of both `u` and `v` elements: `{u[i] + v[j] | ∀ i, j}`. E.g. `[u1, u2] ∗ [v1, v2, v3] = [u1 + v1, u1 + v2, u1 + v3, u2 + v1, u2 + v2, u2 + v3]`. Technically this is a cartesian product with arithmethic `+` operation applied at each elements pair. The results cardinality equals to product of multisets provided cardinalities: `|u ∗ v| = |u||v|`.

* `sort(u)` - sorts a multiset `u` in ascending order, so `u[i] ≤ u[i + 1]`.

* `round(n)(u)` - returns a multiset of `n` elements, uniformly taken from sorted `u` multiset. E.g., `round(3)([u1, u2, u3, u4, u5]) = [u1, u3, u5]`. The purpose of this function is to reduce a length of incoming multiset without significant loss of data.

# Installation

Install the package with npm:

```
npm i -S git@github.com:tatomyr/discrete-uniform-distribution.git
```
