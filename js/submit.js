import { db, collection, addDoc } from "../firebase/config.js";

const form = document.getElementById("recipeForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = form.title.value;
  const description = form.description.value;
  const ingredients = form.ingredients.value;
  const steps = form.steps.value;

  try {
    await addDoc(collection(db, "recipes"), {
      title,
      description,
      ingredients,
      steps,
      timestamp: new Date()
    });
    alert("Recipe submitted successfully!");
    form.reset();
  } catch (err) {
    console.error(err);
    alert("Error submitting recipe.");
  }
});
