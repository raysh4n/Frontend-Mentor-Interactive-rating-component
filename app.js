'use strict'

const form = document.querySelector('#form');
const card = document.querySelector('.card');

// ProcessForm(event) {
//  console.log(event);
// }


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const result = new FormData(event.target).get("rating");
    //console.log(event.target);
    // console.log(new FormData(event.target).get("rating"));
    // ProcessForm(event);

    if (result !== null) {
        const cardHeight=card.offsetHeight + 'px';
        console.log(cardHeight);
        card.style.height = cardHeight; //using offsetHeight so that the height of the card will still be the same for the thank you page
        const cardContent = document.querySelector('.card__content');
        // cardContent.style.display='none';
        let temp = document.querySelector("template");
        let clon = temp.content.cloneNode(true);
        cardContent.innerHTML = '';
        cardContent.appendChild(clon);
        document.querySelector(".answer").textContent = result;
       
    }
});



