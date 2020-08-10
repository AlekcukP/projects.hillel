export default class View {
    
    constructor(){
        this.$listWrapperEl = $('.dolist_body');
        this.listTemplateEl = $('#listTemplate').html();
    }

    renderTask(el){
        let {title, id, isDone} = el;

        let status = isDone ? 'dolist_done' : ' ';


    return `<div class="list_item dolist_default ${status} " data-list-id="${id}">
     <div class="list_text">${title}</div>
     <div class="dolist_deleteBtn"></div>
     </div>`

        
    }

    renderList(data){
    this.$listWrapperEl.html(data.map(this.renderTask).join('\n'))
    }


   


}