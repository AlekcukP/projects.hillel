'use strict';

const $modalWindowEl = $('#modalWindow');
const $addBtnEl = $('#addBtn');

$(() => {
    $modalWindowEl.dialog({
        autoOpen: false,
        resizable: false,
        draggable: false,
        modal: true,
        buttons: [{text: 'Add contact', click: function(){}},
                  {text: 'Canel', click: function() {$(this).dialog("close");}} ],
    });
    
    $addBtnEl.click(function(){
        $modalWindowEl.dialog('open');
       });




});
