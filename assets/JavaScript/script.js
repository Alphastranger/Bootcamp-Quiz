let questList = document.getElementById("#questions")
let mainQuiz = document.getElementById("#quiz")
let submitButton = document.getElementById("#submitbutton")
let resultsButton = document.getElementById("#results")
let startButton = document.getElementById("#startbutton")
let op1 = document.getElementById("op1")
let op2 = document.getElementById("op2")
let op3 = document.getElementById("op3")
let op4 = document.getElementById("op4")
let timeEl = document.getElementById("#time");
let secondsLeft = 90

// let questions = [
   questOne = {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    }
   questTwo ={
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    }
   questThree ={
        title: 'Arrays in JavaScript can be used to store _____',
        choices:['numbers and strings', 'other arrays', 'booleans','all of the above'],
        answer:['all of the above'],
    }
    questFour={
        title: 'String values must be enclosed with ____ when being assigned to variables',
        choices:['commas','curly brackets', 'quotes', 'parentheses'],
        answer:['curly brackets'],
    }
   questFive={
        title:'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices:['JavaScript', 'terminal/bash','for loops','console.log'],
        answer:['for loops'],
    }




// hide start screen
let startScreenEl = document.getElementById('start-screen');
let startMode = "show";
 startbutton.addEventListener("click",function () {
    if ( startMode==="show"){
        startMode = "hide";
        startScreenEl.setAttribute('class', 'hide');
        // function questionOne()
    }
    function startTimer(){
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
    }
})
function questionOne () { 
    mainQuiz.innerHTML = questOne.title;
    op1.innerHTML = questOne.choices[0];
    op2.innerHTML = questOne.choices[1];
    op3.innerHTML = questOne.choices[2];
    op4.innerHTML = questOne.choices[3];
}
questionOne ();
// un-hide questions section
// questionsEl.removeAttribute('class');
