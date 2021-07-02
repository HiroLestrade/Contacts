const local = window.localStorage;

function addContact(obj, table) {
    //add object to the local storage
    local.setItem(obj.id, JSON.stringify(obj));
  
    //Number of contact
    const numCol = document.createElement('td');
    numCol.innerText = obj.id;
  
    //Name
    const nameCol = document.createElement("td");
    nameCol.innerText = obj.name;
  
    //Phone
    const phoneCol = document.createElement("td");
    phoneCol.innerText = obj.phone;

    //Email
    const emailCol = document.createElement("td");
    emailCol.innerText = obj.email;
    
    const bttnsCol = document.createElement("td");
    
    //Edit button
    const edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.onclick = () => {
      nameCol.contentEditable = true;
      phoneCol.contentEditable = true;
      emailCol.contentEditable = true;
      done.style.display = "block";
    };
    bttnsCol.appendChild(edit);
    
    //Delete button
    const del = document.createElement("button");
    del.innerText = "Delete";
    del.onclick = () => {
      local.removeItem(obj.id);
      window.location.href = "/";
    };
    bttnsCol.appendChild(del);
    
    //Done button
    const done = document.createElement("button");
    done.innerText = "Done";
    done.style.display = "none";
    done.onclick = () => {
      obj.name = titleCol.name;
      obj.phone = phoneCol.innerText;
      obj.email = emailCol.innerText;
      local.setItem(obj.id, JSON.stringify(obj));
      done.style.display = "none";
    };
    bttnsCol.appendChild(done);
  
    //Row
    const row = document.createElement("tr");
    row.appendChild(numCol);
    row.appendChild(nameCol);
    row.appendChild(phoneCol);
    row.appendChild(emailCol);
    row.appendChild(bttnsCol);
    row.id = obj.id;
  
    //Add row to the table
    table.appendChild(row);
}
  
  function createContact(id, name, phone, email) {
    let obj = {
      id,
      name,
      phone,
      email
    };
  
    return obj;
  }
  
  function readContacts(table) {
    for (let key of Object.keys(local).sort()) {
      addContact(JSON.parse(local[key]), table);
    }
  }