document.getElementById("user-form").addEventListener("submit", function(e){
    e.preventDefault();

    var name = document.getElementById("fname-input").value.trim();
    var surname = document.getElementById("surname-input").value.trim();
    var password = document.getElementById("user-password").value.trim();
    var date = document.getElementById("date-of-user").value.trim();

    var hobbiesSelect = document.getElementById("hobbies").value.trim();
    //var options = hobbiesSelect.getElementByTagName("option").value.trim();
    var hobbies = [];

    document.getElementById("errUserName").textContent = "";
    document.getElementById("errSurName").textContent = "";
    document.getElementById("errPass").textContent = "";
    document.getElementById("errDob").textContent = "";
    //document.getElementById("errHobbies").textContent = "";

    var valid = true;

    if(name === ""){
        document.getElementById("errUserName").textContent = "Fill a name out";
        valid = false;
    }

    if(surname === ""){
        document.getElementById("errSurName").textContent = "Fill a surname out";
        valid = false;
    }

    if(password === ""){
        document.getElementById("errPass").textContent = "Fill a password out";
        valid = false;
    }

    if(date === ""){
        document.getElementById("errDob").textContent = "Fill your birth date";
        valid = false;
    }

   // for(var i = 0; i < options.lenght; i++){
    //    if(options[i].selected){
           // hobbies.push(options[i].textContent);
       // }
   // }

   // if(hobbies.length === 0){
      //  document.getElementById("errHobbies").textContent = "Select at least one hobby0";
       // valid = false;
    //}

    if(!valid) return;

    var dialog = document.getElementById("dialogBox");
    var text = 
        "Name: " + name + "<br>" +
        "Lastname: " + surname + "<br>" +
        "Password: " + password + "<br>" +
        "Date: " + date + "<br>" ;
       // "Hobbies: " + hobbies.join(", ");

    document.getElementById("dialogText").innerHTML = text;

    dialog.showModal();
});