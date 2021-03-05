var $startBtn = document.querySelector("#startBtn");
var $startPrompt = document.querySelector("#startPrompt");
var $questionPrompt = document.querySelector("#questionPrompt")
var $timer = document.querySelector("#timer");
var $questionText = document.querySelector(".questionText");
var $answer = document.querySelector("#answer");
var $questionOptions = document.querySelector(".options")
var $highScoreBtn = document.querySelector("#highScoreBtn")
var time = 200;
var score = 0;

var timerInterval;
var currentQuestion = 0;

$startBtn.addEventListener("click", function (e) {
    $startPrompt.classList.add("hide");
    $questionPrompt.classList.remove("hide");
    $timer.classList.remove("hide");
    $startBtn.style.display = "none" 
    $questionContainer.textContent = $questionContainer[0].question
    $questionContainer[0].Answer.forEach(function(item){

    })
});

function renderQuestion() {
    $questionOptions.innerHTML = "";
    $questionText.textContent = questions[currentQuestion].text;
    questions[currentQuestion].options.forEach(function (items) {
        var $btn = document.createElement("button");
        $btn.textContent = item;
        $questionOptions.append($btn);
    });
}
var questionList = [
    {
        questionText: "What is the name of Han Solo’s ship?",
        options: [
            "Millennium Falcon",
            "Flagship",
            "Empire Ship",
            "Millennium Cruiser"
        ],
        Answer: "Millennium Falcon"
    },
    {
        questionText: "In what month were all six original Star Wars films released?",
        options: [
            "March",
            "June",
            "July",
            "May"
        ],
        Answer: "May"
    },
    {
        questionText: "Which species stole the plans to the Death Star?",
        options: [
            "Sullustan",
            "Bothan",
            "Rakata",
            "Cerean"
        ],
        Answer: "Bothan"
    },
    {
        questionText: "Which Star Wars character is partially named after director George Lucas’ son?",
        options: [
            "Rick olie",
            "Willrow Hood",
            "Dexter Jettster",
            "Max Rebo"
        ],
        Answer: "Dexter Jettster"
    },
    {
        questionText: "How many languages is C-3PO fluent in?",
        options: [
            "Over eight million",
            "Over seven million",
            "Over six million",
            "Over five million"
        ],
        Answer: "Over six million"
    }, 
];
highScoreBtn.addEventListener("click", highScoreDisplay);
function highScoreDisplay() {
    console.log("High Score");
}
$startBtn.addEventListener("click", function (e) {
    $timer.textContent = time;
    setInterval(function () {
        time--;
        $timer.textContent = time;
    }, 2000);
    $startBtn.style.display = "none";
    updateQuestion(0)
});

function updateQuestion($index) {
    console.log("updateing questions")
    var currentQuestion = questionList[$index];
    $questionPrompt.innerText = currentQuestion.questionText
    for (question of questionList) {
        console.log(question);
        $questionBox = document.getElementById("questionContainer");
        $questionHeader = document.createElement("h2");
        $questionHeader.textContent = question.questionText;
        $questionBox.append($questionHeader)
        for (option of question.options) {
            console.log(option)
            optionBtn = document.createElement("button");
            optionBtn.textContent = option
            $questionBox.append(optionBtn)
            $questionBox.append(document.createElement("br"))

            var isCorrect = option == question.Answer;
            if (isCorrect) {
                optionBtn.addEventListener("click", handleCorrectAnswerClick);
            }
            else {
                optionBtn.addEventListener("click", handleWrongAnswerClick);
            }
        }
    }
}
function handleCorrectAnswerClick() {
    console.log("correct")
    score++;
}
function handleWrongAnswerClick() {
    console.log("wrong")
    score--;
    time -= 30;
}
var correctAnswerHandler = function () {
       score++;
       $highScoreBtn.innerText = score;
       updateQuestion($index + 1)
       $optionA.remove($optionA.children[1])
    }
var wrongAnswerHandler = function () {
       score--;
       $highScoreBtn.innerText = score;
       updateQuestion($index + 1)
       $optionB.remove($optionB.children[1])
    }
