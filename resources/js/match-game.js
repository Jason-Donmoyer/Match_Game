var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  let cardArray = [];
  for (let i = 1; i <= 8; i++) {
    cardArray.push(i);
    cardArray.push(i);
  }
  let randomCardArray = [];
  while (cardArray.length > 0) {
    let cardIndex = Math.floor(Math.random() * cardArray.length);
    let randomCardIndex = cardArray.splice(cardIndex, 1)[0];
    randomCardArray.push(randomCardIndex); 
  }
  return randomCardArray;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};