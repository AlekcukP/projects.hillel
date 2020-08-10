class Controller {

    constructor(url){
        this.model = new Model(url);
        this.view = new View;

        this.$inputEl = $('.dolist_input');
        this.$addBtnEl = $('.dolist_btn');
        this.$listWrapperEl = $('.dolist_body');
        this.listTemplateEl = $('#listTemplate').html();

        this.$addBtnEl.click(this.onAddBtnClick.bind(this));
        this.$listWrapperEl.delegate('.list_text', 'click', this.onListClick.bind(this));
        this.$listWrapperEl.delegate('.dolist_deleteBtn', 'click', this.onRemoveBtnClick.bind(this));

        this.model.setData().then((res) => this.view.renderList(res));
    }

    onAddBtnClick(){
        this.model.addEl(this.$inputEl.val()).then((res) => this.view.renderList(res));

        // this.view.renderList(this.model.doList);


        this.$inputEl.val('')
    }

    onListClick(e){
        let target = $(event.target);
        let id = target.parent().attr('data-list-id');

        this.model.updateEl(id);
        this.view.renderList(this.model.doList);
    }

    onRemoveBtnClick(e){
        let target = $(event.target);
        let id = target.parent().attr('data-list-id');

        this.model.removeEl(id);
        this.view.renderList(this.model.doList);
    }
}