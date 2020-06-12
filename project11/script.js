'use strict'

Accordeon.CLASS_TITLE = 'title';
Accordeon.CLASS_HIDDEN = 'hidden';
Accordeon.CLASS_ACTIVE = 'active';


function Accordeon(element) {
    this.collapsMenu = element;
    this.headerElements = this.collapsMenu.getElementsByClassName(Accordeon.CLASS_TITLE);
    this.collapsMenu.addEventListener('click', this.switchStatus.bind(this));
}


Accordeon.prototype.switchStatus = function (e) {
    if (e.target.classList.contains(Accordeon.CLASS_TITLE)) {
        this.setStatusActive(e);
        this.removeStatusActive(e, this.headerElements);
    }
}

Accordeon.prototype.setStatusActive = function (e) {
    e.target.nextElementSibling.classList.toggle(Accordeon.CLASS_HIDDEN);
    e.target.classList.toggle(Accordeon.CLASS_ACTIVE);
}

Accordeon.prototype.removeStatusActive = function (e, collection) {
    for (let key of collection) {
        if (key != e.target) {
            key.nextElementSibling.classList.add(Accordeon.CLASS_HIDDEN);
            key.classList.remove(Accordeon.CLASS_ACTIVE);
        }
    }
}

new Accordeon(document.getElementById('list'));
