// #Computed property names
var key = 'lastname';
var age = 20;

function getKey(){
    return 'newKey123'
}

var person = {
    firstname: 'bob',
    age, // property shorthand
    [key]: 'harvey',
    ['street']: '123 street',
    [getKey() + 'zz']: 'testing'
}

person;