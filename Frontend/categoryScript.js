

const CATEGORY_API_URL = "http://localhost:8080/api/categories";

async function loadCategoryButtons() {
  try {
    const response = await fetch(CATEGORY_API_URL);
    const categories = await response.json();

    const container = document.getElementById("categoryButtons");
    container.innerHTML = "";

    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.textContent = cat.name;
      btn.onclick = () => {
        const difficulty = document.getElementById("difficultySelect").value;
        if (!difficulty) {
          alert("Please select a difficulty level!");
          return;
        }
        // Redirect to quiz page with category & difficulty
        window.location.href = `quiz.html?category=${encodeURIComponent(cat.name)}&difficulty=${encodeURIComponent(difficulty)}`;
      };
      container.appendChild(btn);
    });

    if (categories.length === 0) {
      container.innerHTML = "<p>No categories available.</p>";
    }
  } catch (e) {
    console.error("Error loading categories", e);
  }
}

window.onload = loadCategoryButtons;
