let numberOne = getElementById("#Question1")
let questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
   {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
   {
        title: 'Arrays in JavaScript can be used to store _____',
        choices:['numbers and strings', 'other arrays', 'booleans','all of the above'],
        answer:['all of the above'],
    },
    {
        title: 'String values must be enclosed with ____ when being assigned to variables',
        choices:['commas','curly brackets', 'quotes', 'parentheses'],
        answer:['curly brackets'],
    },
   {
        title:'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices:['JavaScript', 'terminal/bash','for loops','console.log'],
        answer:['for loops'],
    }
]
questions[1].text
// hide start screen
let startScreenEl = document.getElementById('start-screen');
startScreenEl.setAttribute('class', 'hide');

// un-hide questions section
questionsEl.removeAttribute('class');