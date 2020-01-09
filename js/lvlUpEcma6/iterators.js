
const message = "hello world";

const iter = message[Symbol.iterator]();

let cursor = iter.next()

cursor;

while (cursor.done === false){
    console.log(cursor.value);
    cursor = iter.next();
}

const codes = {
    [Symbol.iterator] () {
        let cur = 0;
        return {
            next () {
                return {
                    value: Math.random(),
                    done: cur++ > 4
                }
            }
        }
    }
}

for ( code of codes) {
    code;
}