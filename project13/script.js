class DoList {

    static STATUS_DONE = 'dolist_done';
    static STATUS_DEAFAULT = 'dolist_default';
    static ATTRIBUTE_NAME = 'data-dolist-id';

    
    
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

    static setStatus(el, condition){

        if(condition){
            el.classList.add(DoList.STATUS_DONE);
        } else{
            el.classList.remove(DoList.STATUS_DONE);
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
        if(e.target.classList.contains(DoList.STATUS_DEAFAULT)){

            let index = e.target.getAttribute(DoList.ATTRIBUTE_NAME);
            let arrayTarget = this.toDoTasks.find((item) => item.id == index);      
                
            this.changeComplete(arrayTarget);
            DoList.setStatus(e.target, arrayTarget.completed);
        }
    }


    changeComplete(item){
        if(item.completed){
        item.completed = false;

        } else{
        item.completed = true;
    }
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
    
