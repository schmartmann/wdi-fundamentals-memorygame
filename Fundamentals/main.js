var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

var cardBoard = document.getElementById('game-board');
	function createBoard()
	for (var i=0; i < cards.length; i++) {
		var cardElement = document.createElement('div'); 
			cardElement.className = 'card';
			board.appendChild(cardElement);
	}
	
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	}
	};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king' {this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";)} 
			else { this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";} 
			if (cardsInPlay.length === 2) {isMatch(cardsInPlay); cardsInPlay = [];} 
};

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");} 
		else {alert("Sorry, try again.")}
	}
};