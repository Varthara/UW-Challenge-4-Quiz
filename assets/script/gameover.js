var username = document.querySelector('#username')
var ScoreSaving = document.querySelector('#saveScoreBtn')
var EndScore = document.querySelector('#finalScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')

var userHighScore = JSON.parse(localStorage.getItem('highScores'))

const perfectRun = 50

EndScore.innerHTML = mostRecentScore

savescores = e => {
    e.preventDefault()

    let score = {
        score: mostRecentScore,
        name: username.value 
    }

    userHighScore.push(score)

    userHighScore.sort((a,b) => {
        return b.score -a.score 
    })

    userHighScore(50)

    localStorage.setItem('highScores', JSON.stringify(userHighScore))
    window.location.assign('/')
    

}


saveScoreBtn.addEventListener('click', function () {})
