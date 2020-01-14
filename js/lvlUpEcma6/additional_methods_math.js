// es5
function trunc(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}

console.log(trunc(42.7));
console.log(trunc(-42.7));

// es6

console.log(Math.trunc(42.7));
console.log(Math.trunc(-42.7));

// isNan - checks if is not a number
// es5
var i;
i++;
i;
console.log(i != i);
// es6
console.log(Number.isNaN(i));

// isFinite - checks if a number is finite or not
// es6
var inf = 1 / 0;
inf;
console.log(inf === Infinity || inf === -Infinity);
// es6
console.log(Number.isFinite(inf))


// isSafeInteger - a number that it's not out of bounds

console.log(Number.isSafeInteger(1))
console.log(Number.isSafeInteger(1e10000000))

// Number.EPSILON - it can be used to check equality with floating point numbers
// es5
console.log(0.1+ 0.2 === 0.3)
// es6
console.log(Number.EPSILON)
console.log(Math.abs(0.1+ 0.2 - 0.3) < Number.EPSILON)

// Math.sing

console.log(Math.sign(-20))
console.log(Math.sign(20))
console.log(Math.sign(0))