let assert = require('chai').assert;
let calculator = require('../app/calculator');

describe("Calculator sum test using ASSERT interface from CHAI module:", function(){
    describe("Check sum function: ",function(){
        it("Check the final number of the sum using assert.equal",function(){
            let result = calculator.sum(2,3);
            assert.equal(result, 5);
        });
        it("Check the typeOf the result using assert.typeOf",function(){
            let result = calculator.sum(2,3);
            assert.typeOf(result, "number");
        });
        it("Check the length of the result using assert.lengthOf",function(){
            let result = calculator.sum(2,3);
            assert.lengthOf(result.toString(), 1);
        });
        it("Check the result is greater than zero using assert.",function(){
            let result = calculator.sum(2,3);
            assert.isAbove(result,0,`${result} is greater than 0`);
        });
    })

});