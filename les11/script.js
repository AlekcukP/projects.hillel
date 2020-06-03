'use strict'

// function Student (name) {
//     this.name = name;
//     this.surname = 'Anonymous'

//     this.sayHello = function {
//         return 'Hello ' + this.name;
//     }
// }

// let studentA = new Student('Alex');
// let studentB = new Student('Bob');
// let studentC = new Student('John');

function Animal (){
    this.saySound = function (){
        console.log('sound ', this.name + this.sound)
    };
}

function Dog (name){
    this.name = name;
    this.sound = 'gav';
}
function Cat (name){
    this.name = name;
    this.sound = 'meow';
}