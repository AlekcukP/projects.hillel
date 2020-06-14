class Tabset{
    static CLASS_HEAD = 'tabset_head';
    static CLASS_TITLE = 'tabset_title';
    static CLASS_BODY = 'tabset_body';
    static CLASS_TABSET_ELEMENT = 'tabset_element';
    static CLASS_OPEN = 'tabset_open';
    static CLASS_ACTIVE = 'tabset_active';

    constructor(element){
        this.container = element;
        this.titleElements = this.container.getElementsByClassName(Tabset.CLASS_TITLE);
        this.bodyElements = this.container.getElementsByClassName(Tabset.CLASS_BODY);

        this.init();

        this.container.addEventListener('click', this.onTabsetHeadClick);
    }
    onTabsetHeadClick = (e) => {
        if (e.target.classList.contains(Tabset.CLASS_TITLE)){
            let index = this.getIndexClickedTitle(e);
          this.removeStatus(this.bodyElements, Tabset.CLASS_OPEN);
          this.removeStatus(this.titleElements, Tabset.CLASS_ACTIVE);
          this.setStatus(this.bodyElements, index, Tabset.CLASS_OPEN);
          this.setStatus(this.titleElements, index, Tabset.CLASS_ACTIVE);
        }
    }


    setStatus (el, pos, status){
        el[pos].classList.add(status);
    }
    removeStatus(el, status){
        Array.prototype.forEach.call(el, (el) => el.classList.remove(status));
    }

    getIndexClickedTitle(e){
        let i;
        for(i = 0; i<this.titleElements.length; i++){
            if(this.titleElements[i] == e.target){
                break;
            }
        }
       return i;
    }

    init(){
        this.initClasses();
        this.rebuildTabsetHtml();
        this.setDefaultValues();
    }

    setDefaultValues(){
        this.setStatus(this.bodyElements, 0, Tabset.CLASS_OPEN);
        this.setStatus(this.titleElements, 0, Tabset.CLASS_ACTIVE);
    }

    initClasses (){
        Array.prototype.forEach.call(this.container.children, (el) => 
            el.classList.add(Tabset.CLASS_TABSET_ELEMENT)
        );
        Array.prototype.forEach.call(
            this.container.querySelectorAll('.title'),
            (el) => el.classList.add(Tabset.CLASS_TITLE)
        );
        Array.prototype.forEach.call(
            this.container.querySelectorAll('.body'),
            (el) => el.classList.add(Tabset.CLASS_BODY)
        );
        
    }

    rebuildTabsetHtml(){
        let tabsetHead = document.createElement('div');
        this.container.prepend(tabsetHead);
        tabsetHead.classList.add(Tabset.CLASS_HEAD);

        this.insertHTML(tabsetHead, this.titleElements);
        
    }

    insertHTML(element, collection){
        for(let insertedElements of collection){
            element.insertAdjacentElement('beforeend', insertedElements);
            }
    }

}
