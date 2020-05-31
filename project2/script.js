amount.onclick = function sum (){
let firstArg = +prompt("Enetr first number");
let secArg = +prompt("Enter second number");
alert (`Success! The result is ${firstArg}+${secArg}=${firstArg+secArg} !`); 
}

difference.onclick = function diff (){
let firstArg = +prompt("Enetr first number");
let secArg = +prompt("Enter second number");
alert (`Success! The result is ${firstArg}-${secArg}=${firstArg-secArg} !`); 
}

multiplication.onclick = function mult () {
let firstArg = +prompt("Enetr first number");
let secArg = +prompt("Enter second number");
alert (`Success! The result is ${firstArg}*${secArg}=${firstArg*secArg} !`);
}
division.onclick = function divis (){
let firstArg = +prompt("Enetr first number");
let secArg = +prompt("Enter second number");
alert (`Success! The result is ${firstArg}/${secArg}=${firstArg/secArg} !`);
}


// Вариант2(скучный):

/* let firstNum = prompt("Enetr first number");
let secondNum = prompt("Enter second number");

function calcSum(firstArg, secArg) {
  return +firstArg + +secArg;
}
let resultSum = calcSum(firstNum, secondNum);

function calcDiff(firstArg, secArg) {
  return firstArg - secArg;
} 
let resultDiff = calcDiff(firstNum, secondNum);

function calcMult(firstArg, secArg) {
  return firstArg * secArg;
}
let resultMult = calcMult(firstNum, secondNum);

function calcDivis(firstArg, secArg) {
  return firstArg / secArg;
}
let resultDivis = calcDivis(firstNum, secondNum);

console.log(`${firstNum}+${secondNum}=${resultSum}`);
console.log(`${firstNum}-${secondNum}=${resultDiff}`);
console.log(`${firstNum}*${secondNum}=${resultMult}`);
console.log(`${firstNum}/${secondNum}=${resultDivis}`); */