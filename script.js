let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".buttons button");
const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");
const resultText = document.querySelector("#result");
const resetBtn = document.querySelector("#reset");

// randomly picks rock, paper, or scissors for the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultText.textContent = `It's a tie! You both picked ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  humanScoreText.textContent = humanScore;
  computerScoreText.textContent = computerScore;

  checkWinner();
}

// game ends when someone gets 5 points
function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      resultText.textContent = "🎉 You won the game!";
    } else {
      resultText.textContent = "💻 The computer won the game. Try again!";
    }

    buttons.forEach((btn) => (btn.disabled = true));
    resetBtn.classList.remove("hidden");
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanScoreText.textContent = 0;
  computerScoreText.textContent = 0;
  resultText.textContent = "Pick one to start.";
  buttons.forEach((btn) => (btn.disabled = false));
  resetBtn.classList.add("hidden");
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playRound(btn.dataset.choice, getComputerChoice());
  });
});

resetBtn.addEventListener("click", resetGame);
