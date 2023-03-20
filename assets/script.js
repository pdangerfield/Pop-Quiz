var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var startBtn = document.querySelector(".button");
var timerElement = document.querySelector(".timer-count");
var scoreEl = document.querySelector("#score");
var initialsForm = document.querySelector("#initials-form");
var initialsInput = document.querySelector("#initials");


var timer;
var timerCount;
var score;
var initials;




function startQuiz() {
  timerCount = 75;
  startBtn.disabled = true;
  score = 0;
  startTimer()
  displayQuestion()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = "Time:" + timerCount;
    // if (timerCount >= 0) {
    //   // Tests if win condition is met
    //   if (isWin && timerCount > 0) {
    //     // Clears interval and stops timer
    //     clearInterval(timer);
    //   }
    // }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);

    }
  }, 1000);
}

startBtn.addEventListener("click", startQuiz);



var quizQuestions = [
  {
    question: "What is the DOM?",
    answers: ["Document Object Model", "something", "something else"],
    correct: 0
  },
  {
    question: "What is an array?",
    answers: ["Document Object Model", "A special variable, which can hold more than one value", "something else"],
    correct: 1
  },
  {
    question: "How many variables can an object hold?",
    answers: ["They can't hold any values", " Don't choose me", "They can hold multiple"],
    correct: 2
  },
  {
    question: "Why do we use JavaScript?",
    answers: ["css is boring", "Interact with our html/css", "something else"],
    correct: 1
  }
];

var currentQuestion = 0;
var score = 0;


function displayQuestion() {
  var questions = quizQuestions[currentQuestion];
  var questionEl = document.getElementById("question-container");
  var answersEl = document.getElementById("answer-container");

  questionEl.textContent = questions.question;

  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.firstChild);
  }

  questions.answers.forEach((answer, index) => {
    var answerEl = document.createElement("button");
    answerEl.textContent = answer;
    answerEl.addEventListener("click", () => {
      checkAnswer(index);
    });
    answersEl.appendChild(answerEl)

  });
}

function checkAnswer(answerIndex) {
  var questions = quizQuestions[currentQuestion];
  var resultEl = document.getElementById("feedback-container")
  if (answerIndex === questions.correct) {
    score++;
    resultEl.textContent = "Correct!"
  } else {
    resultEl.textContent = "Wrong";
    timerCount -= 10;
  }

  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }

}

function addGoBackBtn(){
  var goBackBtn = document.createElement("button");
  goBackBtn.textContent = "Go Back";
  goBackBtn.addEventListener("click", function(){
    location.reload();
  });
  body.appendChild(goBackBtn);
}

function endQuiz() {
  clearInterval(timer);
  scoreEl.textContent = score;
  document.getElementById("score-container").style.display = "block";
  addGoBackBtn();
}

initialsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  initials = initialsInput.value.trim().toUpperCase();
  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push({
    initials: initials,
    score: score
  });
  localStorage.setItem("scores", JSON.stringify(scores));
  
});












// setitem to save initials/score to local storage
// getitem to display high scores





