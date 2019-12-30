// constructor equivalent in es5
/* var  Person = function (name,age) {
    this.name = name;
    this.age = age;
} */

//class Person {
const Person = class { // hoisting approach
    constructor (name, age){
        this._name = name;
        this._age = age;
    }

    // classic getter for super()
    getName(){
        return this._name;
    }

    // getter
    get age (){
        return this._age;
    }

    // setter
    set age (age) {
        this._age = age;
    }

    static setName (person, name){
        person.name = name;
    }

}

/* Person.prototype.jump = function () {
    // it attaches a new method to all Person objects (es5 way)
    console.log('jump');
} */

class Employee extends Person{
    constructor (name, age, years){
        super(name, age)
        this.years = years;
    }

    getName() {
        return super.getName() + "!!"
    }
}

const employee = new Employee('bob',20,10 );
employee;
const name1 = employee.getName();
name1;


const person = new Person('bob',20)
person;


// Static members

const person2 = new Person('bob', 20);
Person.setName(person2, 'hello');

const age2 = person2.age;
age2;
person2.age = 15;
person2;