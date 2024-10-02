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
    {
        question: "Loratadin ne tür bir ilaçtır?",
        answers: ["A) Antihistaminik", "B) Antibiyotik", "C) Ağrı kesici", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Siklosporin hangi tür hastalıkta kullanılır?",
        answers: ["A) Kanser", "B) Bağışıklık sistemi hastalıkları", "C) Kalp hastalığı", "D) Mide ülseri"],
        correct: 1 // Doğru cevap B
    },
    {
        question: "Furosemid ne tür bir ilaçtır?",
        answers: ["A) Diüretik", "B) Antihipertansif", "C) Antibiyotik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Simvastatin hangi hastalıkta kullanılır?",
        answers: ["A) Kolesterol yüksekliği", "B) Şeker hastalığı", "C) Kalp yetmezliği", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Kaptopril hangi tür ilaçtır?",
        answers: ["A) Beta bloker", "B) ACE inhibitörü", "C) Diüretik", "D) Antihistaminik"],
        correct: 1 // Doğru cevap B
    },
    {
        question: "Levotiroksin hangi hastalıkta kullanılır?",
        answers: ["A) Hipotiroidi", "B) Hipertansiyon", "C) Diyabet", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Dexametazon hangi tür ilaçtır?",
        answers: ["A) Antihistaminik", "B) Steroid", "C) Antibiyotik", "D) Analjezik"],
        correct: 1 // Doğru cevap B
    },
    {
        question: "Klorokin hangi hastalıkta kullanılır?",
        answers: ["A) Malarya", "B) Şeker hastalığı", "C) Kanser", "D) Mide ülseri"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Fluoksetin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Antipsikotik", "C) Anksiyolitik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Amlodipin hangi tür hastalıkta kullanılır?",
        answers: ["A) Astım", "B) Hipertansiyon", "C) Kalp yetmezliği", "D) Şeker hastalığı"],
        correct: 1 // Doğru cevap B
    },
    {
        question: "Bisepril hangi tür ilaçtır?",
        answers: ["A) Beta bloker", "B) ACE inhibitörü", "C) Diüretik", "D) Antihistaminik"],
        correct: 1 // Doğru cevap B
    },
    {
        question: "Atorvastatin hangi hastalıkta kullanılır?",
        answers: ["A) Kolesterol yüksekliği", "B) Hipertansiyon", "C) Kalp yetmezliği", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Esomeprazol hangi tür ilaçtır?",
        answers: ["A) Proton pompa inhibitörü", "B) Antibiyotik", "C) Antihistaminik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Glibenklamid hangi hastalıkta kullanılır?",
        answers: ["A) Şeker hastalığı", "B) Hipertansiyon", "C) Kalp hastalığı", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Rifampisin hangi hastalıkta kullanılır?",
        answers: ["A) Tüberküloz", "B) Astım", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Digoksin hangi tür ilaçtır?",
        answers: ["A) Kalp ilacı", "B) Antihistaminik", "C) Antibiyotik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Alendronat hangi hastalıkta kullanılır?",
        answers: ["A) Osteoporoz", "B) Şeker hastalığı", "C) Kanser", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Krebanin hangi tür ilaçtır?",
        answers: ["A) Antihistaminik", "B) Antibiyotik", "C) Antidepresan", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Fenitoin hangi hastalıkta kullanılır?",
        answers: ["A) Epilepsi", "B) Astım", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Metoprolol hangi tür ilaçtır?",
        answers: ["A) Beta bloker", "B) Diüretik", "C) Antihipertansif", "D) Antibiyotik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Bupropion hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ropinirol hangi hastalıkta kullanılır?",
        answers: ["A) Parkinson hastalığı", "B) Hipertansiyon", "C) Kalp hastalığı", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Dopamin hangi tür hastalıkta kullanılır?",
        answers: ["A) Parkinson hastalığı", "B) Mide bulantısı", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Mirtazapin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Naproksen hangi hastalıkta kullanılır?",
        answers: ["A) Ağrı kesici", "B) Antihistaminik", "C) Antibiyotik", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Prednizon hangi tür ilaçtır?",
        answers: ["A) Steroid", "B) Antihistaminik", "C) Antibiyotik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ketorolak hangi hastalıkta kullanılır?",
        answers: ["A) Ağrı kesici", "B) Antihistaminik", "C) Antibiyotik", "D) Steroid"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Acetylcysteine hangi hastalıkta kullanılır?",
        answers: ["A) Akciğer hastalığı", "B) Kalp hastalığı", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Tamsulosin hangi hastalıkta kullanılır?",
        answers: ["A) İdrar yolu hastalıkları", "B) Astım", "C) Kalp hastalığı", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Tramadol hangi tür ilaçtır?",
        answers: ["A) Ağrı kesici", "B) Antihistaminik", "C) Antibiyotik", "D) Anksiyolitik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Bacitracin hangi hastalıkta kullanılır?",
        answers: ["A) Bakteriyel enfeksiyon", "B) Viral enfeksiyon", "C) Mide bulantısı", "D) Kanser"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Daptomisin hangi tür enfeksiyonlarda kullanılır?",
        answers: ["A) Bakteriyel enfeksiyon", "B) Viral enfeksiyon", "C) Mide bulantısı", "D) Kanser"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Meropenem hangi hastalıkta kullanılır?",
        answers: ["A) Bakteriyel enfeksiyon", "B) Viral enfeksiyon", "C) Mide bulantısı", "D) Kanser"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Oseltamivir hangi hastalıkta kullanılır?",
        answers: ["A) Grip", "B) Astım", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Tamiflu hangi tür ilaçtır?",
        answers: ["A) Antiviral", "B) Antihistaminik", "C) Antibiyotik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Zanamivir hangi hastalıkta kullanılır?",
        answers: ["A) Grip", "B) Astım", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Klozapinin hangi tür ilaçtır?",
        answers: ["A) Antipsikotik", "B) Antidepresan", "C) Anksiyolitik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Aripiprazol hangi tür ilaçtır?",
        answers: ["A) Antipsikotik", "B) Antidepresan", "C) Anksiyolitik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Oksikodon hangi tür ilaçtır?",
        answers: ["A) Ağrı kesici", "B) Antihistaminik", "C) Antibiyotik", "D) Anksiyolitik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Fentanyl hangi tür ilaçtır?",
        answers: ["A) Ağrı kesici", "B) Antihistaminik", "C) Antibiyotik", "D) Anksiyolitik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Oksazepam hangi tür ilaçtır?",
        answers: ["A) Anksiyolitik", "B) Antidepresan", "C) Antihistaminik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Benzodiazepinler hangi tür hastalıkta kullanılır?",
        answers: ["A) Anksiyete", "B) Astım", "C) Kalp hastalığı", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Amitriptilin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Klozapinin hangi tür ilaçtır?",
        answers: ["A) Antipsikotik", "B) Antidepresan", "C) Anksiyolitik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Litiyum hangi tür hastalıkta kullanılır?",
        answers: ["A) Bipolar bozukluk", "B) Depresyon", "C) Anksiyete", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Buspiron hangi tür ilaçtır?",
        answers: ["A) Anksiyolitik", "B) Antidepresan", "C) Antihistaminik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ketanserin hangi tür ilaçtır?",
        answers: ["A) Antihipertansif", "B) Antidepressan", "C) Antihistaminik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Prazosin hangi hastalıkta kullanılır?",
        answers: ["A) Hipertansiyon", "B) Astım", "C) Kalp hastalığı", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Trazodon hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Fluoksetin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Sertralin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Venlafaksin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Duloksetin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ketiapin hangi tür ilaçtır?",
        answers: ["A) Antipsikotik", "B) Antidepresan", "C) Anksiyolitik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Olanzapin hangi tür ilaçtır?",
        answers: ["A) Antipsikotik", "B) Antidepresan", "C) Anksiyolitik", "D) Ağrı kesici"],
        correct: 0 // Doğru cevap A
    },
];

// Değişken tanımlamaları
let currentQuestion = 0;
let score = 0;

// DOM elementleri
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

// Oyun başlangıcı
startGame();

// Oyun başlatma fonksiyonu
function startGame() {
    currentQuestion = 0;
    score = 0;
    nextButton.classList.add("hide");
    showQuestion(questions[currentQuestion]);
}

// Soru gösterme fonksiyonu
function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = ""; // Önceki cevapları temizle
    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(index));
        answerButtons.appendChild(button);
    });
}

// Cevap seçme fonksiyonu
function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].correct;
    const buttons = answerButtons.children;

    // Doğru cevabı ve yanlış cevabı renklendir
    Array.from(buttons).forEach((button, index) => {
        if (index === correctIndex) {
            button.classList.add("correct"); // Doğru cevap yeşil
        } else {
            button.classList.add("wrong"); // Yanlış cevap kırmızı
        }
    });

    // Skor güncelle
    if (selectedIndex === correctIndex) {
        score++;
    }

    nextButton.classList.remove("hide"); // Sonraki butonunu göster
}

// Sonraki soruya geçiş fonksiyonu
function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion(questions[currentQuestion]);
        nextButton.classList.add("hide"); // Sonraki butonunu gizle
    } else {
        endGame(); // Oyun bitti
    }
}

// Oyun bitiş fonksiyonu
function endGame() {
    questionElement.innerText = `Oyun bitti! Skorunuz: ${score} / ${questions.length}`;
    answerButtons.innerHTML = ""; // Cevap butonlarını temizle
    nextButton.classList.add("hide"); // Sonraki butonunu gizle
}

// Buton olayları
nextButton.addEventListener("click", showNextQuestion);
