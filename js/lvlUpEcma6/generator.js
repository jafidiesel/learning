function* myGenerator() {
  console.log("a");
  yield 1;
  console.log("b");
  yield 2;
  return;
  console.log("c");
  yield 3;
}

const iter = myGenerator();

iter;

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

//iterator function with parameters (fibonacci)

function* fibonacci(){
    let n1 = 0;
    let n2 = 1;
    while(true){
        let current = n1;
        n1 = n2;
        n2 = current + n1;
        let reset = yield current;
        reset;
        if(reset) {
            n1 = 0;
            n2 = 1;
        }
    }
}

const iter2 = fibonacci();

iter2;

console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next(true))
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())