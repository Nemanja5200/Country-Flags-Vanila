export function renderCards(countries) {
  const cardsSection = document.querySelector('.cards-section');
  cardsSection.innerHTML = ''; 

  countries?.forEach((country) => {
    const name = country.name?.common ;
    const flag = country.flags?.png ;
    const capital = country.capital?.[0];
    const region = country.region;
    const population = country.population?.toLocaleString();
    const card = document.createElement('div');
    card.classList.add('card');
            card.innerHTML = `
                <div class="card-image">
                    <a href="#country/${encodeURIComponent(name)}" onclick="routeToCountry('${name}'); return false;">
                    <img class="img" src="${flag}" alt="Flag of ${name}" />
                    </a>
                </div>
                <div class="card-info">
                    <h2>${name}</h2>
                    <p><b>Population:</b> ${population}</p>
                    <p><b>Region:</b> ${region}</p>
                    <p><b>Capital:</b> ${capital}</p>
                </div>
                `;

    cardsSection.appendChild(card);
  });
}
