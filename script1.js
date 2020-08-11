$(document).ready(function () {
    const $userScore = $('#userScore');
    const $timer = $('#timer');
    const $question = $('#question');
    const $choices = $('#choices');
    const $ready = $('#ready');
    const $next = $('#next');
    const $form = $('#form');
    const $formAnswers = $('#formAnswers');

    let StartingMin = .1;
    let MinToSec = StartingMin * 60;
    let resetTimer;
    let score;
    let currentQuestion;
    let shuffleQuestions;

    function setLocalStorage() {
        localStorage.setItem('score', JSON.stringify(score));
        console.log('Set Local Works');
    };

    function getLocalStorage() {
        let storedScore = JSON.parse(localStorage.getItem(score));
        if(storedScore !== score) {
            score = storedScore
        };
        console.log('Get Local Works');
    };
    
    function countDown() {
        let minutes = Math.floor(MinToSec / 60)
        let seconds = MinToSec % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        $timer.text(`${minutes}: ${seconds}`)
        MinToSec--;
        if (MinToSec === -1) {
            reset();
        };
        console.log('Timer Started');
    };

    $ready.on('click', start) 
    
    
    function start() {
        resetTimer = setInterval(countDown, 1000)
        $ready.addClass('hide');
        $question.removeClass('hide');
        $choices.removeClass('hide');
        $next.removeClass('hide');
        setLocalStorage();
        getLocalStorage();
        console.log('Ready');
        showQuestion();
        shufflingQuestion = question.sort(function() { Math.random() - .5});
        currentQuestions = 0;
    };

    function showQuestion(question) {
        $question.text(question.quizQuestion)
        console.log('Show Question');
    }

    const question = [
        {
            quizQuestion: 'What does pop() do to an Array?', 
            answer: [
                { text: 'Adds a new Array?', correct: false },
                { text: 'Removes an Array?', correct: false },
                { text: 'Adds an Array to the middle?', correct: false },
                { text: 'Removes the last element from the Array?', correct: true},
            ]
        },
    
        {
            quizQuestion: 'What does split do to a string?', 
            answer: [
                { text: 'Turns into an object?', correct: false },
                { text: 'Turns into an Array?', correct: true },
                { text: 'Splits the string in 2?', correct: false },
                { text: 'All the Above?', correct: false },
            ]
        },
    ];

        function reset() { 
            clearInterval(resetTimer);
            $question.addClass('hide');
            $choices.addClass('hide');
            $next.addClass('hide');
            $form.removeClass('hide');
            $formAnswers.removeClass('hide');
            console.log('All Stopped, Form pops up');
    };

});

