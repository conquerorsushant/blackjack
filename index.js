let cards = [];
let sum = 0;
let hasblackjack = false;
let isalive = false;
let message = "";
let messageEl = document.getElementById("first");
let sumEl = document.getElementById("ui");
let Newcd = document.getElementById("ux");

function startgame() {
  isalive = true;
  let firstcard = randomNumber();
  let secondcard = randomNumber();
  cards = [firstcard, secondcard];
  sum = cards[0] + cards[1];
  renderGame();
}
function randomNumber() {
  let number = Math.floor(Math.random() * 13) + 1;
  if (number > 10) {
    return 10;
  } else if (number === 1) {
    return 11;
  } else {
    return number;
  }
}
let player = {
  identity: "Sushant",
  cash: 500,
};
let king = document.getElementById("moon");
king.textContent = player.identity + " :Rs." + player.cash;

function renderGame() {
  Newcd.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    Newcd.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasblackjack = true;
  } else {
    message = "You're out of the game!";
    isalive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isalive === true && hasblackjack === false) {
    let latestCard = randomNumber();
    sum += latestCard;
    cards.push(latestCard);
    renderGame();
  }
}
