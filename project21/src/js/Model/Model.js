import RestApi from './rest-api';

export default class Model {

    constructor(url){
        this.api = new RestApi(url);
        this.doList = [];
    }

    setData(){
       return this.api.getData().then((res) => {
           (this.doList = res)
           console.log(this.doList)
            return res;
        });
    }

    findEl(id){
        let target  = this.doList.find((item) => item.id == id);
        return target;
    }

    updateEl(id){
        let currentTask = this.findEl(id);

        currentTask.isDone ? currentTask.isDone = false : currentTask.isDone = true;

        this.api.update(id, currentTask);
    }

    addEl(text){
        let newTask = {
            title: text,
            isDone: false,
        };

        return this.api.add(newTask).then((res) => {
            this.doList.push(res)
            return this.doList;
        })
    }

    removeEl(id){
        let currentTask = this.findEl(id);


        this.doList = this.doList.filter((item) => item != currentTask);

        console.log(this.doList)

        this.api.delete(id);
    }
}