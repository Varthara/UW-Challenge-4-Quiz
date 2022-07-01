// Query selectors from game.html
var question = document.querySelector('#question')
var choices = Array.from(document.querySelectorAll('.option-text'))
var progressText = document.querySelector('#progressText')
var scoreText = document.querySelector('#score')



// Global Variables
let currentQuestion = {}
let correctAnswers = true
let score = 0
let timer = 0
let questionCounter = 0
let availableQuestions = []

const scorePoints = 10
const numberOfQuestions = 5


// Question Bank
let questions = [
	{
		question: 'Dr Venture has how many sons?',
		choice1: '0',
		choice2: '3',
		choice3: '2',
		choice4: '1',
		answer: '2',
	},
	{
		question: 'What is the number the Monarchs best Henchman?',
		choice1: '21',
		choice2: '24',
		choice3: '1',
		choice4: '99',
		answer: '21',
	},
	{
		question: 'Whos Grandfather started the Guild of Calamitous Intent?',
		choice1: 'Phantom Limb',
		choice2: 'David Bowie',
		choice3: 'The Monarch',
		choice4: 'Monstroso',
		answer: 'Phantom Limb',
	},
	{
		question: 'What does the Monarch call the Cacoon at his wedding?',
		choice1: 'The pride of the poison sky',
		choice2: 'The Cacoon of Criminality',
		choice3: 'A hive of havoc',
		choice4: 'Alpha and Omega',
		answer: 'The pride of the poison sky',
	},
	{
		question: 'What rank was Uncle Hatred with in the Guild?',
		choice1: 'Sergeant',
		choice2: 'Major',
		choice3: 'General',
		choice4: 'Captain',
		answer: 'Sergeant',
	},
]

// Function to start game
// Sets time and score to to 0
// 

function startGame() {
	questionCounter = 0
	score = 0
	timer = 30
	startTimer()
	availableQuestions = [...questions] 
	getNewQuestion()
}

// Function to set new question
function getNewQuestion() {
	document.getElementById('correctIncorrect').innerHTML = ''
	if (
		availableQuestions.length == 0 ||
		questionCounter > numberOfQuestions ||
		timer <= 0
	) {
		localStorage.setItem('mostRecentScore', score)
		return window.location.assign('./gameover.html')
	}
	questionCounter++
	progressText.innerHTML = `${questionCounter} of ${numberOfQuestions}`

	const questionRandom = Math.floor(Math.random() * availableQuestions.length)
	currentQuestion = availableQuestions[questionRandom]
	question.innerHTML = currentQuestion.question

	choices.forEach((choice) => {
		const number = choice.dataset['number']
		choice.innerHTML = currentQuestion['choice' + number]
	})
	console.log('answer: ' + currentQuestion['answer'])

	availableQuestions.splice(questionRandom, 1)

	correctAnswers = true
}
choices.forEach((choice) => {
	choice.addEventListener('click', (e) => {
		if (!correctAnswers) {
			return
		}

		correctAnswers = false
		var selectedChoice = e.target
		var selectedAnswer = selectedChoice.innerHTML

		if (currentQuestion.answer == selectedAnswer) {
			incrementScore(scorePoints)
			document.getElementById('correctIncorrect').style.color = 'green'
			document.getElementById('correctIncorrect').innerHTML = 'CORRECT'
		} else {
			document.getElementById('correctIncorrect').style.color = 'red'
			document.getElementById('correctIncorrect').innerHTML = 'INCORRECT'
			timer -= 10
		}

		setTimeout(() => {
			getNewQuestion()
		}, 1000)
	})
})
function incrementScore(num) {
	score += num
	scoreText.innerHTML = score
}

// Timer function
function startTimer() {
	var downloadTimer = setInterval(function () {
		if (timer <= 0) {
			clearInterval(downloadTimer)
			return window.location.assign('./gameover.html')
		}
		timer--
		document.getElementById('timerCountdown').innerHTML = timer
		console.log(timer)
	}, 1000)
}


startGame()