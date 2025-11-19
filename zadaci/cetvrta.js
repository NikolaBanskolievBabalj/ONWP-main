document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    
    var name = document.getElementById("username").value.trim();
    var surname = document.getElementById("surname").value.trim();
    var password  = document.getElementById("password").value.trim();
    var date = document.getElementById("dob").value.trim();

    const errors = document.getElementsByClassName("error");
    for(let i = 0; i < errors.length; i++){
        errors[i].textContent="";
    }

    var valid = true;

    if(name === ""){
        document.getElementById("errorUserName").textContent = "Fill a name out";
        valid = false;
    }
    if(surname === ""){
        document.getElementById("errorSurName").textContent = "Fill a lastname out";
        valid = false;
    }
    if(password === ""){
        document.getElementById("errorPassword").textContent = "Fill a password out";
        valid = false;
    }
    if(date === ""){
        document.getElementById("errorDate").textContent = "Fill a date of birth out";
        valid = false;
    }

    if(!valid) return;

    var dialog = document.getElementById("dialogBox");
    var text = 
        "Name:" + name + "<br>" +
        "Surname:" + surname + "<br>" +
        "Password:" + password + "<br>" +
        "Date of birth: " + date + "<br>";
    document.getElementById("DialogText").innerHTML = text;
    dialog.showModal();
});