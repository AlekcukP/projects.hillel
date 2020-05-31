let typeOfAction = prompt("What to do with numbers?");
let firstNum;
let secondNum;

switch (typeOfAction){
  case 'add':
  case '+': 
  case 'sub':
  case '-': 
  case 'mult':
  case '*': 
  case 'div':
  case '/': 
  case 'pow': firstNum = askFirstNum(); secondNum = askSecondNum(); break
  case 'sin': 
  case 'cos': 
  case 'tan': firstNum = askFirstNum(); break;
  default: alert('Something goes wrong!')
};

let resultDiv = calcDiv(firstNum, secondNum);
let resultMult = calcMult(firstNum, secondNum);
let resultDiff = calcDiff(firstNum, secondNum);
let resultSum = calcSum(firstNum, secondNum);

switch (typeOfAction){
  case 'add':
  case '+': console.log(`The result is ${firstNum}+${secondNum}=${resultSum}`); break;
  case 'sub':
  case '-': console.log(`The result is ${firstNum}-${secondNum}=${resultDiff}`); break;
  case 'mult':
  case '*': console.log(`The result is ${firstNum}*${secondNum}=${resultMult}`); break;
  case 'div':
  case '/': console.log(`The result is ${firstNum}/${secondNum}=${resultDiv}`); break;
  case 'pow': console.log(`Raise ${firstNum} in the ${secondNum} degree equals ${Math.pow(firstNum, secondNum)}`); break;
  case 'sin': console.log(`Sinus of ${firstNum} equals ${Math.sin(firstNum)}`); break;
  case 'cos': console.log(`Cosinus of ${firstNum} equals ${Math.cos(firstNum)}`); break;
  case 'tan': console.log(`Tangens of ${firstNum} equals ${Math.tan(firstNum)}`); break;
  default: alert('Something goes wrong!')
};

function askFirstNum(){
  return prompt("Enetr first number");;  
}

function askSecondNum(){ 
  return prompt("Enter second number");  
}

function calcSum(firstArg, secArg) {
  return +firstArg + +secArg;
};

function calcDiff(firstArg, secArg) {
  return firstArg - secArg;
};

function calcMult(firstArg, secArg) {
  return firstArg * secArg;
};

function calcDiv(firstArg, secArg) {
  return firstArg / secArg;
};