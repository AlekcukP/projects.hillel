let inputCurrentValueEl = document.querySelector('#inputCurrentValue'),
    multValueEl = document.querySelector('#multValue'),
    divValueEl = document.querySelector('#divValue'),
    sumValueEl = document.querySelector('#sumValue'),
    subValueEl = document.querySelector('#subValue'),
    sumBtnEl = document.querySelector('#sumBtn'),
    multBtnEl = document.querySelector('#multBtn'),
    divBtnEl = document.querySelector('#divBtn'),
    subBtnEl = document.querySelector('#subBtn'),
    btnsBlockEl = document.querySelector('#submitBtns');           
let calc = calculator();

inputCurrentValueEl.addEventListener('change', setValue);
btnsBlockEl.addEventListener('click', onDocumentClick);


function calculator (){
  
    let number = Number();

    return {
        sum: (actionNumber) => number += actionNumber,
        mult: (actionNumber) => number *= actionNumber,
        div: (actionNumber) => number /= actionNumber,
        sub: (actionNumber) => number -= actionNumber,
        set: (setValue) => number = setValue,
        actualValue: () => number,
     }
}

function resetValue (element){
    element.value = '';
}

function setValue (){
  
    calc.set(+inputCurrentValueEl.value);
  
}

function setActualValue (){
 
    inputCurrentValueEl.value = calc.actualValue();
  
}

function onDocumentClick (e){
 
  switch (e.target){
      
    case multBtnEl:  calc.mult(+multValueEl.value);
                     resetValue(multValueEl);
                     setActualValue();
    break;
      
    case sumBtnEl:   calc.sum(+sumValueEl.value);
                     resetValue(sumValueEl);
                     setActualValue();
    break;
      
    case subBtnEl:   calc.sub(+subValueEl.value);
                     resetValue(subValueEl);
                     setActualValue();
    break;
      
    case divBtnEl:   calc.div(+divValueEl.value);
                     resetValue(divValueEl);
                     setActualValue();
    break;
  }
}