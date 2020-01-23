const map = new Map();
const weakmap = new WeakMap();

(function() {
  let a = { x: 12 };
  let b = { x: 12 };

  map.set(a, 1);
  weakmap.set(a, 1);
})();

// garbage collection

console.log([...map.entries()]);
//console.log( [...weakmap.entries()] )

const set = new Set();
const weakset = new WeakSet();

(function() {
  let a = { x: 12 };
  let b = { x: 12 };

  set.add(a, 1);
  weakset.add(a, 1);
})();

// garbage collection

console.log(set);
console.log(weakset);
