const QUIZ_API_URL = "http://localhost:8080/api/quiz";
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

let currentQuestionIndex = 0;
let questions = [];

document.getElementById("quizTitle").textContent = `Category: ${category}`;

async function loadQuestions() {
    try {
        const response = await fetch(`${QUIZ_API_URL}?category=${encodeURIComponent(category)}`);
        questions = await response.json();
        showQuestion();
    } catch (error) {
        console.error("Error loading questions", error);
    }
}

function showQuestion() {
    const container = document.getElementById("questionContainer");

    if (currentQuestionIndex >= questions.length) {
        alert("Quiz completed for this category!");
        window.location.href = "categories.html"; // Redirect to select another category
        return;
    }

    const q = questions[currentQuestionIndex];
    container.innerHTML = `<p>${q.question}</p>`;
}

document.getElementById("nextBtn").onclick = function () {
    currentQuestionIndex++;
    showQuestion();
};

window.onload = loadQuestions;
