import * as game from "./components/game.js";

const startScreen = document.getElementById("start-screen");
const btnStart = document.getElementById("btn-start");
const containerQuestionsAnswer = document.querySelector(
  ".container-questionsAnswer"
);
const questions = document.querySelector(".questions");
const contentAnswers = document.querySelector(".content-answers");
const resultQuestions = document.querySelector(".resultQuestions");
const spanCorrectAnswerResult = document.querySelector(".correct-answers");
const spanIncorrectAnswerResult = document.querySelector(".wrong-answers");
const btnRestart = document.getElementById("btn-restart");

btnStart.addEventListener("click", () => {
  startScreen.style.display = "none";
  containerQuestionsAnswer.style.display = "flex";

  game.displayQuestionsAnswers();
});

btnRestart.addEventListener("click", () => {
  containerQuestionsAnswer.style.display = "flex";
  resultQuestions.style.display = "none";

  game.reset();
});

export const app = {
  questions,
  contentAnswers,
  containerQuestionsAnswer,
  resultQuestions,
  spanCorrectAnswerResult,
  spanIncorrectAnswerResult,
  displayQuestionsAnswers: game.displayQuestionsAnswers,
};
