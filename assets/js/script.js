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
    $answer.append($answerBtn);

});



});