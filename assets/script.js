var h1El = document.querySelector("h1");
var li1 = document.querySelector(".answerOne");
var li2 = document.querySelector(".answerTwo");
var li3 = document.querySelector(".answerThree");
var li4 = document.querySelector(".answerFour");
var timer = document.querySelector(".timer");


var questionOne = {
    question: "????????",
    answerOne: "wrong",
    answerTwo: "correct",
    answerThree: "wrong",
    answerFour: "wrong",
    correctAnswer: true
}

var questionTwo = {
    question: "",
    answerOne: "",
    answerTwo: "",
    answerThree: "",
    answerFour: "",
    correctAnswer: true
}

var questionThree = {
    question: "",
    answerOne: "",
    answerTwo: "",
    answerThree: "",
    answerFour: "",
    correctAnswer: true
}

var questionFour = {
    question: "",
    answerOne: "",
    answerTwo: "",
    answerThree: "",
    answerFour: "",
    correctAnswer: true
}

var questionFive = {
    question: "",
    answerOne: "",
    answerTwo: "",
    answerThree: "",
    answerFour: "",
    correctAnswer: true
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var timeLeft = 75
var currentQuestion = 0

startQuiz.addEventListener("click", displayQuestion)

function startQuiz() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft + " seconds left";
        displayQuestion();
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000)
}

function displayQuestion (num) {
    currentQuestion += num
    h1El.textContent = questionList[num].question
    li1.textContent = questionList[num].answerOne
    li2.textContent = questionList[num].answerTwo
    li3.textContent = questionList[num].answerThree
    li4.textContent = questionList[num].answerFour
}

