$(() => {
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
        api.getTaskList()
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
    
          api.addTask(newTask).then((data) => {
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
        api.updateTask(id, element);
    }
    
    function onRemoveBtnClick(){
        let target = $(event.target);
        let id = target.parent().attr('data-list-id');
    
        doList.filter((item) => item.id != id);
        api.deleteTask(id);  
        target.parent().remove();
    }
    
    
    function findTargetInArr (id){
        let target  = doList.find((item) => item.id == id);
    
        return target;
    }
    
    function changeStatus(el){
        el.isDone ? el.isDone = false : el.isDone = true;
    }
});



