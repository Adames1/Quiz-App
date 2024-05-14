import { questionRandom } from "./quiz.js";
import { app } from "../index.js";

let currentQuestion = null;
let questionCount = 0;
let correctAnswerCount = 0;
let incorrectAnswerCount = 0;

let literals = ["A", "B", "C", "D"];

// funcion para reiniciar juego
export function reset() {
  currentQuestion;
  questionCount = 0;
  correctAnswerCount = 0;
  incorrectAnswerCount = 0;
}

export function checkAnswer(userAnswer) {
  const { correctAnswer } = currentQuestion;

  if (userAnswer === correctAnswer) {
    alert("Respuesta correcta!");
    correctAnswerCount++;
  } else {
    alert(`Respuesta incorrecta. La respuesta correcta es: ${correctAnswer}`);
    incorrectAnswerCount++;
  }

  //   incrementar la cantidad de preguntas
  questionCount++;

  if (questionCount >= 10) {
    showResultScreen();
    return;
  }

  displayQuestionsAnswers();
}

// funcion para mostrar otra pantalla cuando terminen las 10 preguntas
function showResultScreen() {
  app.containerQuestionsAnswer.style.display = "none";
  app.resultQuestions.style.display = "flex";

  app.spanCorrectAnswerResult.textContent = `Respuestas correctas: ${correctAnswerCount}`;
  app.spanIncorrectAnswerResult.textContent = `Respuestas correctas: ${incorrectAnswerCount}`;
}

export function displayQuestionsAnswers() {
  currentQuestion = questionRandom();

  app.questions.textContent = currentQuestion.question;
  app.contentAnswers.innerHTML = "";

  const shuffledAnswers = shuffleArray(currentQuestion.answers);

  shuffledAnswers.forEach((answer, index) => {
    // crear botones para respuestas
    const button = document.createElement("button");
    button.className = "btn-answers";

    // crear span literales & respuestas
    const spanLiteral = document.createElement("span");
    spanLiteral.className = "literal";
    spanLiteral.textContent = literals[index];

    const spanAnswer = document.createElement("span");
    spanAnswer.className = "answer";
    spanAnswer.textContent = answer;

    // añadir span a botones
    button.appendChild(spanLiteral);
    button.appendChild(spanAnswer);

    button.addEventListener("click", () => checkAnswer(answer));
    app.contentAnswers.appendChild(button);
  });
}

// funcion para barajar respuestas
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
