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