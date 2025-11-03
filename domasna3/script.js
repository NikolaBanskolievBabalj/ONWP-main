const covers = document.querySelectorAll(".cover");
let firstCard = null;
let secondCard = null;
let lockCards = false;

covers.array.forEach(cover => {
    cover.addEventListener("click", () =>{
        if(lockCards) return;

        cover.style.visibility = "hidden";

        const realImg = cover.nextElementSibling;
        const cardName = realImg.src;

        if(!firstCard){
            firstCard = {cover , cardName};
        }else{
            secondCard = {cover, cardName};
            lockCards = true;
        }

        if(firstCard.cardName == secondCard.cardName){
            firstCard = null;
            secondCard = null;
            lockCards = false;
        }else{
            setTimeout(()=>{
                firstCard.cover.style.visibility = "visible";
                secondCard.cover.style.visibility = "visible";
                firstCard = null;
                secondCard = null;
                lockCards = false;
            }, 1000);
        }
    });
});