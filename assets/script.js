// start timer when start button pushed
// function to get questions
// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score

var startBtn = document.getElementById("start-btn");
var showTimer = document.getElementById("timer");



// questions and answers
var questions = [
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

var currentQIndex = 0;
var timerCount = 0;
var timer;
var timerCount;

// start game when start button pushed
function startQuiz() {
  currentQIndex = 0;
  // showTimer.textContent = 75;
  startBtn.disabled = true;
  showQuestion();
  startTimer();
}

function showQuestion() {
  resetState();
  var currentQ = questions[currentQIndex];
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






// timer function
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount = showTimer.timerCount;
    timerCount--;
    showTimer.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

startBtn.addEventListener("click", startQuiz());

startQuiz();

