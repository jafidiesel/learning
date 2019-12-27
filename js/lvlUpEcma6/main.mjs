//import { add as myAddFunction, substract as mySubstractFunction } from './add';
//import * as myUtilLib from './add';
import myUtilLib from './add'

// use node -r esm main.mjs to run

console.log(myUtilLib)

const value = myAddFunction(1,2);
const value2 = myUtilLib.substract(1,2);

console.log(value)
console.log(value2)