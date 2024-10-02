// sorular ve cevaplar
const questions = [
    {
        question: "Aspirin'in etken maddesi nedir?",
        answers: ["A) Asetaminofen", "B) Asetil salisilik asit", "C) Ibuprofen", "D) Naproksen"],
        correct: 1 // Doğru cevap B
    },
    {
        question: "Ibuprofen hangi hastalıkta kullanılır?",
        answers: ["A) Astım", "B) Soğuk algınlığı", "C) Ağrı kesici", "D) Kanser"],
        correct: 2 // Doğru cevap C
    },
    {
        question: "Paracetamol hangi hastalıkta kullanılır?",
        answers: ["A) Mide bulantısı", "B) Ateş düşürücü", "C) Sinüzit", "D) Baş dönmesi"],
        correct: 1 // Doğru cevap B
    },
    {
        question: "Antibiyotiklerin etkili olduğu hastalık nedir?",
        answers: ["A) Viral enfeksiyon", "B) Bakteriyel enfeksiyon", "C) Grip", "D) Soğuk algınlığı"],
        correct: 1 // Doğru cevap B
    },
    {
        question: "Ciprofloxacin hangi tür enfeksiyonlarda kullanılır?",
        answers: ["A) Üriner enfeksiyon", "B) Grip", "C) Mide ağrısı", "D) Kanser"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Etkili bir antihistaminik örneği hangisidir?",
        answers: ["A) Asetaminofen", "B) Loratadin", "C) Amoksisilin", "D) Ibuprofen"],
        correct: 1 // Doğru cevap B
    },
    {
        question: "Metformin hangi hastalıkta kullanılır?",
        answers: ["A) Şeker hastalığı", "B) Hipertansiyon", "C) Kalp hastalığı", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Kodein hangi tür ilaçtır?",
        answers: ["A) Antihistaminik", "B) Ağrı kesici", "C) Antibiyotik", "D) Antidepresan"],
        correct: 1 // Doğru cevap B
    },
    {
        question: "Serotonin geri alım inhibitörleri hangi hastalıkta kullanılır?",
        answers: ["A) Depresyon", "B) Astım", "C) Kalp hastalığı", "D) Baş ağrısı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Amoksisilin hangi hastalıkta kullanılır?",
        answers: ["A) Bakteriyel enfeksiyon", "B) Viral enfeksiyon", "C) Ağrı", "D) Baş ağrısı"],
        correct: 0 // Doğru cevap A
    },
    // ... (diğer 90 soruyu buraya ekleyin)
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
        button.addEventListener("click", () => selectAnswer(index, button));
        quizContainer.appendChild(button);
    });
}

// cevabı seç
function selectAnswer(selectedIndex, button) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;

    // Doğru cevabı vurgula
    const buttons = quizContainer.querySelectorAll("button");
    buttons.forEach((btn, index) => {
        if (index === currentQuestion.correct) {
            btn.classList.add("correct");
        } else if (index === selectedIndex) {
            btn.classList.add("wrong");
        }
    });

    // Kullanıcıya geri bildirim ver
    if (isCorrect) {
        document.getElementById("result").innerText = "Doğru cevap!";
    } else {
        document.getElementById("result").innerText = "Yanlış cevap! Doğru cevap: " + currentQuestion.answers[currentQuestion.correct];
    }

    // Bir sonraki soruya geç
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            loadQuestion();
            document.getElementById("result").innerText = ""; // sonucu temizle
        }, 2000); // 2 saniye sonra yeni soru yükle
    } else {
        quizContainer.innerHTML = "<h2>Quiz tamamlandı!</h2>";
    }
}

// ilk soruyu yükle
loadQuestion();
