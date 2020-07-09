
const URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts'; 
const contactTemplate = $('#contactTemplate').html();


const $modalWindowEl = $('#modalWindow');  
const $addBtnEl = $('#addBtn');
const $tableList = $('#tableList');
const $nameInput = $('#userName');
const $surnameInput = $('#userSurname');
const $phoneInput = $('#userPhone');
const $idInput = $('#userId');

let contactList = [];


const $dialog = $modalWindowEl.dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    modal: true,
    buttons: {
        Save: () => {
            saveContact();
            clearForm();
            $dialog.dialog('close');
        },
        Cancel: () =>{ 
            clearForm();
            $dialog.dialog('close')},
    },
});


$addBtnEl.click(() => $modalWindowEl.dialog('open'));

$tableList.delegate('.delete_btn', 'click', removeEl);
$tableList.delegate('.edit_btn', 'click', editEl);

getContactList();


function saveContact (){
    let id = $idInput.val();

    if (id){
        updateContact(id);
    } else {
        addNewContact();
    }
}

function getContactList() {
    fetch(URL).then((res) => res.json())
                .then((data) => {
                    setData(data);
                    data.forEach((item) => createList(item))
                });
}              
    

function setData(data) {
    return (contactList = data);
}

function createList(contact) {
    let newItem = contactTemplate
                    .replace('{{id}}', contact.id)
                    .replace('{{name}}', contact.name)
                    .replace('{{surname}}', contact.surname)   
                    .replace('{{phone}}', contact.phone);
    
    $tableList.append(newItem);  
}

function makeContact (){
    let contact = {
        name: $nameInput.val(),
        surname: $surnameInput.val(),
        phone: $phoneInput.val(),
    };

    return contact;
}

function addNewContact (){
    let newContact = makeContact ();

    fetch(`${URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
    })
        .then((res) => res.json())
        .then((contact) => {
            contactList.push(contact);
            createList(contact);
        });   

}

function removeEl(e) {
    let $target = $(e.target);
    let contactId = $target.closest('tr').data('contactId');

    $target.closest('tr').remove();

    let index = contactList.findIndex((item) => item.id == contactId);
    contactList.splice(index, 1);

    fetch(URL + '/' + contactId, {
        method: 'DELETE'
    });

    
}

function clearForm (){
    $nameInput.val('');
    $surnameInput.val('');
    $phoneInput.val('');
    $idInput.val('');
}

function fillForm (contact){
    $nameInput.val(contact.name);
    $surnameInput.val(contact.surname);
    $phoneInput.val(contact.phone);
    $idInput.val(contact.id);
}

function editEl (e){
    let $target = $(e.target);
    let contactId = $target.closest('tr').data('contactId');

    let currentContact = contactList.find((item) => item.id == contactId);
    fillForm(currentContact);

    $dialog.dialog('open');
}

function updateContact (id){
    let contact = makeContact ();
    let $currentContact = $tableList.find(`[data-contact-id="${id}"]`);

    fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    });

    contact.id = id;
    contactList = contactList.map((item) => (item.id == id ? contact : item));

   
    $currentContact.children('.user_name').text( $nameInput.val());
    $currentContact.children('.user_surname').text( $surnameInput.val());
    $currentContact.children('.user_phone').text( $phoneInput.val());
}