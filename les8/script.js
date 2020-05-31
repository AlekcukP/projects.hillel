let topPositionInput = document.querySelector('#topPosition');
let leftPositionInput = document.querySelector('#leftPosition');
let addBtn = document.querySelector('#addBtn');
let box = document.querySelector('#container');
let color = document.querySelector('#color');
let shapeTemplateEl = document.querySelector('#shapeTemplate').innerHTML;

addBtn.addEventListener('click', onAddBtnClick);
box.addEventListener('click', onBoxClick)


function onAddBtnClick (){
    box.innerHTML += shapeTemplateEl.replace('{{topPos}}', topPositionInput.value)
                                    .replace('{{leftPos}}', leftPositionInput.value)
                                    .replace('{{color}}', color.value);
}

function onBoxClick (e){

e.target.remove();
}