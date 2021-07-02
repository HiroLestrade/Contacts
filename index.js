document.addEventListener('DOMContentLoaded', function(){
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const add = document.getElementById('add');
    const table = document.getElementById('tableBody');

    add.onclick = function(){
        //Ask for empty contacts
        if(name.value === '' || phone.value === '' || email.value === ''){
            console.error("Incomplete form.");
        }

        //There's no an empty text imput
        else{
            let reg = 1;
            while(reg in local){
                reg++;
            }
            let obj = createContact(reg, name.value, phone.value, email.value);
            addContact(obj, table);
        }
    };

    readContacts(table);
});