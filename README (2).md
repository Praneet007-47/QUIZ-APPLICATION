# 📝 Quiz Application

An interactive, web-based multiple-choice quiz application built with **HTML, CSS and JavaScript**. Users pick a category, answer questions one at a time, and get an instant result with their score and percentage.

> Mini Project 4 — Bosscoder School of Technology

---

## 📌 Objectives

- Improve users' knowledge through interactive quizzes.
- Provide a simple, user-friendly learning experience.
- Test knowledge across different subjects.
- Calculate scores automatically using JavaScript.
- Practise JavaScript events, conditions, arrays, objects and functions.

---

## ✨ Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | Welcome Page | App title, short introduction and a **Start Quiz** button |
| 2 | Category Selection | 4 categories, each with its own set of 10 questions |
| 3 | Multiple-Choice Questions | One question at a time, four options (A–D), one answer allowed, selected option is highlighted |
| 4 | Next / Previous | Selected answers are saved when moving between questions; Previous is disabled on the first question; Next becomes **Submit Quiz** on the last |
| 5 | Question Navigation | Shows "Question 3 of 10", answered count and a progress bar |
| 6 | Countdown Timer | 5-minute timer using `setInterval()`; auto-submits when time runs out |
| 7 | Answer Validation | Correct answer = +1 score, wrong answer = 0, skipped = unanswered |
| 8 | Submit Quiz | Checks all answers; protected against multiple submissions |
| 9 | Result Page | Total, correct, incorrect, unanswered, final score and percentage |
| 10 | Restart Quiz | **Play Again** resets score, timer, question number and answers (same category) |
| 11 | Responsive UI | Works on mobile, tablet, laptop and desktop; supports light and dark mode |

### Extras

- Score-based feedback messages (e.g. "Good Job!")
- **Show Correct Answers** review after submitting
- **Change Category** button on the result page

---

## 📚 Quiz Categories

- General Knowledge
- Science
- Computer Science
- Mathematics

---

## 🛠️ Technologies Used

- **HTML5** – structure of the application
- **CSS3** – layout, styling, responsive design (Flexbox, Grid, media queries, CSS variables)
- **JavaScript (ES6)** – questions, answer selection, navigation, timer, scoring
- **Visual Studio Code** – code editor
- **Browser** – Google Chrome, Microsoft Edge or Firefox

---

## 📁 Project Structure

```
quiz-application/
├── index.html    # HTML, CSS and JavaScript in a single file
└── README.md
```

---

## 🚀 How to Run

1. Download or clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Open the project folder.
3. Double-click `index.html` (or right-click → *Open with* → your browser).

No installation, server or internet connection is needed to run the app.

---

## 🎮 How to Use

1. Open the app and click **Start Quiz**.
2. Select a quiz category.
3. Read the question and click one of the four options.
4. Use **Previous** and **Next** to move between questions.
5. Watch the timer — the quiz auto-submits at 00:00.
6. Click **Submit Quiz** on the last question.
7. View your score, correct / incorrect / unanswered counts and percentage.
8. Click **Play Again** to retry, or **Change Category** to try another subject.

---

## 🧠 How It Works

Questions are stored in a JavaScript object. Each category holds an array of questions in the format `[question, [optionA, optionB, optionC, optionD], indexOfCorrectOption]`:

```js
const DATA = {
  "Computer Science": [
    ["Which language is used to create the structure of a web page?",
     ["CSS", "HTML", "JavaScript", "Python"], 1],
    // ...
  ]
};
```

- The selected answer for each question is saved in an `answers` array (`null` = unanswered).
- On submit, each saved answer is compared with the correct index to count correct, incorrect and unanswered questions.
- Percentage = `correct / total × 100`.
- Feedback: **80%+** → Good Job!, **50–79%** → Nice effort, **below 50%** → Try again.

### Adding your own category or questions

Add a new entry to the `DATA` object in `index.html`. The category button appears automatically:

```js
"Sports": [
  ["How many players are in a football team on the field?", ["9", "10", "11", "12"], 2],
  // add more questions...
]
```

To change the time limit, edit `TIME_LIMIT` (in seconds):

```js
const TIME_LIMIT = 300; // 5 minutes
```

---

## 🧪 Testing Checklist

- [ ] Welcome page opens and **Start Quiz** works
- [ ] Each category shows only its own questions
- [ ] Only one option can be selected per question
- [ ] Selected answers stay saved when using Previous / Next
- [ ] Previous is disabled on the first question
- [ ] Last question shows **Submit Quiz**
- [ ] Timer counts down and auto-submits at zero
- [ ] Score, incorrect, unanswered and percentage are correct
- [ ] **Play Again** resets everything
- [ ] Layout works on mobile and desktop

---

## 🔮 Future Improvements

- Difficulty levels (Easy, Medium, Hard)
- Random question order
- More categories
- High-score tracking

---

## 👥 Author

**Your Name** — Bosscoder School of Technology

---

## 📄 License

This project was created for educational purposes as part of the Bosscoder School of Technology curriculum.
