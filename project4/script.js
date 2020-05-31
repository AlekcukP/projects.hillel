let typeOfOperation = askTypeOfOperation();
let amountOfOperands = askAmountOfOperands();
let massiveOfNumbers = buildMassive(amountOfOperands);


switch (typeOfOperation){
    case 'add': 
    case '+': calcSum(massiveOfNumbers); break;
    case 'sub': 
    case '-': calcSub(massiveOfNumbers); break;
    case 'mult': 
    case '*': calcMult(massiveOfNumbers); break;
    case 'div': 
    case '/': calcDiv(massiveOfNumbers); break;
    default: ;
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

function askAmountOfOperands () {
    let amount; 

    do{
        amount = +prompt('How many numbers will you need?');
    }while(amount<2);

    return amount;
};

function  buildMassive (amountOfOp){
    let numbers=[];

    for (; amountOfOp>0; amountOfOp--){  
        numbers.push (askNumber());
    };

return numbers;
};

function askNumber (){
    let result;

    do{
        result = prompt('Enter number');
    }while(result===null);
    
    return +result;
  };

function calcSum (numbers){
    let sum = 0;
    for (let number of numbers){
       sum += number;
    }; 
    let connect = numbers.join('+');  
    return console.log(`${connect}=${sum}`);
};

function calcSub (numbers){
    let sub = numbers.reduce(function(a, b) {
    return a - b;
  });
  let connect = numbers.join('-');  
    return console.log(`${connect}=${sub}`);
};

function calcMult (numbers){
    let mult = numbers.reduce(function(a, b) {
        return a * b;
      });
      let connect = numbers.join('*'); 
    return console.log(`${connect}=${mult}`);
};

function calcDiv (numbers){
    let div = numbers.reduce(function(a, b) {
        return a / b;
      });
      let connect = numbers.join('/'); 
    return console.log(`${connect}=${div}`);
};


