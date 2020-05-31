let typeOfOperation = askTypeOfOperation();
let numbers = askNumbers();
let askedNumbers = transformInMassive(numbers);
let conversedMassive = conversInNumber(askedNumbers);
let massiveOfNumbers = getMassiveOfNumbers(conversedMassive);

switch (typeOfOperation) {
    case 'add':
    case '+': 
        calcSum(massiveOfNumbers); 
        break;

    case 'sub':
    case '-': 
        calcSub(massiveOfNumbers); 
        break;

    case 'mult':
    case '*': 
        calcMult(massiveOfNumbers); 
        break;

    case 'div':
    case '/':
         calcDiv(massiveOfNumbers);
        break;

    default: ;
};

function askNumbers () {
    
    do{
        num = prompt('Enter number');
     }while(result===null);
     
     return num;
};



function transformInMassive (massive){
   return massive.split(' '); 
};

function conversInNumber (massive) {
    let result = massive.map(function(item, index, arr){

        let number = parseFloat(item);
        return isNaN(number)? item : number;
    });

    return result;
};

function getMassiveOfNumbers (massive){
   let result = massive.filter(function(item, index, arr){

        return isNaN(item)? false : true;
    });

    return result;
};

function askTypeOfOperation (){
    let type;

    do{
        type = prompt('Enter what do you want to do with numbers?');
            switch (type){
                case 'add': 
                case '+': type = 'add'; break;
                case 'sub': 
                case '-': type = 'sub'; break;
                case 'mult': 
                case '*': type = 'mult'; break;
                case 'div': 
                case '/': type = 'div'; break;
                default: type = false;
            };
        }while(type===false);

  return type;
};

function calcSum (massive){
    let sum = 0;

    for (let number of massive){
       sum += number;
    }; 

    let connect = massive.join('+');  

    return console.log(`${connect}=${sum}`);
};

function calcSub (massive){
    let sub = massive.reduce(function(a, b) {

    return a - b;
  });

  let connect = massive.join('-');  

    return console.log(`${connect}=${sub}`);
};

function calcMult (massive){
    let mult = massive.reduce(function(a, b) {

        return a * b;
      });

      let connect = massive.join('*'); 

    return console.log(`${connect}=${mult}`);
};

function calcDiv (massive){
    let div = massive.reduce(function(a, b) {

        return a / b;
      });

      let connect = massive.join('/'); 

    return console.log(`${connect}=${div}`);
};