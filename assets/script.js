var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var startBtn = document.createElement("button");

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
infoEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startBtn.textContent = "Start"

body.appendChild(h1El);
body.appendChild(infoEl);
body.appendChild(startBtn);