const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScore();

function playGame(playerMove) {
  const computerGuess = pickComputerMove();
  let result = "";
  if (playerMove === "Scissors") {
  }
  if (computerGuess === "Scissors") {
    result = "Tie";
  } else if (computerGuess === "Rock") {
    result = "You lose";
  } else if (computerGuess === "Paper") {
    result = "You win";
  } else if (playerMove === "Paper") {
    let result = "";
    if (computerGuess === "Paper") {
      result = "Tie";
    } else if (computerGuess === "Scissors") {
      result = "You lose";
    } else if (computerGuess === "Rock") {
      result = "You win";
    }
  } else if (playerMove === "Rock") {
    let result = "";
    if (computerGuess === "Rock") {
      result = "Tie";
    } else if (computerGuess === "Paper") {
      result = "You lose";
    } else if (computerGuess === "Scissors") {
      result = "You win";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML =
    ` You <img class="move-img" src="${playerMove}-emoji.png" alt="" /> -
      <img class="move-img" src="${computerGuess}-emoji.png" alt="" /> computer`;

  updateScore();
}
function updateScore() {
  document.querySelector(".js-score").innerHTML =
    `wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerGuess = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerGuess = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerGuess = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerGuess = "Scissors";
  }
  console.log(computerGuess);

  return computerGuess;
}
