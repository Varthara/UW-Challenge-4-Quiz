var highScoresList = document.querySelector('#highScoresList')
var scores = JSON.parse(localStorage.getItem('highScores')) || []

var leaders = localStorage.getItem('submission')


if (username){
    Text.textContent = leaders
}