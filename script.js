"use strict";

let score = 20;
let highscore = 0;
let secretNumber = setSecretNumber();

function onClickCheck() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    setMessage(".message", "🤷‍♀️ No number!");
  } else if (guess === secretNumber) {
    setMessage(".message", "🎉 Correct Number!");
    setMessage(".number", secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    setHighscore(score);
  } else {
    setMessage(
      ".message",
      guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
    );

    score--;
    hasLost(score);
  }
  document.querySelector(".score").textContent = score;
}

function hasLost(score) {
  if (!score) {
    setMessage(".message", "💥 You lost the game!");
  }
}

function onClickAgain() {
  secretNumber = setSecretNumber();
  score = 20;

  document.querySelector(".guess").value = "";

  setMessage(".message", "Start guessing...");
  setMessage(".scpre", score);
  setMessage(".number", "?");

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}

function setHighscore(score) {
  if (score > highscore) {
    highscore = score;
    setMessage(".highscore", highscore);
  }
}

function setSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function setMessage(selector, message) {
  document.querySelector(selector).textContent = message;
}
