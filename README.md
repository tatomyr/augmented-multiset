# The 'Augmented Multiset' Library

The library provides functions to deal with multisets of numbers, which in JavaScript are represented by arrays.

These functions are regular multiset operators like multiset sum "⊎" (represented by `sum`).

However, some functions are specific for this particular library. E.g. `product`, which has nothing to do with both intersection nor scalar multiplication. It rather corresponds to a cartesian product, but with an operation, applied on inner tuple (in this case it's a plain sum "+"). Let's call it a 'flat cartesian product'.

# Functions Definition

* `sum(a)(b)` - returns a multiset sum of `a` and `b` multisets provided. The result's cardinality (array length) is `|a ⊎ b| = |a| + |b|`
* `sumEach(A)` - returns a multiset sum of each multisets contained in `A` array.
* `product(a)(b)` - returns a 'flat cartesian product', which means a multiset of all ordered pairs of items of multisets `a` and `b` plain sum: `{a[i] + b[j] | ∀i, j}`. E.g. `[a0, a1] ⋈ [b0, b1, b2] = [a0 + b0, a0 + b1, a0 + b2, a1 + b0, a1 + b1, a1 + b2]`. The results cardinality equals to product of multisets provided cardinalities: `|a ⋈ b| = |a| * |b|`
* `productEach(A)` - returns a 'flat cartesian product' of each multisets contained in `A` array
* ...
* `reduceByEdges(a)(n)` - returns a tuple of `n` elements, uniformly taken from sorted `a` multiset. E.g., `reduceByEdges([a0, a1, a2, a3, a4])(3) = [a0, a2, a4]`. The purpose of this function is to reduce a length of incoming multiset without significant loosing of data
