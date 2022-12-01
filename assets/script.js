var box = document.querySelector("#questionBox");
var h1El = document.querySelector(".question");
var li1 = document.querySelector(".answerOne");
var li2 = document.querySelector(".answerTwo");
var li3 = document.querySelector(".answerThree");
var li4 = document.querySelector(".answerFour");
var timer = document.querySelector(".timer");
var startButton = document.querySelector(".start");
var endButton = document.querySelector(".end");


var questionOne = {
    question: "Which one of these heroes is a Support Hero?",
    answerOne: ["Junkrat", false],
    answerTwo: ["Kiriko", true],
    answerThree: ["Echo", false],
    answerFour: ["Winston", false]
}

var questionTwo = {
    question: "Which one of these heroes is the most recent addition to the game?",
    answerOne: ["Reinhardt", false],
    answerTwo: ["Orisa", false],
    answerThree: ["Lucio", false],
    answerFour: ["Junker Queen", true]
}

var questionThree = {
    question: "Which hero would be best against a flying enemy like Pharah or Echo?",
    answerOne: ["Lucio", false],
    answerTwo: ["Ashe", true],
    answerThree: ["Brigitte", false],
    answerFour: ["Genji", false]
}

var questionFour = {
    question: "Which hero is best to heal a tank?",
    answerOne: ["Ana", true],
    answerTwo: ["Lucio", false],
    answerThree: ["Brigitte", false],
    answerFour: ["Mercy", false]
}

var questionFive = {
    question: "Which of these cities is NOT a map in the game?",
    answerOne: ["New York", false],
    answerTwo: ["Beijing", true],
    answerThree: ["Tokyo", false],
    answerFour: ["Rio de Janiero", false]
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var timeLeft = 75;
var currentQuestion = 0;
var correctAnswer = false;

function endQuiz() {
    box.setAttribute("style", "visibility:hidden");
    endButton.setAttribute("style", "visibility:visible");
    localStorage.setItem('latest-score', timeLeft);
    window.location.href= "./scores.html";
}

function startQuiz() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft + " seconds left";
        if (timeLeft < 1) {
            clearInterval(timeInterval);
            timeLeft = 0;
            endQuiz();
        } else if (currentQuestion > 4) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000)
    box.setAttribute("style", "visibility:visible")
    startButton.setAttribute("style", "visibility:hidden");
    displayQuestion(currentQuestion);
}

function displayQuestion(num) {
    console.log(currentQuestion)
    if (currentQuestion > 4) {
        endQuiz()
    }
    h1El.textContent = questionList[num].question
    li1.textContent = questionList[num].answerOne[0]
    if (questionList[num].answerOne[1]){
        li1.setAttribute("id", "true")
    }
    li2.textContent = questionList[num].answerTwo[0]
    if (questionList[num].answerTwo[1]){
        li2.setAttribute("id", "true")
    }
    li3.textContent = questionList[num].answerThree[0]
    if (questionList[num].answerThree[1]){
        li3.setAttribute("id", "true")
    }
    li4.textContent = questionList[num].answerFour[0]
    if (questionList[num].answerFour[1]){
        li4.setAttribute("id", "true")
    }
}

function nextQuestion(answer) {
    if (answer !== "true") {
            timeLeft -= 15;
            currentQuestion++
            displayQuestion(currentQuestion);
    } else {
        var button = document.getElementById("true")
        button.removeAttribute("id")
        currentQuestion++
        displayQuestion(currentQuestion);
    }
}

startButton.addEventListener("click", startQuiz);