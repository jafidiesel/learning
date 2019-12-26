

// Spread operator

function print(...args) {
  //var args = Array.prototype.slice.call(arguments);
  //args = ['<br>'].concat(args).concat('</br>')
  args = ["<br>", ...args, "</br>"];
  args;
  console.log(args.join(" "));
}

print("hello", "world");

const message = "hello World";
const chars = ["!", ...message];
chars;

function add(a, b) {
  a;
  b;
  return a + b;
}

const arr = [2, 10];
console.log(add(...arr));

const arr2 = [...arr];

arr;
arr2;

arr[0] = 5;

arr;
arr2;


const numbers = [1, 10 , 15 , 20]

const max = Math.max(...numbers)
max;

function sum(...numbers) {
    return numbers.reduce((acc, number) => acc + number);
}
 
const answer = sum(1, 5, 20, 10);
 
console.log(answer);
