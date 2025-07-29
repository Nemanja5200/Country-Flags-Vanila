import { fetchCountry } from "../api.js";


export async function showCountryDetails(countryName : string) {
  const cardsSection = document.querySelector(".cards-section");

  cardsSection && (cardsSection.innerHTML = `
    <div class="country-details">
      <button class="back-button" onclick="routeHome()">← Back</button>
      <div class="details-content">
        <h1>Loading ${countryName}...</h1>
      </div>
    </div>
  `);

  try {
    const country = await fetchCountry(countryName);

   

    console.log(country);

    cardsSection && (cardsSection.innerHTML = `
      <div class="country-details">
        <button class="back-button" onclick="routeHome()">← Back</button>
        <div class="details-content">
          <div class="image-container">
          <img src="${country.flag}" alt="Flag of ${
      country.name
    }}">
          </div>
          <div class = "details-container">
           <h2><span>${country.name}</span></h2>
          <div class = "row-container">
          <div class = "p1">
          <p><strong>Native name:</strong> ${country.nativeName}</p>
          <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Sub Region:</strong> ${country.subregion}</p>
          <p><strong>Capital:</strong> ${country.capital}</p>
          </div>
          <div class = "p2">
          <p><strong>Top Level Domain:</strong> ${country.tld}</p>
          <p><strong>Currencies:</strong>${""}${Object.entries(
      country.currencies
    )
      .map(
        ([code, currency]) => `${currency.name} (${currency.symbol || code})`
      )
      .join(",")}</p>
           <p><strong>Languages:</strong> ${Object.values(
             country?.languages
           )}</p>
          </div>
          </div>
          <div class = "border-container">
          <p><strong>Border Countries:</strong></p>
          <div class="border-buttons">
            ${country.borders
              ?.map(
                (border) => `
              <button class="border-button">${border}</button>
            `
              )
              .join("")}
          </div>
          </div>
          </div>
        </div>
      </div>
    `);
  } catch (error) {
    console.error("Error:", error);
    cardsSection && (cardsSection.innerHTML = `
      <div class="country-details">
        <button class="back-button" onclick="routeHome()">← Back</button>
        <div class="details-content">
          <h1>Error loading ${countryName}</h1>
        </div>
      </div>
    `);
  }
}
