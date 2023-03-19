var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var startBtn = document.querySelector(".button");
var timerElement = document.querySelector(".timer-count");



var timer;
var timerCount;



function startQuiz() {
  timerCount = 75;
  startBtn.disabled = true;
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
  if(answerIndex === questions.correct){
    score++;
    resultEl.textContent = "Correct!"
  } else {
    resultEl.textContent = "Wrong";
    timerCount -= 10;
  }

  currentQuestion++;

  if(currentQuestion < quizQuestions.length){
    displayQuestion();
  } else {
    resultEl.textcontent = 'The Quiz is over. Your score is' + (score/quizQuestions.length);
  }
  }



//     alert("You got" + score + "/" + questions.length);


// questions.textContent = for(var i =0; i< questions.length; i++){
// };





// setitem to save initials/score to local storage
// getitem to display high scores


// adjust display for main info to go blank and then display the questions.


