// Open Trivia Database (OpenTDB) Category ID Mapping
const CATEGORY_API_MAP = {
    "General Knowledge": 9,
    "Science": 17,
    "Computer Science": 18,
    "Mathematics": 19,
    "Sports": 21
};

// 5 Categories × 12 Multiple-Choice Questions Each (60 Questions Total - Offline Fallback)
// Scoring System: Correct = +1 Point | Wrong or Unanswered = 0 Points
const quizData = {
    "General Knowledge": [
        { question: "Which planet in our solar system is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
        { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: 3 },
        { question: "Who wrote the tragedy play 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], answer: 1 },
        { question: "What is the capital city of Japan?", options: ["Seoul", "Beijing", "Bangkok", "Tokyo"], answer: 3 },
        { question: "Which country gifted the Statue of Liberty to the United States?", options: ["United Kingdom", "Spain", "France", "Italy"], answer: 2 },
        { question: "Who painted the famous artwork 'Mona Lisa'?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: 2 },
        { question: "What is the tallest mountain in the world above sea level?", options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Denali"], answer: 2 },
        { question: "Which is the smallest continent by land area?", options: ["Europe", "Australia", "Antarctica", "South America"], answer: 1 },
        { question: "What is the official currency of the United Kingdom?", options: ["Euro", "US Dollar", "Pound Sterling", "Swiss Franc"], answer: 2 },
        { question: "Which is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: 1 },
        { question: "In which year did the Titanic sink in the North Atlantic Ocean?", options: ["1905", "1912", "1918", "1923"], answer: 1 },
        { question: "Which language has the most native speakers worldwide?", options: ["English", "Spanish", "Mandarin Chinese", "Hindi"], answer: 2 }
    ],
    "Science": [
        { question: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O", "NaCl"], answer: 2 },
        { question: "Which gas do plants absorb from the atmosphere during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
        { question: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], answer: 1 },
        { question: "What is the approximate speed of light in a vacuum?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"], answer: 0 },
        { question: "Which vitamin is produced when human skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], answer: 3 },
        { question: "What is the atomic number of Carbon?", options: ["4", "6", "8", "12"], answer: 1 },
        { question: "Which is the hardest naturally occurring substance on Earth?", options: ["Quartz", "Graphite", "Diamond", "Titanium"], answer: 2 },
        { question: "Which planet has the most moons in our solar system?", options: ["Mars", "Neptune", "Saturn", "Venus"], answer: 2 },
        { question: "What is the normal pH value of pure water at 25°C?", options: ["5", "7", "9", "14"], answer: 1 },
        { question: "Which blood type is known as the universal donor for red blood cells?", options: ["AB+", "A-", "B+", "O-"], answer: 3 },
        { question: "What is the standard SI unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: 2 },
        { question: "Which gas makes up approximately 78% of Earth's atmosphere?", options: ["Oxygen", "Argon", "Carbon Dioxide", "Nitrogen"], answer: 3 }
    ],
    "Computer Science": [
        { question: "Which language is used to define the structure of a web page?", options: ["CSS", "HTML", "JavaScript", "Python"], answer: 1 },
        { question: "What does CPU stand for?", options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Core Programming Utility"], answer: 2 },
        { question: "Which data structure operates on a Last-In, First-Out (LIFO) principle?", options: ["Queue", "Array", "Linked List", "Stack"], answer: 3 },
        { question: "Which symbol is used for single-line comments in JavaScript?", options: ["<!--", "//", "/*", "#"], answer: 1 },
        { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Program", "Hyperlink Transfer Process"], answer: 0 },
        { question: "What is the binary representation of the decimal number 10?", options: ["1001", "1010", "1100", "1110"], answer: 1 },
        { question: "What is the worst-case time complexity of Binary Search on a sorted array?", options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"], answer: 2 },
        { question: "Which CSS property is used to change the text color of an element?", options: ["font-color", "text-color", "color", "background-color"], answer: 2 },
        { question: "Which SQL statement is used to retrieve data from a database?", options: ["GET", "EXTRACT", "SELECT", "PULL"], answer: 2 },
        { question: "What does RAM stand for in computer hardware?", options: ["Read Access Memory", "Random Access Memory", "Rapid Action Module", "Run Application Memory"], answer: 1 },
        { question: "Which Git command is used to upload local repository commits to a remote repository?", options: ["git clone", "git pull", "git push", "git commit"], answer: 2 },
        { question: "Which network protocol is primarily used to securely browse websites?", options: ["FTP", "SMTP", "HTTPS", "Telnet"], answer: 2 }
    ],
    "Mathematics": [
        { question: "What is the value of Pi (π) rounded to two decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], answer: 1 },
        { question: "What is the principal square root of 144?", options: ["10", "11", "12", "14"], answer: 2 },
        { question: "If a right-angled triangle has one acute angle of 45°, what is the third angle?", options: ["35°", "45°", "55°", "60°"], answer: 1 },
        { question: "What is 15% of 200?", options: ["20", "25", "30", "35"], answer: 2 },
        { question: "Solve for x: 2x + 6 = 14", options: ["3", "4", "5", "6"], answer: 1 },
        { question: "What is the value of 5! (5 factorial)?", options: ["60", "100", "120", "150"], answer: 2 },
        { question: "What is the sum of the interior angles of a triangle?", options: ["90°", "180°", "270°", "360°"], answer: 1 },
        { question: "Which of the following is the smallest prime number?", options: ["0", "1", "2", "3"], answer: 2 },
        { question: "What is the derivative of x² with respect to x?", options: ["x", "2x", "x³", "2"], answer: 1 },
        { question: "What is the area of a rectangle with length 8 cm and width 5 cm?", options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"], answer: 2 },
        { question: "What is the value of 2 raised to the power of 5 (2⁵)?", options: ["16", "25", "32", "64"], answer: 2 },
        { question: "What is the Greatest Common Divisor (GCD) of 24 and 36?", options: ["6", "8", "12", "18"], answer: 2 }
    ],
    "Sports": [
        { question: "How many players are on the field for one standard soccer (football) team?", options: ["9", "10", "11", "12"], answer: 2 },
        { question: "In which sport would a player perform a slam dunk?", options: ["Volleyball", "Basketball", "Tennis", "Handball"], answer: 1 },
        { question: "How often are the Summer Olympic Games scheduled to be held?", options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"], answer: 2 },
        { question: "Which sport uses the scoring terms 'love', 'deuce', and 'advantage'?", options: ["Golf", "Cricket", "Tennis", "Badminton"], answer: 2 },
        { question: "What is the maximum score possible with a single three-dart turn in standard darts?", options: ["100", "150", "180", "200"], answer: 2 },
        { question: "How many rings are featured on the official Olympic flag?", options: ["4", "5", "6", "7"], answer: 1 },
        { question: "What is the standard distance of a full marathon race?", options: ["21.097 km", "40.000 km", "42.195 km", "50.000 km"], answer: 2 },
        { question: "Which country won the 2022 FIFA Men's World Cup in Qatar?", options: ["France", "Brazil", "Argentina", "Croatia"], answer: 2 },
        { question: "How many points is a shot made from beyond the arc worth in basketball?", options: ["1 point", "2 points", "3 points", "4 points"], answer: 2 },
        { question: "On which playing surface is the Wimbledon Championship contested?", options: ["Clay", "Hard Court", "Grass", "Carpet"], answer: 2 },
        { question: "How many legal balls are bowled in one standard over in cricket?", options: ["4", "5", "6", "8"], answer: 2 },
        { question: "In boxing, what does the abbreviation 'TKO' stand for?", options: ["Total Knockout", "Timed Knockout", "Technical Knockout", "Tactical Knockout"], answer: 2 }
    ]
};

// State Variables
let currentCategory = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
const QUIZ_TIME_SECONDS = 300; // 5 minutes
let timeRemaining = QUIZ_TIME_SECONDS;
let isSubmitted = false;

// DOM Elements
const welcomeScreen = document.getElementById("welcome-screen");
const categoryScreen = document.getElementById("category-screen");
const loadingScreen = document.getElementById("loading-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const backToWelcomeBtn = document.getElementById("back-to-welcome-btn");
const categoryCards = document.querySelectorAll(".category-card");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const changeCategoryBtn = document.getElementById("change-category-btn");

const currentCategoryLabel = document.getElementById("current-category-label");
const sourceBadge = document.getElementById("source-badge");
const timerBox = document.getElementById("timer-box");
const timerDisplay = document.getElementById("timer-display");
const questionCounter = document.getElementById("question-counter");
const progressPercent = document.getElementById("progress-percent");
const progressBarFill = document.getElementById("progress-bar-fill");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

// Helper: Decode HTML entities returned by OpenTDB API
function decodeHTML(htmlString) {
    const txt = document.createElement("textarea");
    txt.innerHTML = htmlString;
    return txt.value;
}

// Helper: Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Helper: Prepare randomized local fallback questions with shuffled options
function getShuffledFallbackQuestions(category) {
    const rawPool = quizData[category] || [];
    const shuffledQuestions = shuffleArray(rawPool).slice(0, 12);

    return shuffledQuestions.map(item => {
        const correctText = item.options[item.answer];
        const shuffledOpts = shuffleArray(item.options);
        return {
            question: item.question,
            options: shuffledOpts,
            answer: shuffledOpts.indexOf(correctText)
        };
    });
}

// Fetch 12 Live Random Questions from Open Trivia Database API
async function fetchLiveQuestions(category) {
    const categoryId = CATEGORY_API_MAP[category];
    const apiUrl = `https://opentdb.com/api.php?amount=12&category=${categoryId}&type=multiple`;

    const response = await fetch(apiUrl, { cache: "no-store" });
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    if (data.response_code !== 0 || !data.results || data.results.length === 0) {
        throw new Error("Invalid or empty API payload");
    }

    return data.results.map(item => {
        const decodedQuestion = decodeHTML(item.question);
        const decodedCorrect = decodeHTML(item.correct_answer);
        const decodedIncorrect = item.incorrect_answers.map(ans => decodeHTML(ans));

        const allOptions = shuffleArray([...decodedIncorrect, decodedCorrect]);
        const correctIndex = allOptions.indexOf(decodedCorrect);

        return {
            question: decodedQuestion,
            options: allOptions,
            answer: correctIndex
        };
    });
}

function showScreen(screenToShow) {
    [welcomeScreen, categoryScreen, loadingScreen, quizScreen, resultScreen].forEach(screen => {
        screen.classList.remove("active");
    });
    screenToShow.classList.add("active");
}

// Event Listeners
startBtn.addEventListener("click", () => showScreen(categoryScreen));
backToWelcomeBtn.addEventListener("click", () => showScreen(welcomeScreen));

categoryCards.forEach(card => {
    card.addEventListener("click", () => {
        const selectedCat = card.getAttribute("data-category");
        startQuiz(selectedCat);
    });
});

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
});

submitBtn.addEventListener("click", () => submitQuiz());
restartBtn.addEventListener("click", () => startQuiz(currentCategory));
changeCategoryBtn.addEventListener("click", () => {
    stopTimer();
    showScreen(categoryScreen);
});

async function startQuiz(category) {
    stopTimer();
    currentCategory = category;
    isSubmitted = false;
    submitBtn.disabled = false;

    showScreen(loadingScreen);

    try {
        currentQuestions = await fetchLiveQuestions(category);
        sourceBadge.textContent = "🌐 LIVE INTERNET API";
        sourceBadge.classList.remove("offline");
    } catch (error) {
        currentQuestions = getShuffledFallbackQuestions(category);
        sourceBadge.textContent = "📦 OFFLINE FALLBACK";
        sourceBadge.classList.add("offline");
    }

    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    currentCategoryLabel.textContent = category;

    showScreen(quizScreen);
    renderQuestion();
    startTimer();
}

function renderQuestion() {
    const totalQuestions = currentQuestions.length;
    const questionObj = currentQuestions[currentQuestionIndex];
    const qNum = String(currentQuestionIndex + 1).padStart(2, "0");
    const totalNum = String(totalQuestions).padStart(2, "0");

    questionCounter.textContent = `QUESTION ${qNum} OF ${totalNum}`;
    const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
    progressPercent.textContent = `${progress}%`;
    progressBarFill.style.width = `${progress}%`;

    questionText.textContent = `${currentQuestionIndex + 1}. ${questionObj.question}`;

    optionsContainer.innerHTML = "";
    const optionLetters = ["A", "B", "C", "D"];

    questionObj.options.forEach((optionText, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <span class="option-prefix">${optionLetters[index]}</span>
            <span>${optionText}</span>
        `;

        button.addEventListener("click", () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
    }
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    const allOptionBtns = optionsContainer.querySelectorAll(".option-btn");
    allOptionBtns.forEach((btn, idx) => {
        btn.classList.toggle("selected", idx === optionIndex);
    });
}

function startTimer() {
    stopTimer();
    timeRemaining = QUIZ_TIME_SECONDS;
    timerBox.classList.remove("danger");
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 30) {
            timerBox.classList.add("danger");
        }

        if (timeRemaining <= 0) {
            stopTimer();
            submitQuiz();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function submitQuiz() {
    if (isSubmitted) return;
    isSubmitted = true;
    submitBtn.disabled = true;
    stopTimer();

    const total = currentQuestions.length;
    let score = 0;
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    const reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = "";
    const optionLetters = ["A", "B", "C", "D"];

    currentQuestions.forEach((q, idx) => {
        const userChoice = userAnswers[idx];
        const correctChoice = q.answer;
        let statusHtml = "";
        let pointBadge = "";

        if (userChoice === null) {
            unanswered++;
            pointBadge = `<span class="point-pill zero">0 PTS (SKIPPED)</span>`;
            statusHtml = `Your Answer: <em>Not Answered</em> &nbsp;|&nbsp; Correct Answer: <strong>${optionLetters[correctChoice]}. ${q.options[correctChoice]}</strong>`;
        } else if (userChoice === correctChoice) {
            correct++;
            score += 1;
            pointBadge = `<span class="point-pill plus-one">+1 PT (CORRECT)</span>`;
            statusHtml = `Your Answer: <strong>${optionLetters[userChoice]}. ${q.options[userChoice]}</strong>`;
        } else {
            incorrect++;
            pointBadge = `<span class="point-pill zero">0 PTS (WRONG)</span>`;
            statusHtml = `Your Answer: <strong>${optionLetters[userChoice]}. ${q.options[userChoice]}</strong> &nbsp;|&nbsp; Correct Answer: <strong>${optionLetters[correctChoice]}. ${q.options[correctChoice]}</strong>`;
        }

        const reviewItem = document.createElement("div");
        reviewItem.className = "review-item";
        reviewItem.innerHTML = `
            <div class="review-header">
                <div class="review-q">${idx + 1}. ${q.question}</div>
                ${pointBadge}
            </div>
            <div class="review-ans">${statusHtml}</div>
        `;
        reviewContainer.appendChild(reviewItem);
    });

    const percentage = Math.round((score / total) * 100);

    document.getElementById("res-total").textContent = total;
    document.getElementById("res-correct").textContent = correct;
    document.getElementById("res-incorrect").textContent = incorrect;
    document.getElementById("res-unanswered").textContent = unanswered;
    document.getElementById("res-score").textContent = `${score} / ${total}`;
    document.getElementById("res-percent-text").textContent = `${percentage}%`;
    document.getElementById("score-percentage").textContent = `${percentage}%`;

    const feedbackEl = document.getElementById("feedback-message");
    if (percentage >= 80) {
        feedbackEl.textContent = "Outstanding mastery! You scored in the top tier.";
    } else if (percentage >= 50) {
        feedbackEl.textContent = "Solid performance! Review the breakdown below to sharpen your edge.";
    } else {
        feedbackEl.textContent = "Keep practicing! Review the key below and retry the category.";
    }

    showScreen(resultScreen);
}