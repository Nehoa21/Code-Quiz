// Bring in elements
var startBtn = document.querySelector("#start-btn");
var timerSection = document.querySelector("#timer");
var intro = document.querySelector("#intro");
var questionSection = document.querySelector(".question-box");
var questions = document.querySelector('#questions');
var answers = document.querySelector('#answers');
var correct = document.querySelector('#correct');
var wrong = document.querySelector('#wrong');
var highscoresEntry = document.querySelector('.highscores-entry');
var earnedScore = document.querySelector('.earned-score');
var initials = document.querySelector('#initials');
var highscoresDisplay = document.querySelector('highscores-display');
var list = document.querySelector('#list');

// questions and answers
var questionList = [
  {
    question: "Commonly used datatypes DO NOT include:",
    choices: [
      "1. Strings",
      "2. Booleans",
      "3. Alerts",
      "4. Numbers"
    ],
    answer: "3. Alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed with:",
    choices: [
      "1. Quotes",
      "2. Curly brackets",
      "3. Parentheses",
      "4. Square brackets"
    ],
    answer: "3. Parentheses"
  },
  {
    question: "Arrays in Javascript can be used to store ____.:",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above"
    ],
    answer: "1. numbers and strings"
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choices: [
      "1. commas",
      "2. curly brackets",
      "3. quotes",
      "4. parentheses"
    ],
    answer: "3. quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. Javascript",
      "2. Terminal/bash",
      "3. for loops",
      "4. Console log"
    ],
    answer: "4. Console log"
  }
];

// Set up some variables
var timer;
var timerCount = 75;
var currentQIndex = 0;

// Start game function
function startQuiz() {
  intro.hidden = true;
  questionSection.hidden = false;
  showQuestion();
  startTimer();
}

// Timer function
function startTimer() {
  timer = setInterval(function() {
    if (timerCount >= 0) {
      timerSection.textContent = timerCount;
      timerCount--;
    }

    if (timerCount === 0) {
      questionSection.hidden = true;
      highscoresEntry.hidden = false;
      earnedScore.textContent = timerCount;
      timerSection.hidden = true;
      clearInterval(timer);
    }
  }, 1000);
}

function showQuestion() {
  resetState();
  var currentQ = questionList[currentQIndex];
  var questionN = currentQIndex + 1;
  questionEl.innerHTML = questionN + ". " + currentQ.question;

  currentQ.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    button.addEventListener('click')
  });
}

function resetState() {
  
}








startBtn.addEventListener("click", startQuiz());

startQuiz();

