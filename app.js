const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESUL_COMPUTER_WINS = 'COMPUTER WINS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice. We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 100);
  let compSelection;
  if (randomNumber <= 33) {
    compSelection = ROCK;
  } else if (randomNumber >= 34 && randomNumber <= 66) {
    compSelection = PAPER;
  } else if (randomNumber >= 67) {
    compSelection = SCISSORS;
  }
  return compSelection;
};

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    alert(`${cChoice} does not beat ${pChoice}, it's a draw. Go again!`);
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    alert(`${pChoice} beats ${cChoice}. You won!`);
    return RESULT_PLAYER_WINS;
  } else {
    alert(`${cChoice} beats ${pChoice}. You lost!`);
    return RESUL_COMPUTER_WINS;
  }
};

function resetGame() {
  gameIsRunning = false;
  getComputerChoice;
}

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const compuerChoice = getComputerChoice();
  const winner = getWinner(compuerChoice, playerChoice);
  console.log(`Player Selected: ${playerChoice}`);
  console.log(`Computer Selected: ${compuerChoice}`);
  console.log(winner);
  resetGame();
});
