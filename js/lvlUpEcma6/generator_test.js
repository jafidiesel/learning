function* randomHexGenerator(values) {
  console.log(values);

  while (true) {
    yield values[Math.floor(values.length * Math.random())];
  }
}

let iter = randomHexGenerator(["a", "b", "c", "d"]);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
