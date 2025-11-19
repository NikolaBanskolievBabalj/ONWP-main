const allButtons = document.getElementsByClassName("button-check");

for (let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("click", function(){
        const li = this.parentElement;
        if(li.style.textDecoration === "line-through"){
            li.style.textDecoration = "none";
        } else{
            li.style.textDecoration = "line-through";
        }
    });
}