var highScoresList = document.querySelector('#highScoresList')
var scores = JSON.parse(localStorage.getItem('highScores')) || []

var leaders = localStorage.getItem('submission')
var scoreList =document.querySelector('#scoreList')

function showLeader () {
    scoreList.textContent = leaders
    
};

showLeader();