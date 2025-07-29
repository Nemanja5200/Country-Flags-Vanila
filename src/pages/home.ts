import { fetchCountries } from "../api.js";
import { renderCards } from "../components/renderCards.js";

export async function showAllCountries() {
  try {
    console.log("Loading all countries...");

    const countries = await fetchCountries();

    renderCards(countries);

    console.log("Countries loaded successfully");
  } catch (error) {
    console.error("Error loading countries:", error);

    const cardsSection = document.querySelector(".cards-section");
    cardsSection && (cardsSection.innerHTML = `
      <div class="error">
        <h2>Error Loading Countries</h2>
        <p>Failed to load countries. Please refresh the page.</p>
      </div>
    `);
  }
}

window.showAllCountries = showAllCountries;
