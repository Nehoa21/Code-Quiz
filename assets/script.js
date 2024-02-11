// Bring in elements
const startBtn = document.querySelector("#start-btn");
const timerSection = document.querySelector("#timer");
const intro = document.querySelector("#intro");
const questionSection = document.querySelector(".question-box");
const questions = document.querySelector('#questions');
const answers = document.querySelector('#answers');
const correct = document.querySelector('#correct');
const wrong = document.querySelector('#wrong');
const highscoreEntry = document.querySelector('.highscore-entry');
const earnedScore = document.querySelector('#earned-score');
const userInitials = document.querySelector('#user-initials');
const highscoresList = document.querySelector('#highscores-list');
const list = document.querySelector('#list');
const submit = document.querySelector('#submit');

// questions and answers
let questionList = [
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
let timer;
let timerCount = 75;
let currentQ = 0;

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
      highscoreEntry.hidden = false;
      earnedScore.textContent = timerCount;
      timerSection.hidden = true;
      clearInterval(timer);
    }
  }, 1000);
}

// Show Questions
function showQuestion() {
  questions.textContent = questionList[currentQ].question;
  answers.innerHTML = "";
  for (let i = 0; i < questionList[currentQ].choices.length; i++) {
    let button = document.createElement('button');
    button.textContent = questionList[currentQ].choices[i];
    button.onclick = showAnswer;

    answers.appendChild(button);
  }
}

// Show Answers
function showAnswer(event) {
  let correctAnswer = questionList[currentQ].answer;
  let userAnswer = event.target.textContent

  // determine if answer is correct
  if (userAnswer === correctAnswer) {
    correct.hidden = false;
  } else {
    wrong.hidden = false;
    timerCount -= 10;
  }

  setTimeout(function() {
    correct.hidden = true;
    wrong.hidden = true;
  }, 1500);

  // determine if more questions or end of quiz
  if (currentQ < questionList.length-1) {
    currentQ++;
    showQuestion();
  } else {
    questionSection.hidden = true;
    highscoreEntry.hidden = false;
    earnedScore.textContent = timerCount;
    timerSection.hidden = true;
    clearInterval(timer);
  }
}

// Submit user top score
submit.addEventListener('click', function(event) {
  event.preventDefault();
  
  let initials = userInitials.value;
  let finalScore = timerCount;
  const topScores = JSON.parse(localStorage.getItem('list')) || [];
  let score = {
    name: initials,
    score: finalScore
  };
  topScores.push(score);
  localStorage.setItem('list', JSON.stringify(topScores));
  highscoreEntry.hidden = true;
  showHighscores();
});

// Show top score list
function showHighscores() {
  highscoresList.hidden = false;
  const topScores = JSON.parse(localStorage.getItem('list'));
  topScores.forEach(score => {
    let li = document.createElement('li');
    li.textContent = JSON.stringify(score, null, 2);
    list.appendChild(li);
  });
}

// Run start quiz function when Start Quiz button clicked
startBtn.addEventListener("click", startQuiz);