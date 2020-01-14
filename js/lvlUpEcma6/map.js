const map = new Map([
    ['key1', 10],
    ['key2', {}]
]);

map.set('key3',1237);
map;

const entries = map.entries();
let cursor = entries.next();

while (cursor.done === false){
    console.log(cursor.value);
    cursor = entries.next();
}

map.forEach((value, key) => {
    value;
    key;
})

console.log( map.has('key3') )
console.log( map.get('key2') )

console.log([...map.values()])

map.clear();
map;