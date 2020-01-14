// a Set it's a unique array

const set = new Set([1,1,2,3,4,4,5,5,5]);

set.add(10);
set.add(7);
set.add(8);
set.delete(7);
set;

const entries = set.entries();
entries;

for (let [value] of entries) value

console.log( set.has(10) )
console.log( [...set.values()] )
set.forEach( value => {
    console.log(value)
})