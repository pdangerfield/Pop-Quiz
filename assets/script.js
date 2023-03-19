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



var questions = [
  {
    question: "What is the DOM?",
    choiceA: "Document Object Model",
    choiceB: "something",
    choiceC: "something else",
    correct: "A"
  },
  {
    question: "What is an array?",
    choiceA: "Document Object Model",
    choiceB: "A special variable, which can hold more than one value",
    choiceC: "something else",
    correct: "B"
  },
  {
    question: "How many variables can an object hold?",
    choiceA: "They can't hold any values",
    choiceB: " Don't choose me",
    choiceC: "They can hold multiple",
    correct: "C"
  },
  {
    question: "Why do we use JavaScript?",
    choiceA: "css is boring",
    choiceB: "Interact with our html/css",
    choiceC: "something else",
    correct: "B"
  },
]

var score = 0;



// for(var i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//         score ++;
//         alert("Correct!");
//     } else {
//         alert("Wrong");
//     }
//     }

//     alert("You got" + score + "/" + questions.length);


// questions.textContent = for(var i =0; i< questions.length; i++){
// };





// setitem to save initials/score to local storage
// getitem to display high scores


// adjust display for main info to go blank and then display the questions.


