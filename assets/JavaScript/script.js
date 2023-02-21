let questList = document.querySelector("#questions");
let mainQuiz = document.querySelector("#quiz");
let submitButton = document.querySelector("#submitbutton");
let resultsButton = document.querySelector("#results");
let finalScore = document.querySelector("#theresults");
let letterGrade = document.querySelector("#grades");
let initials = document.querySelector("#finalScore")
let startButton = document.querySelector("#startbutton");
let questTitle = document.querySelector("#questtitle");
let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let op3 = document.querySelector("#op3");
let op4 = document.querySelector("#op4");
let timeEl = document.querySelector("#time");
let secondsLeft = 90
let iCount = 0
let cCount = 0
let Players = ""

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
    let cCount = 0;
    let iCount = 0;
    function startTimer(){
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            submissionPage();
        }
       }, 1000);
    };
    startTimer();
    questionOne();
})
function questionOne () { 
    questTitle.textContent = questOne.title;
    op1.textContent = questOne.choices[0];
    op2.textContent = questOne.choices[1];
    op3.textContent = questOne.choices[2];
    op4.textContent = questOne.choices[3];
    op1.addEventListener("click", incorrectA)
    op2.addEventListener("click",incorrectA)
    op3.addEventListener("click", correctA)
    op4.addEventListener("click",incorrectA)
    questList.addEventListener("click", questionTwo);
}
function questionTwo(){
    questTitle.textContent = questTwo.title;
    op1.textContent = questTwo.choices[0];
    op2.textContent = questTwo.choices[1];
    op3.textContent = questTwo.choices[2];
    op4.textContent = questTwo.choices[3];

    op1.addEventListener("click", incorrectA)
    op2.addEventListener("click",incorrectA)
    op3.addEventListener("click", correctA)
    op4.addEventListener("click",incorrectA)
    questList.addEventListener("click", questionThree)
}
function questionThree(){
    questTitle.textContent = questThree.title;
    op1.textContent = questThree.choices[0];
    op2.textContent = questThree.choices[1];
    op3.textContent = questThree.choices[2];
    op4.textContent = questThree.choices[3];

    op1.addEventListener("click", incorrectA)
    op2.addEventListener("click",incorrectA)
    op3.addEventListener("click", incorrectA)
    op4.addEventListener("click", correctA)
    questList.addEventListener("click", questionFour)
}
function questionFour(){
    questTitle.textContent = questFour.title;
    op1.textContent = questFour.choices[0];
    op2.textContent = questFour.choices[1];
    op3.textContent = questFour.choices[2];
    op4.textContent = questFour.choices[3];

    op1.addEventListener("click", incorrectA)
    op2.addEventListener("click",correctA)
    op3.addEventListener("click", incorrectA)
    op4.addEventListener("click",incorrectA)
    questList.addEventListener("click", questionFive)
}
function questionFive(){
    questTitle.textContent = questFive.title;
    op1.textContent = questFive.choices[0];
    op2.textContent = questFive.choices[1];
    op3.textContent = questFive.choices[2];
    op4.textContent = questFive.choices[3];

    op1.addEventListener("click", incorrectA)
    op2.addEventListener("click",incorrectA)
    op3.addEventListener("click", correctA)
    op4.addEventListener("click",incorrectA)
    questList.addEventListener("click", submissionPage)
}
function submissionPage(){
    mainQuiz.setAttribute('style', 'display:none')
    resultsButton.setAttribute('style','display:none')
    submitButton.setAttribute('class','show')
    localStorage.getItem("Correct Answers");
        localStorage.getItem("Incorrect Answers");
        letterGrade.textContent = cCount + " Correct\n" + iCount + " Incorrect";
        finalScore.setAttribute('class', 'show');
    submitButton.addEventListener('click', function(){
        // localStorage.getItem("Correct Answers");
        // localStorage.getItem("Incorrect Answers");
        // letterGrade.textContent = cCount + " Correct\n" + iCount + " Incorrect";
        // finalScore.setAttribute('class', 'show');
        localStorage.setItem("Players", initials.value);
        localStorage.setItem("High Score", cCount-iCount);
        
    })
}
// questionOne ();
// un-hide questions section
// questionsEl.removeAttribute('class');
function correctA (){
    resultsButton.setAttribute('class', 'show');
    resultsButton.textContent = "Correct";
    cCount++;
    localStorage.setItem("Correct Answers", cCount);
}
function incorrectA (){
    resultsButton.setAttribute('class','show');
    secondsLeft-10;
    resultsButton.textContent = 'Incorrect';
    iCount++;
    localStorage.setItem("Incorrect Answers", iCount);
}