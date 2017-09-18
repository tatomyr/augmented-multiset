# The 'Multi' Library

<!-- The `nAry(base)(length)` provides a bunch of properties and methods to interact with (base)-ary (length)-large numbers or vectors (actually represented by JavaScript arrays).

### Installation

* Include this file directly in `html` file as script: `lib/n-ary.babel.js`

* Install the package via `npm` `$ npm i -S n-ary` (??) and import as ES6 module:
```javascript
import nAry from 'n-ary'
```

### Properties

* `nAry(base)(length).base` simply returns the base (arity) of a vector

* `nAry(base)(length).length` simply returns the count of digits in a number

* `nAry(base)(length).range` returns the maximum value each digit of (base)-ary number can reach (range = (base) - 1)

* `nAry(base)(length).zero` returns a zero-filled vector with specified (length)

* `nAry(base)(length).last` returns a (range)-filled vector with specified (length)

### Methods

* `nAry(base)(length).random()` returns random (length)-large vector, where each cell represents an appropriate digit of (base)-ary number

* `nAry(base)([length]).inc(vector)` returns value next to the (vector). Simply, it's just an incrementation of (base)-ary number represented by (vector). If the `length` parameter isn't specified returns an empty array when trying to increment the `last` vector. Otherwise, returns `zero` vector.

* `nAry(base)(length).all()` returns all unique variants of (length)-large (base)-ary vector realizations

* `nAry(base)(length).verge()` returns only the (base)-ary verge of the (length)-dimension table

* `nAry(base)(length).randomSet(count)` returns a (count)-large set of random (base)-ary (length)-large vectors

* `nAry(base)([length]).index(vector)` coerces (base)-ary number represented by (vector) to the regular decimal number

* `nAry(base)(length).fromDecimal(value)` coerces value as a base-10 number to (base)-ary (length)-large vector

* `nAry(base)([length]).sumOfDigits(vector)` returns sum of all digits of (vector)

* `nAry(base)(length).sumEquals(value)` returns all variants of (base)-ary (length)-large vectors with specified sum of digits

### Examples

Find use samples [here](https://tatomyr.github.io/n-ary) -->
