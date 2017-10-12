# The 'Augmented Multiset' Library

It is a lightweight, no-dependency library, that provides functions to deal with multisets of numbers, which in JavaScript are represented by arrays.

These functions are regular multiset operators like multiset sum "⊎" (represented by `sum`).

However, some functions are specific for this particular library. E.g. `product`, which has nothing to do with both intersection nor scalar multiplication. It rather corresponds to a cartesian product, but with an operation, applied on inner tuple (in this case it's a plain sum "+"). Let's call it a 'flat cartesian product'.

# Functions Definition

* `sum(u)(v)` - returns a multiset sum of `u` and `v` multisets provided. The result's cardinality (array length) is `|u ⊎ v| = |u| + |v|`
* `sumEach(U)` - returns a multiset sum of each multisets contained in `U` array.
* `product(u)(v)` - returns a 'flat cartesian product', which means a multiset of all ordered pairs of items of multisets `u` and `v` plain sum: `{u[i] + v[j] | ∀i, j}`. E.g. `[u0, u1] ⋈ [v0, v1, v2] = [u0 + v0, u0 + v1, u0 + v2, u1 + v0, u1 + v1, u1 + v2]`. The results cardinality equals to product of multisets provided cardinalities: `|u ⋈ v| = |u| * |v|`
* `productEach(U)` - returns a 'flat cartesian product' of each multisets contained in `U` array
* ...
* `reduceByEdges(u)(n)` - returns a tuple of `n` elements, uniformly taken from sorted `u` multiset. E.g., `reduceByEdges([u0, u1, u2, u3, u4])(3) = [u0, u2, u4]`. The purpose of this function is to reduce a length of incoming multiset without significant loosing of data
