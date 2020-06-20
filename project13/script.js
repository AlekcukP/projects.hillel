class DoList {

    static STATUS_DONE = 'dolist_done';
    static STATUS_DEAFAULT = 'dolist_default';
    static ATTRIBUTE_NAME = 'data-dolist-id';
    static CLASS_DELETE_BTN = 'dolist_deleteBtn';

    
    
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
        newTask.append(DoList.createDeleteBtn());
        return newTask;
    }

    static createDeleteBtn(){
        let deleteBtn = document.createElement('span');
        deleteBtn.className = DoList.CLASS_DELETE_BTN;
        return deleteBtn;
    }

    static setStatus(el, condition){

        if(condition){
            el.classList.add(DoList.STATUS_DONE);
        } else{
            el.classList.remove(DoList.STATUS_DONE);
        }
    }
    
    static getIndex(el){
        let index = el.getAttribute(DoList.ATTRIBUTE_NAME);
        return index;
    }

    static changeComplete(item){
        if(item.completed){
        item.completed = false;

        } else{
        item.completed = true;
    }
    }

    createInitList(){
        this.toDoTasks.forEach((item, index) => this.createListEl(index));
    }

    createListEl(i){
        let listEl = DoList.createTask(this.toDoTasks[i].title);
        listEl.setAttribute(DoList.ATTRIBUTE_NAME, this.toDoTasks[i].id);
        DoList.setStatus(listEl, this.toDoTasks[i].completed);
        this.toDoList.append(listEl);
    }

    onTaskListClick(e){
    
        let arrayTarget; 

        if(e.target.classList.contains(DoList.STATUS_DEAFAULT)){ 
            arrayTarget = this.findTarget(e.target);   
            DoList.changeComplete(arrayTarget);
            DoList.setStatus(e.target, arrayTarget.completed);
        } else if(e.target.classList.contains(DoList.CLASS_DELETE_BTN)){
            arrayTarget = this.findTarget(e.target.parentElement);
            this.toDoTasks.splice(arrayTarget.index, 1);
            e.target.parentElement.remove();
        }
    }

    findTarget(el){
        let target = this.toDoTasks.find((item) => item.id == DoList.getIndex(el));
        return target;
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
        let id = this.toDoTasks[this.toDoTasks.length - 1].id + 1;
        return id;
    }

}   






fetch('http://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => new DoList(data));
    
