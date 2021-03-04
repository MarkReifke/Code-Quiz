var $startBtn = document.querySelector("#startbtn");
var $statPrompt = document.querySelector("#start-prompt");
var $questionPrompt = document.querySelector("#question-prompt")
var $timer = document.querySelector("#timer");
var $questionText = document.querySelector("#question-Text");
var $answer = document.querySelector("#answer");
var $questionOptions = document.querySelector("#options")
var time = 200;

var timerInterval;
var currentQuestion = 0;

$startBtn.addEventListener("click", function (e) {
    $statPrompt.classList.add("hide");
    $questionPrompt.classList.remove("hide");
    $timer.classList.remove("hide");
}

function renderQuestion() {
    $questionOptions.innerHTML = "";
    $questionText.textContent = questions[currentQuestion].text;
    questions[currentQuestion].options.forEach(function (items) {
        var $btn = document.createElement("button");
        $btn.textContent = item;
        $questionOptions.append($btn);
    });
}

$questionOptions.addEventListener("click", function (e) {
    if (!e.target.matches("button")) return;

    var val = e.target.textContent;
    if (val === questions[currentQuestion].correctAnswer) {
        console.log("Correct! Great Job");
    } else {
        console.log("Sorry That isnt Correct")
    }

    currentQuestion++;

    if(currentQuestion === questions.length){     
    } else {
        renderQuestion();
    }
});

var questions = [
    {
        question: "What is the name of Han Solo’s ship?",
        A: "Millennium Falcon",
        B: "Flagship",
        C: "Empire Ship",
        D: "Millennium Cruiser",
        Answer: "A" 
    },
    {
        question: "In what month were all six original Star Wars films released?",
        A: "March",
        B: "June",
        C: "July",
        D: "May",
        Answer: "D" 
    },
    {
        question: "Which Star Wars character is partially named after director George Lucas’ son?",
        A: "Rick olie",
        B: "Willrow Hood",
        C: "Dexter Jettster",
        D: "Max Rebo",
        Answer: "C" 
    },
    {
        question: "Which species stole the plans to the Death Star?",
        A: "Sullustan",
        B: "Bothan",
        C: "Rakata",
        D: "Cerean",
        Answer: "B" 
    },
    {
        question: "How many languages is C-3PO fluent in?",
        A: "Over eight million",
        B: "Over seven million",
        C: "Over six million",
        D: "Over five million",
        Answer: "C" 
    },
];
highScoreBtn.addEventListener("click", highScoreDisplay);
function highScoreDisplay () {
    console.log("High Score");
}

$startBtn.addEventListener("click", function (e) {
    $timer.textContent = time;
    setInterval(function () {
        time--;
        $timer.textContent = time;          
}, 2000); 

$start.style.display = "none";

$questionText.textContent = question[0].text;

$questionText.textContent = question[0].text;
question[0].answers.forEach(function(item){
    var $answerBtn = document.createElement("button");
    $answerBtn.textContent = item;
    $answerBtn.addEventListener("click", handleAnswerClick);
    $answer.append($answerBtn);

});



