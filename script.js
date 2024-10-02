// sorular ve cevaplar
const questions = [
    {
        question: "Aspirin'in etken maddesi nedir?",
        answers: ["Asetaminofen", "Asetil salisilik asit", "Ibuprofen", "Naproksen"],
        correct: 1
    },
    // diğer sorular
];

// elementi al
const quizContainer = document.getElementById("quiz-container");
let currentQuestionIndex = 0;

// soruları yükle
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.addEventListener("click", () => selectAnswer(index));
        quizContainer.appendChild(button);
    });
}

// cevabı seç
function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;

    // kullanıcıya geri bildirim ver
    if (isCorrect) {
        alert("Doğru cevap!");
    } else {
        alert("Yanlış cevap! Doğru cevap: " + currentQuestion.answers[currentQuestion.correct]);
    }

    // bir sonraki soruya geç
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = "<h2>Quiz tamamlandı!</h2>";
    }
}

// ilk soruyu yükle
loadQuestion();
