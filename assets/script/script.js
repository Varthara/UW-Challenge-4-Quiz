// global variables :

startButton = document.querySelector("#startButton")

// questions array which also needs answers
console.log("test")
var questions = [

    {
        question: "2+2?",
        answers: [3,4,5,6],
        correctAnswer: "4",
    },
    {
        question: "2+2?",
        answers: [3,4,5,6],
        correctAnswer: "4",
    },
    {
        question: "2+2?",
        answers: [3,4,5,6],
        correctAnswer: "4",
    },
    {
        question: "2+2?",
        answers: [3,4,5,6],
        correctAnswer: "4",
    }
]

console.log(question[2].answers[2]) 
// This would show block 2 and 


// current question variable that could start at 0 and move up and use current question to access question array (might need current question to start at -1)
// time left
// score

// var bt1 = querySelector("#btn-1") so on renderquestion you could change the content



// Functions:



// Start game
    // triggered by event listerned on start game button
    // start timer
    // set up first question
    // load question

// Timer
    // setInterval()
    // render to page

// load question
    // current Question++ (if current question starts at 0)
    // render the question and potential answers  to page 
    // btn1.textContext = 

// check answer 
    // check what button user clicked
    // compare the choice with current answer
    // act on right or wrong answer
        // if current answer update score and time
    // Other potential load question spot


// end game function
    // end game function gets called at the end of the timer
    // or finish last questions 
    // end game needs to cancel timer
    // ask for user inital (use text box )
        // then local storage
    // make high score visible