// #string-repeat

let string = Array(10)
  .fill("*")
  .join("");
string;
string = "*".repeat(10);
string;

// #string.startWith
//  es5
let idx = "hello world".indexOf("hello") === 0;
idx;
// es6
idx = "hello world".startsWith("hello");
idx;

// #string.endsWith
//  es5
let indx =
  "hello world".indexOf("world") === "hello world".length - "world".length;
indx;
// es6
indx = "hello world".endsWith("world");
indx;

// #string.includes
// es5
let index = "hello world".indexOf("world");
index;
// es6
index = "hello world".includes("world");
index;
