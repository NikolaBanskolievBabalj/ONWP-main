document.addEventListener('DOMContentLoaded', function () {
  const lista = document.querySelector('.lista');
  const items = Array.from(lista.children);

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    lista.appendChild(randomItem);
  }

  const covers = document.querySelectorAll('.cover');
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let moves = 0;
  let matchedPairs = 0;
  const totalPairs = 6; 

  const counter = document.createElement('p');
  counter.textContent = "Обиди: 0";
  counter.style.fontSize = "20px";
  counter.style.fontWeight = "bold";
  counter.style.margin = "15px";
  document.body.prepend(counter); 

  covers.forEach(function (cover) {
    cover.addEventListener('click', function () {
      if (lockBoard) return;

      cover.style.visibility = 'hidden';
      const cardDiv = cover.parentElement;
      const cardId = cardDiv.className.trim();

      if (!firstCard) {
        firstCard = { cover, id: cardId };
        return;
      }

      secondCard = { cover, id: cardId };
      moves++;
      counter.textContent = "Обиди: " + moves;
      lockBoard = true;

      if (firstCard.id === secondCard.id) {
        matchedPairs++;
        firstCard = null;
        secondCard = null;
        lockBoard = false;

        if (matchedPairs === totalPairs) {
          setTimeout(function () {
            alert("Браво! Ја победи играта со " + moves + " обиди!");
          }, 300);
        }
      } else {
        
        setTimeout(function () {
          firstCard.cover.style.visibility = 'visible';
          secondCard.cover.style.visibility = 'visible';
          firstCard = null;
          secondCard = null;
          lockBoard = false;
        }, 1000);
      }
    });
  });
});

