// This is just for a bit of fun
console.log('I am here first, but...');
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("now we have the DOM fully loaded and parsed");
  });

  // setting base scores to 0
let yourScore = 0;
let opponentScore = 0;
  // caching everything in we want to aim later
  // the gamer score
let yourScoreTag = document.getElementById('score-you');
  // the opponent(computer) score
let opponentScoreTag = document.getElementById('score-op');
  // the scoreboard itself
let scores = document.querySelector('.board');
  // the result message
let resultMsg = document.querySelector('.res-msg > p');
  // and the rock, paper, scissor images(buttons)
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

  // give the computer the opportunity to choose
function npcChoice() {
  let choices = ['Rock','Paper','Scissors'];
  // to choose between 0 and 3 randomly
  let randomize = Math.floor(Math.random() * 3);
  // but to choose only the options we gave (rock, paper, scissors)
  return choices[randomize];
}

  // set the scenarios
  //if win
function winner(yourChoice, opponentChoice) {
  // declare a variable for the effect indicates if its a win, lose or draw
  const indicator = document.getElementById('indicator');
  // increment the player's score by 1
  yourScore++;
  // and display on the screen in the scoreboard area
  yourScoreTag.innerHTML = yourScore;
  opponentScoreTag.innerHTML = opponentScore;
  // change the message accordingly to the game result
  resultMsg.innerHTML = `${yourChoice} tops ${opponentChoice}. You are a winner!`;
  // add a color indicator to the message according to the result
  indicator.classList.add('win');
  setTimeout(() => indicator.classList.remove('win'), 800);
}

  // if lose
function loser(yourChoice, opponentChoice) {
  // declare a variable for the effect happens when either win, lose or draw
  const indicator = document.getElementById('indicator');
  // increment the opponent's score by 1
  opponentScore++;
  yourScoreTag.innerHTML = yourScore;
  opponentScoreTag.innerHTML = opponentScore;
  resultMsg.innerHTML = `${yourChoice} loses to ${opponentChoice}. You are a loser!`;
  // add a color indicator to the message according to the result
  indicator.classList.add('lose');
  setTimeout(() => indicator.classList.remove('lose'), 800);
}

  // if it's a draw
function drawer(yourChoice, opponentChoice) {
  // no scores going up, so scoreboard does not need to update
  // declare a variable for the effect happens when either win, lose or draw
  const indicator = document.getElementById('indicator');
  // message still need to be updated accordingly
  resultMsg.innerHTML = `${yourChoice} equals to ${opponentChoice}. It's a draw!`;
  // add a color indicator to the message according to the result
  indicator.classList.add('draw');
  setTimeout(() => indicator.classList.remove('draw'), 800);
}
// switch statement here to make the if-else statement easier and shorter (switch statement idea found on mdn-webdocs, little help for tweaking it on stackoverflow)

// lets make the game play
function play(yourChoice) {
    let opponentChoice = npcChoice();
    // switch statement here to make the if-else statement easier and shorter (switch statement idea found on mdn-webdocs, little help for tweaking it on stackoverflow)
    switch (yourChoice + opponentChoice) {
        // winning scenario
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            winner(yourChoice, opponentChoice);
            break;
        // losing scenario
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            loser(yourChoice, opponentChoice);
            break
        // draw scenario
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            drawer(yourChoice, opponentChoice);
            break
    }
    
}

// lets make those images(buttons) work
function rps() {
  rock.addEventListener('click', () => play('Rock'));
  paper.addEventListener('click', () => play('Paper'));
  scissors.addEventListener('click', () => play('Scissors'));
}

rps();