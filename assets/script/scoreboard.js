var highScoresList = document.querySelector('#highScoresList')
var scores = JSON.parse(localStorage.getItem('highScores')) || []


highScoresList.innerHTML = 
userHighScore.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')