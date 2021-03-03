var $startBtn = document.querySelector("#start");
var $start = document.querySelector("#start-prompt");
var $timer = document.querySelector("#timer");
var $questionText = document.querySelector("#question-Text");
var $answer = document.querySelector("#answer");
var time = 200;

var questions = [
    {
        text: "What is the name of Han Solo’s ship?",
        answers: ["Millennium Falcon", "Flagship", "Empire Ship", "Millennium Cruiser"],
        correctAnswer: "Millennium Falcon",
    },
];
var questions = [
    {
        text: "In what month were all six original Star Wars films released?",
        answers: ["March", "June", "July", "May"],
        correctAnswer: "May",
    },
];
var questions = [
    {
        text: "Which Star Wars character is partially named after director George Lucas’ son?",
        answers: ["Rick olie", "Willrow Hood", "Dexter Jettster", "Max Rebo"],
        correctAnswer: "Dexter Jettster",
    },
];
var questions = [
    {
        text: "Which species stole the plans to the Death Star?",
        answers: ["Sullustan", "Bothan", "Rakata", "Cerean"],
        correctAnswer: "Bothan",
    },
];
var questions = [
    {
        text: "How many languages is C-3PO fluent in?",
        answers: ["Over eight million", "Over seven million", "Over six million", "Over five million"],
        correctAnswer: "Over six million",
    },
];

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



});