export default class RestApi {

    constructor(url){
        this.url = url;
    }

    add(el){
    return    fetch(this.url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(el),
        }).then((res) => res.json())
    }

    delete(id){
    return    fetch(this.url + '/' + id, {
            method: 'DELETE'
    });
    }

    update(id, el){
    return    fetch(this.url + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(el),
        });
    }

    getData(){
    return fetch(this.url).then((res) => res.json())
    }

}