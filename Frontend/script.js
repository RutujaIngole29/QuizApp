


// const API_URL = "http://localhost:8080/api/quiz";

// let questions = [];
// let currentIndex = 0;
// let timer;
// let timeLeft = 15;
// let score = 0; // Track score

// const quizDiv = document.getElementById("quiz");
// const resultEl = document.getElementById("result");
// const timerEl = document.getElementById("timer");
// const submitBtn = document.getElementById("submitBtn");
// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");

// // Get category & difficulty from URL
// function getParamsFromUrl() {
//   const params = new URLSearchParams(window.location.search);
//   return {
//     category: params.get("category") || "",
//     difficulty: params.get("difficulty") || ""
//   };
// }

// async function loadQuestions() {
//   const { category, difficulty } = getParamsFromUrl();

//   if (!category || !difficulty) {
//     quizDiv.innerHTML = "<p>No category or difficulty selected. Please go back and choose again.</p>";
//     submitBtn.disabled = true;
//     nextBtn.disabled = true;
//     prevBtn.disabled = true;
//     return;
//   }

//   try {
//     const response = await fetch(
//       `${API_URL}/category/${encodeURIComponent(category)}/difficulty/${encodeURIComponent(difficulty)}`
//     );
//     questions = await response.json();

//     if (questions.length > 0) {
//       currentIndex = 0;
//       displayQuestion(questions[currentIndex]);
//       submitBtn.disabled = true;
//       nextBtn.disabled = false;
//       prevBtn.disabled = false;
//     } else {
//       quizDiv.innerHTML = `<p>No questions found for category: ${category} (${difficulty})</p>`;
//       submitBtn.disabled = true;
//       nextBtn.disabled = true;
//       prevBtn.disabled = true;
//       timerEl.innerText = "";
//       resultEl.innerText = "";
//     }
//   } catch (e) {
//     console.error("Failed to load questions", e);
//     quizDiv.innerHTML = "<p>Error loading questions.</p>";
//   }
// }

// function startTimer() {
//   clearInterval(timer);
//   timeLeft = 15;
//   timerEl.innerText = `Time left: ${timeLeft}s`;
//   submitBtn.disabled = true;

//   timer = setInterval(() => {
//     timeLeft--;
//     timerEl.innerText = `Time left: ${timeLeft}s`;

//     if (timeLeft <= 0) {
//       clearInterval(timer);
//       timerEl.innerText = "Time's up!";
//       submitBtn.disabled = true;
//       showCorrectAnswer();
//     }
//   }, 1000);
// }

// function displayQuestion(question) {
//   quizDiv.innerHTML = `
//     <h3>${question.questionText}</h3>
//     <p><strong>Category:</strong> ${getParamsFromUrl().category} | <strong>Difficulty:</strong> ${getParamsFromUrl().difficulty}</p>
//     <div class="option"><input type="radio" name="answer" value="${question.option1}"> ${question.option1}</div>
//     <div class="option"><input type="radio" name="answer" value="${question.option2}"> ${question.option2}</div>
//     <div class="option"><input type="radio" name="answer" value="${question.option3}"> ${question.option3}</div>
//     <div class="option"><input type="radio" name="answer" value="${question.option4}"> ${question.option4}</div>
//   `;
//   resultEl.innerText = "";
//   submitBtn.disabled = true;

//   document.querySelectorAll('input[name="answer"]').forEach(input => {
//     input.addEventListener('change', () => {
//       submitBtn.disabled = false;
//       resultEl.innerText = "";
//     });
//   });

//   startTimer();
// }

// async function checkAnswer() {
//   clearInterval(timer);

//   const selectedOption = document.querySelector('input[name="answer"]:checked');
//   if (!selectedOption) {
//     alert("Please select an answer!");
//     return;
//   }

//   const payload = {
//     questionId: questions[currentIndex].id,
//     answer: selectedOption.value
//   };

//   try {
//     const response = await fetch(`${API_URL}/check`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload)
//     });

//     const result = await response.text();
//     resultEl.innerText = result;

//     if (result.trim().toLowerCase() === "correct!") {
//       score++;
//     }

//     submitBtn.disabled = true;
//   } catch (error) {
//     console.error("Error checking answer:", error);
//     resultEl.innerText = "Error submitting answer.";
//   }
// }

// function showCorrectAnswer() {
//   const correctAnswer = questions[currentIndex].correctAnswer;
//   resultEl.innerText = "Correct answer is: " + correctAnswer;
// }

// nextBtn.addEventListener("click", () => {
//   if (currentIndex < questions.length - 1) {
//     currentIndex++;
//     displayQuestion(questions[currentIndex]);
//   } else {
//     const { category, difficulty } = getParamsFromUrl();
//     localStorage.setItem("quizScore", score);
//     localStorage.setItem("quizTotal", questions.length);
//     localStorage.setItem("quizCategory", category);
//     localStorage.setItem("quizDifficulty", difficulty);
//     window.location.href = "result.html";
//   }
// });

// prevBtn.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     displayQuestion(questions[currentIndex]);
//   } else {
//     alert("This is the first question!");
//   }
// });

// submitBtn.addEventListener("click", checkAnswer);

// window.onload = loadQuestions;

const API_URL = "http://localhost:8080/api/quiz";

let questions = [];
let currentIndex = 0;
let timer;
let timeLeft = 15;
let score = 0; // Track score
let quizFinished = false; // Flag to disable tab switch alert after quiz ends

const quizDiv = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// 🔹 Utility: Shuffle array (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Get category & difficulty from URL
function getParamsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return {
    category: params.get("category") || "",
    difficulty: params.get("difficulty") || ""
  };
}

async function loadQuestions() {
  const { category, difficulty } = getParamsFromUrl();

  if (!category || !difficulty) {
    quizDiv.innerHTML = "<p>No category or difficulty selected. Please go back and choose again.</p>";
    submitBtn.disabled = true;
    nextBtn.disabled = true;
    prevBtn.disabled = true;
    return;
  }

  try {
    const response = await fetch(
      `${API_URL}/category/${encodeURIComponent(category)}/difficulty/${encodeURIComponent(difficulty)}`
    );
    let data = await response.json();

    // 🔹 Shuffle questions before starting
    questions = shuffleArray(data);

    if (questions.length > 0) {
      currentIndex = 0;
      displayQuestion(questions[currentIndex]);
      submitBtn.disabled = true;
      nextBtn.disabled = false;
      prevBtn.disabled = false;
      quizFinished = false; // reset on load
    } else {
      quizDiv.innerHTML = `<p>No questions found for category: ${category} (${difficulty})</p>`;
      submitBtn.disabled = true;
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      timerEl.innerText = "";
      resultEl.innerText = "";
    }
  } catch (e) {
    console.error("Failed to load questions", e);
    quizDiv.innerHTML = "<p>Error loading questions.</p>";
  }
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 40;
  timerEl.innerText = `Time left: ${timeLeft}s`;
  submitBtn.disabled = true;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      timerEl.innerText = "Time's up!";
      submitBtn.disabled = true;
      showCorrectAnswer();
    }
  }, 1000);
}

function displayQuestion(question) {
  // 🔹 Shuffle options for this question
  let options = shuffleArray([
    question.option1,
    question.option2,
    question.option3,
    question.option4
  ]);

  quizDiv.innerHTML = `
    <h3>${question.questionText}</h3>
    <p><strong>Category:</strong> ${getParamsFromUrl().category} | <strong>Difficulty:</strong> ${getParamsFromUrl().difficulty}</p>
    ${options.map(opt => `
      <div class="option">
        <input type="radio" name="answer" value="${opt}"> ${opt}
      </div>
    `).join('')}
  `;
  resultEl.innerText = "";
  submitBtn.disabled = true;

  document.querySelectorAll('input[name="answer"]').forEach(input => {
    input.addEventListener('change', () => {
      submitBtn.disabled = false;
      resultEl.innerText = "";
    });
  });

  startTimer();
}

async function checkAnswer() {
  clearInterval(timer);

  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }

  const payload = {
    questionId: questions[currentIndex].id,
    answer: selectedOption.value
  };

  try {
    const response = await fetch(`${API_URL}/check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.text();
    resultEl.innerText = result;

    if (result.trim().toLowerCase() === "correct!") {
      score++;
    }

    submitBtn.disabled = true;
  } catch (error) {
    console.error("Error checking answer:", error);
    resultEl.innerText = "Error submitting answer.";
  }
}

function showCorrectAnswer() {
  const correctAnswer = questions[currentIndex].correctAnswer;
  resultEl.innerText = "Correct answer is: " + correctAnswer;
}

function finishQuiz() {
  quizFinished = true;
  const { category, difficulty } = getParamsFromUrl();
  localStorage.setItem("quizScore", score);
  localStorage.setItem("quizTotal", questions.length);
  localStorage.setItem("quizCategory", category);
  localStorage.setItem("quizDifficulty", difficulty);
  window.location.href = "result.html";
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    displayQuestion(questions[currentIndex]);
  } else {
    finishQuiz();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayQuestion(questions[currentIndex]);
  } else {
    alert("This is the first question!");
  }
});

submitBtn.addEventListener("click", checkAnswer);

// Anti-cheating: Detect tab change with alert + optional audio
document.addEventListener("visibilitychange", function () {
  if (!quizFinished && document.hidden) {
    alert("⚠️ You switched tabs! Please focus on the quiz.");
    let audio = new Audio("warning.mp3"); // Place warning.mp3 file in same folder or update path
    audio.play().catch(() => {}); // Ignore play error if any
  }
});

window.onload = loadQuestions;



// const API_URL = "http://localhost:8080/api/quiz";

// let questions = [];
// let currentIndex = 0;
// let timer;
// let timeLeft = 15;
// let score = 0; // Track score

// const quizDiv = document.getElementById("quiz");
// const resultEl = document.getElementById("result");
// const timerEl = document.getElementById("timer");
// const submitBtn = document.getElementById("submitBtn");
// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");

// // 🔹 Utility: Shuffle array (Fisher-Yates)
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// // Get category & difficulty from URL
// function getParamsFromUrl() {
//   const params = new URLSearchParams(window.location.search);
//   return {
//     category: params.get("category") || "",
//     difficulty: params.get("difficulty") || ""
//   };
// }

// async function loadQuestions() {
//   const { category, difficulty } = getParamsFromUrl();

//   if (!category || !difficulty) {
//     quizDiv.innerHTML = "<p>No category or difficulty selected. Please go back and choose again.</p>";
//     submitBtn.disabled = true;
//     nextBtn.disabled = true;
//     prevBtn.disabled = true;
//     return;
//   }

//   try {
//     const response = await fetch(
//       `${API_URL}/category/${encodeURIComponent(category)}/difficulty/${encodeURIComponent(difficulty)}`
//     );
//     let data = await response.json();

//     // 🔹 Shuffle questions before starting
//     questions = shuffleArray(data);

//     if (questions.length > 0) {
//       currentIndex = 0;
//       displayQuestion(questions[currentIndex]);
//       submitBtn.disabled = true;
//       nextBtn.disabled = false;
//       prevBtn.disabled = false;
//     } else {
//       quizDiv.innerHTML = `<p>No questions found for category: ${category} (${difficulty})</p>`;
//       submitBtn.disabled = true;
//       nextBtn.disabled = true;
//       prevBtn.disabled = true;
//       timerEl.innerText = "";
//       resultEl.innerText = "";
//     }
//   } catch (e) {
//     console.error("Failed to load questions", e);
//     quizDiv.innerHTML = "<p>Error loading questions.</p>";
//   }
// }

// function startTimer() {
//   clearInterval(timer);
//   timeLeft = 15;
//   timerEl.innerText = `Time left: ${timeLeft}s`;
//   submitBtn.disabled = true;

//   timer = setInterval(() => {
//     timeLeft--;
//     timerEl.innerText = `Time left: ${timeLeft}s`;

//     if (timeLeft <= 0) {
//       clearInterval(timer);
//       timerEl.innerText = "Time's up!";
//       submitBtn.disabled = true;
//       showCorrectAnswer();
//     }
//   }, 1000);
// }

// function displayQuestion(question) {
//   // 🔹 Shuffle options for this question
//   let options = shuffleArray([
//     question.option1,
//     question.option2,
//     question.option3,
//     question.option4
//   ]);

//   quizDiv.innerHTML = `
//     <h3>${question.questionText}</h3>
//     <p><strong>Category:</strong> ${getParamsFromUrl().category} | <strong>Difficulty:</strong> ${getParamsFromUrl().difficulty}</p>
//     ${options.map(opt => `
//       <div class="option">
//         <input type="radio" name="answer" value="${opt}"> ${opt}
//       </div>
//     `).join('')}
//   `;
//   resultEl.innerText = "";
//   submitBtn.disabled = true;

//   document.querySelectorAll('input[name="answer"]').forEach(input => {
//     input.addEventListener('change', () => {
//       submitBtn.disabled = false;
//       resultEl.innerText = "";
//     });
//   });

//   startTimer();
// }

// async function checkAnswer() {
//   clearInterval(timer);

//   const selectedOption = document.querySelector('input[name="answer"]:checked');
//   if (!selectedOption) {
//     alert("Please select an answer!");
//     return;
//   }

//   const payload = {
//     questionId: questions[currentIndex].id,
//     answer: selectedOption.value
//   };

//   try {
//     const response = await fetch(`${API_URL}/check`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload)
//     });

//     const result = await response.text();
//     resultEl.innerText = result;

//     if (result.trim().toLowerCase() === "correct!") {
//       score++;
//     }

//     submitBtn.disabled = true;
//   } catch (error) {
//     console.error("Error checking answer:", error);
//     resultEl.innerText = "Error submitting answer.";
//   }
// }

// function showCorrectAnswer() {
//   const correctAnswer = questions[currentIndex].correctAnswer;
//   resultEl.innerText = "Correct answer is: " + correctAnswer;
// }

// nextBtn.addEventListener("click", () => {
//   if (currentIndex < questions.length - 1) {
//     currentIndex++;
//     displayQuestion(questions[currentIndex]);
//   } else {
//     const { category, difficulty } = getParamsFromUrl();
//     localStorage.setItem("quizScore", score);
//     localStorage.setItem("quizTotal", questions.length);
//     localStorage.setItem("quizCategory", category);
//     localStorage.setItem("quizDifficulty", difficulty);
//     window.location.href = "result.html";
//   }
// });

// prevBtn.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     displayQuestion(questions[currentIndex]);
//   } else {
//     alert("This is the first question!");
//   }
// });

// submitBtn.addEventListener("click", checkAnswer);

// window.onload = loadQuestions;
