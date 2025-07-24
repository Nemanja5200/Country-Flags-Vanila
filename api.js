

const BASE_URL = 'https://restcountries.com/v3.1/all';


export async function fetchCountries() {

  try {
    const response = await fetch(`${BASE_URL}?fields=name,capital,region,population,flags`);
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    
    const data = await response.json();
    return data;

  }catch (error) {
    return [];
  }
}


export async function fetchCountry(name) {
    try{
        const response = await fetch(`${BASE_URL}/name/${name}?fields=name,capital,region,population,flags,borders,subregion,tld,currencies,languages,nativeName`);
        if(!response.ok){
            throw new Error('Failed to fetch countrie');
        }

        const data = await response.json();
        return data;

    }  catch(error){
        return[];
    }
    
}



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

