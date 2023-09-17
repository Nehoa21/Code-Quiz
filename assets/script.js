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

// questions
var questions = [
  {
    question: ""
  }
]
var q2 = "";
var q3 = "";
var q4 = "";
var q5 = "";

// answers
var answers1 = ["", "", "", ""];
var amswers2 = ["", "", "", ""];
var answers3 = ["", "", "", ""];
var answers4 = ["", "", "", ""];
var answers5 = ["", "", "", ""];

var correct = true;
var timerCount = 75;

// start game when start button pushed
function startGame() {

}

// timer function
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
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