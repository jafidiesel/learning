const {add, mul, sub, div} = require('./arith');
require('jest');

describe("Arithmetic tests", () => {
    test("1+2=3", () => {
            expect(add(1,2)).toBe(3);        
            }

        );
    test("10 * 2 = 20", () => {
            expect(mul(10,2)).toBe(20);
            }

        );
    test("4 - 5 = -1", () => {
            expect(sub(4,5)).toBe(-1);
            }

        );
    test("4 / 2 = 2", () => {
        expect(div(4,2)).toBe(2);
        });
    }
);