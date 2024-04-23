// This is just for a bit of fun
console.log('I am here first, but...');
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("now we have the DOM fully loaded and parsed");
  });

  // setting base score to 0
let yourScore = 0;
let opponentScore = 0;
  // caching everything in we want to aim later
  // the gamer score
let yourScoreTag = document.getElementById('score-you');
  // the opponent(computer) score
let opponentScoreTag = document.getElementById('score-op');
  // the score board itself
let scores = document.getElementById('board');
  // the results message
let resultMsg = document.querySelector('.res-msg');
  // and the rock, paper, scissor images(buttons)
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

 // give the computer the opportunity to choose
function npcChoice() {
    let choices = ['rock','paper','scissor'];
    // to choose between 0 and 3 randomly
    let randomize = Math.floor(Math.random() * 3);
    // but to choose only the options we gave (rock, paper, scissors)
    return choices[randomize];
}

  // set the scenarios
  // if Win
function winner(yourChoice, opponentChoice) {
    // increment the player's score by 1
    yourScore++;
    // and display it in the score board area
    yourScoreTag.innerHTML = yourScore;
    // opponent score does not change, but display it anyway
    opponentScoreTag.innerHTML = opponentScore;
    // change the message accordingly to the game result with template literals
    resultMsg.innerHTML = `${yourChoice} tops ${opponentChoice}. You are a Winner!`;
}