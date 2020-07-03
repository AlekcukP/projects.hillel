const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';

const $inputEl = $('.dolist_input');
const $addBtnEl = $('.dolist_btn');
const $listWrapperEl = $('.dolist_body');
const $listTemplateEl = $('#listTemplate').html();

let doList = [];

$addBtnEl.click(onAddBtnClick);
$listWrapperEl.delegate('.list_text', 'click', onListClick);
$listWrapperEl.delegate('.dolist_deleteBtn', 'click', onRemoveBtnClick);
init();

function init (){
    getList();
}

function getList(){
    fetch(URL).then((res) => res.json())
    .then(setData)  
    .then((data) => data.forEach((item) => renderList(item.title, item.id, item.isDone)));
}

function setData(data){
    return (doList = data);
}

function renderList (taskText, id, status){
    let newItem = $($listTemplateEl);
    newItem.children('.list_text').text(taskText);
    newItem.attr('data-list-id', id);

    if(status){
        newItem.addClass('dolist_done');
    }

    $listWrapperEl.append(newItem);
}


function onAddBtnClick(){

    let newTask = {
        title: $inputEl.val(),
        isDone: false,
    };

    fetch(URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask),
    }).then((res) => res.json())
      .then((data) => {
          doList.push(data);
          renderList(doList[doList.length - 1].title, doList[doList.length - 1].id);

          clearForm();
      });

}

function clearForm (){
    $inputEl.val('');
}

function onListClick(e){
    let target = $(event.target);
    let id = target.parent().attr('data-list-id');
    let element = findTargetInArr(id);

    target.parent().toggleClass('dolist_done');
    changeStatus(element);
    sendCorrectValue(id, element);
}

function onRemoveBtnClick(){
    let target = $(event.target);
    let id = target.parent().attr('data-list-id');

    doList.filter((item) => item.id != id);
    deleteTaskFromServer(id);  
    target.parent().remove();
}


function findTargetInArr (id){
    let target  = doList.find((item) => item.id == id);

    return target;
}

function changeStatus(el){
    el.isDone ? el.isDone = false : el.isDone = true;
}

function sendCorrectValue(id, el){

    fetch(URL + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(el),
    });

}

function deleteTaskFromArray(id){
    doList.splice(id, 1);
}

function deleteTaskFromServer(id){
    fetch(URL + '/' + id, {
        method: 'DELETE'
});
}