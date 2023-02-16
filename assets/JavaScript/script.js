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
    }
]
// hide start screen
let startScreenEl = document.getElementById('start-screen');
startScreenEl.setAttribute('class', 'hide');

// un-hide questions section
questionsEl.removeAttribute('class');