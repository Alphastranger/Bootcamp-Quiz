let questList = document.querySelector("#questions");
let mainQuiz = document.querySelector("#quiz");
let submitButton = document.querySelector("#submitbutton");
let resultsButton = document.querySelector("#results");
let startButton = document.querySelector("#startbutton");
let questTitle = document.querySelector("#questtitle");
let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let op3 = document.querySelector("#op3");
let op4 = document.querySelector("#op4");
let timeEl = document.querySelector("#time");
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
        startScreenEl.setAttribute('style', 'display:none');
        mainQuiz.removeAttribute('class')
    }
    function startTimer(){
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
    };
})
function questionOne () { 
    questTitle.textContent = questOne.title;
    op1.textContent = questOne.choices[0];
    op2.textContent = questOne.choices[1];
    op3.textContent = questOne.choices[2];
    op4.textContent = questOne.choices[3];
}
questionOne ();
// un-hide questions section
// questionsEl.removeAttribute('class');
