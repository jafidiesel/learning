// data type creation

const symbol = Symbol();

const obj = {
    [symbol] : "hellouu",
    ten: 10
}

symbol;
// symbols do not count as objects properties
console.log( Object.getOwnPropertyNames(obj) )
console.log( JSON.stringify(obj) )
console.log( Object.keys(obj) )

console.log( Object.getOwnPropertySymbols(obj) )


const firstSymbol = Object.getOwnPropertySymbols(obj)[0]

console.log(symbol === firstSymbol)

// symbols with unique key

const symbolA = Symbol.for("unique key");
const symbolB = Symbol.for("unique key");

console.log(symbolA === symbolB)

// example with global symbol

const capSplitter = {
    [Symbol.split] (string) {
        return string
            .split(' ')
            .map(s => s.toUpperCase())
    }
}

const message = "hello world"
const split = message.split(capSplitter) // overrite the default split behaviour thanks to capSplitter
split;