'use strict';
const URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';
const DELETE_BTN_CLASS = 'delete-btn'; 
const ADD_BTN_CLASS = 'add_btn';


const listEl = document.getElementById('usersList');
const nameInputEl = document.getElementById('userName');
const phoneInputEl = document.getElementById('userPhone');
const addBtnEl = document.getElementById('addUserBtn');
const userTemplate = document.getElementById('userTemplate').innerHTML;

let list = [];

listEl.addEventListener('click', onListElClick);
addBtnEl.addEventListener('click', submitForm);


init();

function init(){
    getList();
}

function getList(){
    fetch(URL).then((res) => res.json())
              .then(setData)  
              .then(renderList);
}

function setData(data){
    return (list = data);
}

function renderList(data){
    listEl.innerHTML = data.map(getUserElementHtml).join('');
}

function getUserElementHtml(item){
    return userTemplate
            .replace('{{id}}', item.id) 
            .replace('{{name}}', item.name)
            .replace('{{phone}}', item.phone);
}

function onListElClick(e){
    if(e.target.classList.contains(DELETE_BTN_CLASS)){
        deleteItem(e.target.closest('.item').dataset.id);
}
}

function deleteItem(id){
    fetch(`${URL}/${id}`,{
        method: 'DELETE',
    });

    list = list.filter((item) => item.id != id);

    renderList(list);
}

function submitForm(){
    const item = {
        name: nameInputEl.value,
        phone: phoneInputEl.value,

    };

    fetch(URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
    }).then((res) => res.json())
      .then((data) => {
          list.push(data);
          renderList(list);

          clearForm();
      });
}

function clearForm (){
    nameInputEl.value = '';
    phoneInputEl.value = '';
}