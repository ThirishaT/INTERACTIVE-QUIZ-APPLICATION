const quizData = [
  {
    question: "1.What does HTML stand for?",
    a: "Hyper Trainer Marking Language",
    b: "HyperText Markup Language",
    c: "HyperText Markdown Language",
    d: "None of the above",
    correct: "b"
  },
  {
    question: "2.Which language is used for styling web pages?",
    a: "HTML",
    b: "JQuery",
    c: "CSS",
    d: "XML",
    correct: "c"
  },
  {
    question: "3.Which is not a JavaScript Framework?",
    a: "Python Script",
    b: "JQuery",
    c: "NodeJS",
    d: "Django",
    correct: "d"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  answerBtns.forEach(btn => {
    btn.textContent = current[btn.dataset.id];
    btn.disabled = false;
    btn.style.backgroundColor = "blue";
  });
  feedbackEl.textContent = "";
}

answerBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.dataset.id;
    const correct = quizData[currentQuestion].correct;
    if (selected === correct) {
      feedbackEl.textContent = "Correct!";
      score++;
      btn.style.backgroundColor = "#2ecc71";
    } else {
      feedbackEl.textContent = `Wrong! Correct answer is: ${quizData[currentQuestion][correct]}`;
      btn.style.backgroundColor = "#e74c3c";
    }
    answerBtns.forEach(b => b.disabled = true);
    scoreEl.textContent = `Score: ${score} / ${quizData.length}`;
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizEnd();
  }
});

function quizEnd() {
  questionEl.textContent = "Quiz Completed!!!";
  document.querySelector("ul").style.display = "none";
  nextBtn.style.display = "none";
  feedbackEl.textContent = `Your Final Score: ${score} / ${quizData.length}`;
}
loadQuestion();

