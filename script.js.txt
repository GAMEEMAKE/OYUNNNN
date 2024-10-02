// 100 soruluk dizi
const questions = [
    {
        question: "Paracetamol hangi tür bir ilaçtır?",
        answers: ["A) Ağrı kesici", "B) Antidepresan", "C) Antihistaminik", "D) Anksiyolitik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ibuprofen hangi tür bir ilaçtır?",
        answers: ["A) Ağrı kesici", "B) Antihistaminik", "C) Antidepresan", "D) Steroid"],
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
        question: "Simvastatin hangi hastalıkta kullanılır?",
        answers: ["A) Kolesterol yüksekliği", "B) Kanser", "C) Hipertansiyon", "D) Diabet"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Metformin hangi hastalıkta kullanılır?",
        answers: ["A) Şeker hastalığı", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Lisinopril hangi tür ilaçtır?",
        answers: ["A) ACE inhibitörü", "B) Beta bloker", "C) Antihipertansif", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Amlodipin hangi tür ilaçtır?",
        answers: ["A) Kalsiyum kanal blokeri", "B) ACE inhibitörü", "C) Diüretik", "D) Antihipertansif"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Amoksisilin hangi hastalıkta kullanılır?",
        answers: ["A) Bakteriyel enfeksiyon", "B) Viral enfeksiyon", "C) Kanser", "D) Kalp hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Metoprolol hangi tür ilaçtır?",
        answers: ["A) Beta bloker", "B) ACE inhibitörü", "C) Antihipertansif", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Sertalin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Levotiroksin hangi hastalıkta kullanılır?",
        answers: ["A) Hipotiroidizm", "B) Hipertiroidizm", "C) Kalp hastalığı", "D) Diabet"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Simetikon hangi hastalıkta kullanılır?",
        answers: ["A) Gaz giderici", "B) Antibiyotik", "C) Ağrı kesici", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Laktuloz hangi hastalıkta kullanılır?",
        answers: ["A) Kabızlık", "B) İshal", "C) Mide bulantısı", "D) Kalp hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Deksametazon hangi tür ilaçtır?",
        answers: ["A) Steroid", "B) Antihistaminik", "C) Antibiyotik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Bisoprolol hangi tür ilaçtır?",
        answers: ["A) Beta bloker", "B) ACE inhibitörü", "C) Antihipertansif", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Klotrimazol hangi hastalıkta kullanılır?",
        answers: ["A) Mantar enfeksiyonu", "B) Bakteriyel enfeksiyon", "C) Viral enfeksiyon", "D) Kanser"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Alprazolam hangi tür ilaçtır?",
        answers: ["A) Anksiyolitik", "B) Antidepresan", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ketanserin hangi tür ilaçtır?",
        answers: ["A) Antihipertansif", "B) Analjezik", "C) Antibiyotik", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Asetaminofen hangi tür ilaçtır?",
        answers: ["A) Ağrı kesici", "B) Antidepresan", "C) Antihistaminik", "D) Anksiyolitik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Alopurinol hangi hastalıkta kullanılır?",
        answers: ["A) Gut hastalığı", "B) Kalp hastalığı", "C) Şeker hastalığı", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Diltiazem hangi tür ilaçtır?",
        answers: ["A) Kalsiyum kanal blokeri", "B) ACE inhibitörü", "C) Beta bloker", "D) Antihipertansif"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Aripiprazol hangi hastalıkta kullanılır?",
        answers: ["A) Şizofreni", "B) Depresyon", "C) Anksiyete", "D) Bipolar bozukluk"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Furosemid hangi tür ilaçtır?",
        answers: ["A) Diüretik", "B) Antihipertansif", "C) Beta bloker", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Eritromisin hangi hastalıkta kullanılır?",
        answers: ["A) Bakteriyel enfeksiyon", "B) Viral enfeksiyon", "C) Kanser", "D) Kalp hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Rivastigmin hangi hastalıkta kullanılır?",
        answers: ["A) Alzheimer hastalığı", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Sildenafil hangi hastalıkta kullanılır?",
        answers: ["A) Ereksiyon problemi", "B) Mide bulantısı", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Atorvastatin hangi hastalıkta kullanılır?",
        answers: ["A) Kolesterol yüksekliği", "B) Kanser", "C) Hipertansiyon", "D) Diabet"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Fenitoin hangi hastalıkta kullanılır?",
        answers: ["A) Epilepsi", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Asetilkolin hangi tür ilaçtır?",
        answers: ["A) Nörotransmitter", "B) Antidepresan", "C) Analjezik", "D) Antihistaminik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Buspiron hangi tür ilaçtır?",
        answers: ["A) Anksiyolitik", "B) Antidepresan", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Hydroxyzine hangi tür ilaçtır?",
        answers: ["A) Antihistaminik", "B) Anksiyolitik", "C) Antidepresan", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Topiramat hangi hastalıkta kullanılır?",
        answers: ["A) Epilepsi", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Venlafaksin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Dopamin hangi tür ilaçtır?",
        answers: ["A) Nörotransmitter", "B) Antidepresan", "C) Analjezik", "D) Antihistaminik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Mirtazapin hangi hastalıkta kullanılır?",
        answers: ["A) Depresyon", "B) Anksiyete", "C) Kalp hastalığı", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ranitidin hangi tür ilaçtır?",
        answers: ["A) Antihistaminik", "B) Antibiyotik", "C) Proton pompa inhibitörü", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Rifampisin hangi hastalıkta kullanılır?",
        answers: ["A) Tüberküloz", "B) Viral enfeksiyon", "C) Kanser", "D) Kalp hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Gentamisin hangi hastalıkta kullanılır?",
        answers: ["A) Bakteriyel enfeksiyon", "B) Viral enfeksiyon", "C) Kanser", "D) Kalp hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Karvedilol hangi tür ilaçtır?",
        answers: ["A) Beta bloker", "B) ACE inhibitörü", "C) Antihipertansif", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Deksametazon hangi hastalıkta kullanılır?",
        answers: ["A) İnflamasyon", "B) Astım", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Klemastin hangi tür ilaçtır?",
        answers: ["A) Antihistaminik", "B) Antidepresan", "C) Analjezik", "D) Antibiyotik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Levodopa hangi hastalıkta kullanılır?",
        answers: ["A) Parkinson hastalığı", "B) Hipertansiyon", "C) Kalp hastalığı", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Azitromisin hangi hastalıkta kullanılır?",
        answers: ["A) Bakteriyel enfeksiyon", "B) Viral enfeksiyon", "C) Kanser", "D) Kalp hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Citalopram hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Naltrekson hangi hastalıkta kullanılır?",
        answers: ["A) Alkol bağımlılığı", "B) Kalp hastalığı", "C) Şeker hastalığı", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Pantoprazol hangi tür ilaçtır?",
        answers: ["A) Proton pompa inhibitörü", "B) Antihistaminik", "C) Analjezik", "D) Antibiyotik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Amlodipin hangi tür ilaçtır?",
        answers: ["A) Kalsiyum kanal blokeri", "B) Beta bloker", "C) Antihipertansif", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Venlafaksin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Duloksetin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Sakubitril hangi tür ilaçtır?",
        answers: ["A) Kalp yetmezliği", "B) Hipertansiyon", "C) Astım", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Valproat hangi hastalıkta kullanılır?",
        answers: ["A) Epilepsi", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Dexametazon hangi hastalıkta kullanılır?",
        answers: ["A) İnflamasyon", "B) Astım", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Karbamazepin hangi hastalıkta kullanılır?",
        answers: ["A) Epilepsi", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "İbuprofen hangi tür ilaçtır?",
        answers: ["A) Ağrı kesici", "B) Antidepresan", "C) Antihistaminik", "D) Anksiyolitik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Sildenafil hangi hastalıkta kullanılır?",
        answers: ["A) Ereksiyon bozukluğu", "B) Mide bulantısı", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Levotiroksin hangi hastalıkta kullanılır?",
        answers: ["A) Hipotiroidizm", "B) Hipertiroidizm", "C) Kalp hastalığı", "D) Diabet"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Flutikazon hangi tür ilaçtır?",
        answers: ["A) Kortikosteroid", "B) Antihistaminik", "C) Analjezik", "D) Antibiyotik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Alprostadil hangi hastalıkta kullanılır?",
        answers: ["A) Ereksiyon bozukluğu", "B) Mide bulantısı", "C) Kanser", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Asetaminofen hangi tür ilaçtır?",
        answers: ["A) Ağrı kesici", "B) Antidepresan", "C) Antihistaminik", "D) Anksiyolitik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Rocuronium hangi tür ilaçtır?",
        answers: ["A) Kas gevşetici", "B) Analjezik", "C) Antihistaminik", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Dopamin hangi tür ilaçtır?",
        answers: ["A) Nörotransmitter", "B) Antidepresan", "C) Analjezik", "D) Antihistaminik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Nesiritid hangi hastalıkta kullanılır?",
        answers: ["A) Kalp yetmezliği", "B) Hipertansiyon", "C) Astım", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ketanserin hangi tür ilaçtır?",
        answers: ["A) Antihipertansif", "B) Analjezik", "C) Antibiyotik", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Sakkaroz hangi tür ilaçtır?",
        answers: ["A) Şeker", "B) Antihistaminik", "C) Analjezik", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ketotifen hangi tür ilaçtır?",
        answers: ["A) Antihistaminik", "B) Antidepresan", "C) Analjezik", "D) Antibiyotik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Propranolol hangi tür ilaçtır?",
        answers: ["A) Beta bloker", "B) ACE inhibitörü", "C) Antihipertansif", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Klorokin hangi hastalıkta kullanılır?",
        answers: ["A) Sıtma", "B) Hipertansiyon", "C) Kalp hastalığı", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Zolpidem hangi tür ilaçtır?",
        answers: ["A) Hipnotik", "B) Antidepresan", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Alprazolam hangi tür ilaçtır?",
        answers: ["A) Anksiyolitik", "B) Antidepresan", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Feniramin hangi tür ilaçtır?",
        answers: ["A) Antihistaminik", "B) Antidepresan", "C) Analjezik", "D) Antibiyotik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Oksikodon hangi tür ilaçtır?",
        answers: ["A) Analjezik", "B) Antidepresan", "C) Antihistaminik", "D) Anksiyolitik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Sertralin hangi tür ilaçtır?",
        answers: ["A) Antidepresan", "B) Anksiyolitik", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Mebendazol hangi hastalıkta kullanılır?",
        answers: ["A) Parazit enfeksiyonu", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Simetikon hangi tür ilaçtır?",
        answers: ["A) Gaz giderici", "B) Antihistaminik", "C) Analjezik", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ustekinumab hangi hastalıkta kullanılır?",
        answers: ["A) Psoriasis", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Omalizumab hangi hastalıkta kullanılır?",
        answers: ["A) Alerjik astım", "B) Kalp hastalığı", "C) Şeker hastalığı", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "İbandronat hangi hastalıkta kullanılır?",
        answers: ["A) Osteoporoz", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Etanercept hangi hastalıkta kullanılır?",
        answers: ["A) Romatoid artrit", "B) Kalp hastalığı", "C) Şeker hastalığı", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Trometamol hangi tür ilaçtır?",
        answers: ["A) Ağrı kesici", "B) Antidepresan", "C) Antihistaminik", "D) Anksiyolitik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Omeprazol hangi tür ilaçtır?",
        answers: ["A) Proton pompa inhibitörü", "B) Antihistaminik", "C) Analjezik", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Dapagliflozin hangi hastalıkta kullanılır?",
        answers: ["A) Şeker hastalığı", "B) Kalp hastalığı", "C) Hipertansiyon", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Apremilast hangi hastalıkta kullanılır?",
        answers: ["A) Psoriasis", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Guanfacine hangi tür ilaçtır?",
        answers: ["A) Antihipertansif", "B) Antidepresan", "C) Analjezik", "D) Antihistaminik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Memantin hangi hastalıkta kullanılır?",
        answers: ["A) Alzheimer hastalığı", "B) Kalp hastalığı", "C) Astım", "D) Hipertansiyon"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Telmisartan hangi tür ilaçtır?",
        answers: ["A) Antihipertansif", "B) Analjezik", "C) Antidepresan", "D) Antihistaminik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Asetilsistein hangi hastalıkta kullanılır?",
        answers: ["A) Alerjik astım", "B) Kalp hastalığı", "C) Şeker hastalığı", "D) Karaciğer hasarı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Metformin hangi hastalıkta kullanılır?",
        answers: ["A) Şeker hastalığı", "B) Kalp hastalığı", "C) Hipertansiyon", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Nimesulid hangi tür ilaçtır?",
        answers: ["A) Ağrı kesici", "B) Antidepresan", "C) Antihistaminik", "D) Anksiyolitik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Ketanserin hangi tür ilaçtır?",
        answers: ["A) Antihipertansif", "B) Analjezik", "C) Antibiyotik", "D) Antidepresan"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Guaifenesin hangi tür ilaçtır?",
        answers: ["A) Öksürük giderici", "B) Antidepresan", "C) Antihistaminik", "D) Analjezik"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Tamsulosin hangi hastalıkta kullanılır?",
        answers: ["A) İdrar yolu tıkanıklığı", "B) Hipertansiyon", "C) Kalp hastalığı", "D) Şeker hastalığı"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Asparaginaz hangi hastalıkta kullanılır?",
        answers: ["A) Kanser", "B) Kalp hastalığı", "C) Şeker hastalığı", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Prednizon hangi hastalıkta kullanılır?",
        answers: ["A) İnflamasyon", "B) Kalp hastalığı", "C) Şeker hastalığı", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Sitagliptin hangi hastalıkta kullanılır?",
        answers: ["A) Şeker hastalığı", "B) Kalp hastalığı", "C) Hipertansiyon", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Gabapentin hangi hastalıkta kullanılır?",
        answers: ["A) Sinir ağrısı", "B) Kalp hastalığı", "C) Şeker hastalığı", "D) Astım"],
        correct: 0 // Doğru cevap A
    },
    {
        question: "Klasik İlaçların Kullanım Alanları",
        answers: ["A) Psikiyatrik hastalıklar", "B) Kardiyovasküler hastalıklar", "C) Enfeksiyon hastalıkları", "D) Hepsi"],
        correct: 3 // Doğru cevap D
    }
]
