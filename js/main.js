import { db, collection, getDocs } from "../firebase/config.js";

const recipeCards = document.getElementById("recipeCards");
const searchInput = document.getElementById("searchInput");

async function loadRecipes() {
  const snapshot = await getDocs(collection(db, "recipes"));
  const recipes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  displayRecipes(recipes);

  searchInput.addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
    const filtered = recipes.filter(r => r.title.toLowerCase().includes(term));
    displayRecipes(filtered);
  });
}

function displayRecipes(recipes) {
  recipeCards.innerHTML = recipes.map(r => `
    <div class="card">
      <h3>${r.title}</h3>
      <p>${r.description}</p>
      <a href="recipes.html?id=${r.id}">View Recipe</a>
    </div>
  `).join("");
}

loadRecipes();
