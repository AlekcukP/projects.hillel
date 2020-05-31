let firstNum = document.querySelector('#firstArg'),
    secondNum = document.querySelector('#secondArg'),
    typeOfOperation = document.querySelector('#operation'),
    resultBtn = document.querySelector('#calcResult'),
    resultForm = document.querySelector('#result'),
    resetBtn = document.querySelector('#reset');

resultBtn.addEventListener('click', onResultBtnClick);
resetBtn.addEventListener('click', resetValues);

function calcSum (firstArg, secondArg){
    return +firstArg + +secondArg;
}

function calcSub (firstArg, secondArg){
    return +firstArg - +secondArg;
}

function calcMult (firstArg, secondArg){
    return firstArg * secondArg;
}

function calcDiv (firstArg, secondArg){
    return firstArg / secondArg;
} 

function showMax (firstArg, secondArg){

    if (firstArg>secondArg){
        return firstArg;
    }  else {
        return secondArg
    };
}

function showMin (firstArg, secondArg){

    if (firstArg<secondArg){
        return firstArg;
    }  else {
        return secondArg
    }; 
}

function mathOperation (type){
    let result;

switch (type){
    case 'add': 
        result = calcSum(firstNum.value,secondNum.value); break;
    case 'sub': 
        result = calcSub(firstNum.value,secondNum.value); break;
    case 'mult': 
        result = calcMult(firstNum.value,secondNum.value); break;
    case 'div': 
        result = calcDiv(firstNum.value,secondNum.value); break;
    case 'max': 
        result = showMax(firstNum.value,secondNum.value); break;
    case 'min': 
        result = showMin(firstNum.value,secondNum.value); break;

    default: 
};

return result;
}

function onResultBtnClick (){

    if (isNaN(mathOperation(typeOfOperation.value))){
        return resultForm.value = "Ошибка! Введите число."
    } else {
        return resultForm.value = mathOperation(typeOfOperation.value);
    }
}

function resetValues (){
    firstNum.value = '';
    secondNum.value = '';
    resultForm.value = '';
}

