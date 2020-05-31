let button = document.querySelector('#list-button');
let list = document.querySelector('#list');
let inputForm =document.querySelector('#inputForm');


function addItem (){
    let listItem = document.createElement('li');

    listItem.textContent = inputForm.value;

    list.append(listItem);

    inputForm.value = '';
}

button.addEventListener('click', addItem);