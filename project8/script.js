let addBtnEl = document.querySelector('#addBtn'),
    taskListEl = document.querySelector('#taskList'),
    inputFormEl = document.querySelector('#inputForm'),
    listItemEl = document.querySelector('#listItem').innerHTML,
    wrapperEl = document.querySelector('#wrapper');
    

addBtnEl.addEventListener('click', onAddBtnClick);
wrapperEl.addEventListener('click', onWrapperElementsClick);

function onAddBtnClick (){
   
    taskListEl.innerHTML += listItemEl.replace('{{задача}}', inputFormEl.value);
    inputFormEl.value = '';                                  
}

function onWrapperElementsClick (e){
    
let target = e.target;

if(target.classList.contains('deleteBtn')){
    target.parentElement.remove();
}

if(target.classList.contains('listItem')){
    target.classList.toggle(`itemWait`);
    target.classList.toggle('itemDone');
} 

}
