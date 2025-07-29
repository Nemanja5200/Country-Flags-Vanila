import { Country, CountryApiResponse, CountryDetails, CountryDetailsApiResponse } from "./types/Country";
import { parseCountry, parseCountryDetails } from "./utils/parser.js";

const BASE_URL = "https://restcountries.com/v3.1";

export async function fetchCountries() : Promise<Country[]> {
  
    const response = await fetch(
      `${BASE_URL}/all?fields=name,capital,region,population,flags`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    const data = await response.json();
    return data.map((country: CountryApiResponse) => parseCountry(country));
  
}

export async function fetchCountry(name:string): Promise<CountryDetails> {
    const response = await fetch(
      `${BASE_URL}/name/${name}?fields=name,capital,region,population,flags,borders,subregion,tld,currencies,languages,nativeName`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch countrie");
    }

    const data = await response.json();

      const country = data.find(
      (country: CountryDetailsApiResponse) => country.name?.common === name
    );

    return parseCountryDetails(country);

}
