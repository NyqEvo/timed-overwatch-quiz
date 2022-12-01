var h1El = document.querySelector("h1");
var li1 = document.querySelector(".answerOne");
var li2 = document.querySelector(".answerTwo");
var li3 = document.querySelector(".answerThree");
var li4 = document.querySelector(".answerFour");
var timer = document.querySelector(".timer");
var startButton = document.querySelector(".start");


var questionOne = {
    question: "why",
    answerOne: ["wrong", false],
    answerTwo: ["correct", true],
    answerThree: ["wrong", false],
    answerFour: ["wrong", false]
}

var questionTwo = {
    question: "stuff",
    answerOne: ["wrong", false],
    answerTwo: ["wrong", false],
    answerThree: ["wrong", false],
    answerFour: ["correct", true]
}

var questionThree = {
    question: "why tho",
    answerOne: ["wrong", false],
    answerTwo: ["correct", true],
    answerThree: ["wrong", false],
    answerFour: ["wrong", false]
}

var questionFour = {
    question: "also stuff",
    answerOne: ["correct", true],
    answerTwo: ["wrong", false],
    answerThree: ["wrong", false],
    answerFour: ["wrong", false]
}

var questionFive = {
    question: "thing",
    answerOne: ["wrong", false],
    answerTwo: ["correct", true],
    answerThree: ["wrong", false],
    answerFour: ["wrong", false]
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var timeLeft = 75;
var currentQuestion = 0;
var correctAnswer = false;

function startQuiz() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft + " seconds left";
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            //endQuiz()
        }
    }, 1000)
    displayQuestion(currentQuestion);
}

function displayQuestion(num) {
    //if (currentQuestion > 4) {}
    h1El.textContent = questionList[num].question
    li1.textContent = questionList[num].answerOne[0]
    if (questionList[num].answerOne[1]){
        li1.setAttribute("id","true")
    }
    li2.textContent = questionList[num].answerTwo[0]
    if (questionList[num].answerTwo[1]){
        li2.setAttribute("id","true")
    }
    li3.textContent = questionList[num].answerThree[0]
    if (questionList[num].answerThree[1]){
        li3.setAttribute("id","true")
    }
    li4.textContent = questionList[num].answerFour[0]
    if (questionList[num].answerFour[1]){
        li4.setAttribute("id","true")
    }
    currentQuestion++
}

function nextQuestion(answer) {
    if (answer !== "true") {
            timeLeft -= 15;
            displayQuestion(currentQuestion);
            //endQuiz()
    } else {
        var button = document.getElementById("true")
        button.removeAttribute("id")
        displayQuestion(currentQuestion);
    }
}

startButton.addEventListener("click", startQuiz);
// li1.addEventListener("click", nextQuestion);
// li2.addEventListener("click", nextQuestion);
// li3.addEventListener("click", nextQuestion);
// li4.addEventListener("click", nextQuestion);
