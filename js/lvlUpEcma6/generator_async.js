
// https://davidwalsh.name/es6-generators

function getName(){
    setTimeout(() => {
        iter.next('bob');
    }, 1000)
}

function getAge(){
    setTimeout(() => {
        iter.next(10);
    }, 500)
}

// SEF
var iter = (function*  () {
    const name = yield getName();
    console.log(name);
    const age = yield getAge();
    console.log(age);
}());

iter.next();


