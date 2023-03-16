var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var startBtn = document.createElement("button");
var timerElement = document.querySelector(".timer-count");


var timer;
var timerCount = 20;

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
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

startTimer();





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

h1El.textContent = "Coding Quiz Challenge";
infoEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score and time by ten seconds!";
startBtn.textContent = "Start";
// questions.textContent = for(var i =0; i< questions.length; i++){
// };

body.appendChild(h1El);
body.appendChild(infoEl);
body.appendChild(startBtn);
body.appendChild(questions);


h1.setAttribute("display", "none");
