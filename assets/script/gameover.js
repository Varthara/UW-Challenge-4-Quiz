const username = document.querySelector('#username')
var ScoreSaving = document.querySelector('#saveScoreBtn')
var EndScore = document.querySelector('#finalScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')

EndScore.innerHTML = mostRecentScore

ScoreSaving.addEventListener("click", function(event) {
    event.preventDefault();

    var submission = {
        initial: username.value,
        recentscore: mostRecentScore
    }
    localStorage.setItem("submission", JSON.stringify(submission));
    
});

var userHighScore = JSON.parse(localStorage.getItem('highScores'))

const perfectRun = 50






saveScoreBtn.addEventListener('click', function () {})
