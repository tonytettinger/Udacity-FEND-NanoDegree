/*
 * Create a list that holds all of your cards
 */
var listOfCards, shuffledListOfCards, mappedListOfCards, listOfOpenCards, card;

//list of 16 elements, representing the 16 cards, the numbers 1-8 represent the 8 different figures (2 of each)
listOfCards= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
listOfOpenCards = [];

 //shuffle function
 var shuffle = function() {
 shuffledListOfCards = shuffleCards(listOfCards);
 return shuffledListOfCards;
 }
//function intializing when the page starts
shuffle(); 

//defining variables containing the font awesome classes for the 8 different card types
const figures = 
["fa-leaf", "fa-bicycle",
 "fa-diamond", "fa-bomb",
 "fa-bolt", "fa-anchor", 
 "fa-paper-plane-o", "fa-cube"];

//the array of the randomly shuffled figures
mappedListOfCards = shuffledListOfCards.map(x => figures[x-1]);
console.log('mappedListOfCards: ', mappedListOfCards);
console.log(shuffledListOfCards);

// Loops through each card's ID and assign them the corresponding figure class to it's HTML.
function assignCardPictures() {
    for(i=1; i <= shuffledListOfCards.length; i++) {
        let currentCard = document.getElementById('card' + i);
        console.log(currentCard);
        currentCard.classList.add("fa", mappedListOfCards[i]);
    }
};


assignCardPictures();
 
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffleCards(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//select ul list - class = 'deck'
var deck;
deck = document.querySelector(".deck");

//add classes to elements
//var d = document.getElementById("div1");
//d.className += " otherclass";

var cards = document.querySelectorAll('.card');
console.log(cards);
deck.addEventListener('click', function(evt) {
    if(evt.target.nodeName === 'LI'){
        evt.target.classList.add("open", "show");
    }
})
/*
 * set up the event listener for a card. If a card is clicked:
*/

 /*  - display the card's symbol (put this functionality in another function that you call from this one)
 * 
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 * 
 *  - if the list already has another card, check to see if the two cards match
 * 
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 * 
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 * 
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 * 
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



function countTimer() {
    startTime = setInterval(() => {
        time.innerText = minutes + ' : ' + seconds;
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
    }, 1000);
}