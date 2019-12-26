
function tag(strings, ...values){
    //console.log(strings);
    //console.log(values);

    let message = '';
    strings.forEach( (string, index) => {
        message += string;
        if( index < values.length){
            message += `<b>${values[index]}</b>`
        }
    })
    
    return message;

}

const name = 'bob';
const age = '10';

const message = tag`My name is ${name}. My age is ${age}.`

console.log(message);


// #RAW

function tagRaw (strings, ...values){
    console.log(strings.raw[0])
}
const message2 = tagRaw`hello my name\nis bob, and my age is\n10`