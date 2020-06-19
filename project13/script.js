


class DoList {

    static STATUS_DONE = 'dolist_done';
    static STATUS_DEAFAULT = 'dolist_default';
    static ATTRIBUTE_NAME = 'DoListId';

    
    
    constructor(arr){
    this.toDoTasks = arr;
    this.container = document.getElementById('container');
    this.toDoList = this.container.querySelector('.dolist_body');
    this.inputForm = this.container.querySelector('.dolist_input');
    this.addBtn = this.container.querySelector('.dolist_btn');
    
    this.createInitList();

    this.toDoList.addEventListener('click', this.onTaskListClick.bind(this));
    this.addBtn.addEventListener('click', this.onAddbtnClick.bind(this));
    }

   static createTask(taskText){
        let newTask = document.createElement('div');
        newTask.innerText = taskText;
        newTask.className = DoList.STATUS_DEAFAULT;
        return newTask;
    }
    
    static initSetStatus(el, condition){
        if(condition){
            el.classList.add(DoList.STATUS_DONE);
        } else{
            el.classList.remove(DoList.STATUS_DONE);
        }

    return el;
    }
    
    static setElAttribute(el, attrName, attrValue){
        el.setAttribute(`${attrName}`, attrValue);

    return el;
    }
    
    static appendElement(el, container){
        container.append(el);
    }

    static setSataus(el, condition){
        if(condition){
            el.classList.add(DoList.STATUS_DONE);
        } else{
            el.classList.remove(DoList.STATUS_DONE);
        }
    }

    createInitList(){
        let length = this.toDoTasks.length;

        for(let i = 0; i < length; i++){
            this.createListEl(i);
        }
    }

    createListEl(i){
        let listEl = DoList.createTask(this.toDoTasks[i].title);
            listEl = DoList.initSetStatus(listEl, this.toDoTasks[i].completed);
            listEl = DoList.setElAttribute(listEl, DoList.ATTRIBUTE_NAME, this.toDoTasks[i].id);
            DoList.appendElement(listEl, this.toDoList);
    }

    onTaskListClick(e){
        if(e.target.classList.contains(DoList.STATUS_DEAFAULT)){
            this.findEl(e.target.getAttribute(DoList.ATTRIBUTE_NAME), e.target);
            
        }
    }

    findEl(index, el){
        this.toDoTasks.find(function(item){
            
            if(item.id == index){
                if(item.completed){
                    item.completed = false;
                    console.log(item);
                } else{
                    item.completed = true;
                    console.log(item);
                }
            }
            DoList.setSataus(el, item.completed);
        }); 
        
    }

    onAddbtnClick(){

        let newTask = {
            userId: 1,
            id: this.createID(),
            title: this.inputForm.value,
            completed: false
        };

        this.toDoTasks.push(newTask);
        this.createListEl(this.toDoTasks.length - 1);
        this.inputForm.value = '';

    }

    createID(){
        let res = this.toDoTasks[this.toDoTasks.length - 1].id + 1;
        return res;
    }




}   
fetch('http://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => new DoList(data));
    
