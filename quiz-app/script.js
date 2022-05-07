const quizData = [
    {
        question: "The United States bought Alaska from which country?",
        a: "Canada",
        b: "Russia",
        c: "Japan",
        d: "Mexico",
        correct: "b"
    },
    {
        question: "What did the Romans call Scotland?",
        a: "Caledonia",
        b: "Gaelic",
        c: "Englando",
        d: "Scoties",
        correct: "a"
    },
    {
        question: "Which two students founded Google in 1998?",
        a: "Larry Brin and Sergey Page",
        b: "Bill Gates and Sergey Page",
        c: "Larry Page and Sergey Brin",
        d: "Bill Gates and Larry Brin",
        correct: "c"
    },
    {
        question: "In 1918 Finland declared its independence from which country?",
        a: "Denmark",
        b: "Sweden",
        c: "Norway",
        d: "Russia",
        correct: "d"
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deSelectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/4 question</h2>
                <button onclick="location.reload()">Reload Quiz</button>
            `
        }
    }
})