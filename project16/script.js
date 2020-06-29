'use strict';

class StickBoard{
static URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';

static INPUTFORM_ID = 'inputForm';
static ADDBUTTON_ID = 'addBtn';
static STICKTEMPLATE_ID = 'stickTemplate';
static REMOVE_BUTTON_CLASS = 'removeButton';
static SPAN_STICK_TEXT = 'stickText';

constructor(){
    this.stickList = [];
    this.inputFormEl = document.getElementById(StickBoard.INPUTFORM_ID);
    this.addButtonEl = document.getElementById(StickBoard.ADDBUTTON_ID);
    this.stickTemplateEl = document.getElementById(StickBoard.STICKTEMPLATE_ID).innerHTML;
    this.stickBorderEl = document.querySelector('.stickBorder');

    this.stickBorderEl.addEventListener('click', this.onStickBorderClick.bind(this));
    this.addButtonEl.addEventListener('click', this.onAddBtnClick.bind(this));
    this.stickBorderEl.addEventListener('focusout', this.onFocusText.bind(this));

    this.getStickList();
}

static createRandomColor(){
    let color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    return color;
}

static saveCorrectText(el, id){
    fetch(StickBoard.URL + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(el),
    });
}

static getDate(){
    let date = new Date();
    return `Added ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
}

getStickList(){
    fetch(StickBoard.URL).then((res) => res.json())
                          .then((data) => {
                            this.setData(data);
                            data.forEach((item) => this.createSticker(item));
                          });
}

setData(data){
    this.stickList = data;
}

createSticker(item){
   let newStick = this.stickTemplateEl.replace('{{text}}', item.description)
                                      .replace('{{color}}', StickBoard.createRandomColor())
                                      .replace('{{id}}', item.id)
                                      .replace('{{time}}', StickBoard.getDate());
   this.stickBorderEl.innerHTML += newStick;
}

onAddBtnClick(){
    this.createNewItem();
    this.inputFormEl.value = '';
}

createNewItem(){
    let newItem = {
        description: this.inputFormEl.value,
    };

    fetch(StickBoard.URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem),
    })
    .then((res) => res.json())
    .then((data) => {
        this.stickList.push(data);
        this.createSticker(this.stickList[this.stickList.length-1]);
    });
}

onStickBorderClick(e){
    if(e.target.classList.contains(StickBoard.REMOVE_BUTTON_CLASS)){
        let id = e.target.closest('.stick').dataset.stickId;

        e.target.closest('.stick').remove();
        this.deleteItem(id);
    }
}

deleteItem(id){
    this.stickList = this.stickList.filter((item) => item.id != id);

    fetch(`${StickBoard.URL}/${id}`,{
        method: 'DELETE',
    });
}

onFocusText(e){
    if(e.target.classList.contains(StickBoard.SPAN_STICK_TEXT)){
        let id = e.target.closest('.stick').dataset.stickId;
        let index = this.stickList.findIndex((item) => item.id == id);

        this.stickList[index].description = e.target.innerText;
        StickBoard.saveCorrectText(this.stickList[index], id);
    }
}


}

new StickBoard();