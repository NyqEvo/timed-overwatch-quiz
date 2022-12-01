var displayedScores = document.querySelector(".displayedScores")
var displayedScoresList = displayedScores.children[0]
var formEl = document.getElementById("high-score-form");

function addScore(event) {
    event.preventDefault();
    var name = document.getElementById("new-name").value;
    var newHighScoreSubmission = {
        name: name,
        score: getRecentFromLocalStorage()
    };
    addDataToLocalStorage(newHighScoreSubmission);
}
formEl.addEventListener('submit', addScore);

function getRecentFromLocalStorage() {
    return JSON.parse(localStorage.getItem('latest-score')) || 0;
}

 function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('high-scores')) || [];
}

function addDataToLocalStorage(data) {
    var currentlyInLocal = getFromLocalStorage(); 
    currentlyInLocal.push(data) 
    var sortedData = currentlyInLocal.sort(function(a, b) {
        return b.score - a.score;
    });
    if (sortedData.length >10) {
        sortedData.pop();
    }
    for (i=0;i<sortedData.length;i++) {
        var name = sortedData[i].name;
        var li = document.createElement("li");
        displayedScoresList.appendChild(li)
        li.textContent = "Name: " + name + "    " + "Score: " + sortedData[i].score;
    }
    localStorage.setItem('high-scores', JSON.stringify(sortedData));
}