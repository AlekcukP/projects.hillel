class restApi {

    constructor (url){
        this.url = url;
    }

    updateTask(id, el){

        fetch(this.url + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(el),
        });
    
    }

    deleteTask(id){
        fetch(this.url + '/' + id, {
            method: 'DELETE'
    });
    }

    addTask(el){
       return fetch(this.url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(el),
        }).then((res) => res.json())
    }

    getTaskList(){
        return fetch(this.url).then((res) => res.json());
    }
}

let api = new restApi('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos');