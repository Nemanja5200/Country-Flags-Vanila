import type {
  Country,
  CountryApiResponse,
  CountryDetails,
  CountryDetailsApiResponse,
} from "../types/Country";

export const parseCountry = (countryString: CountryApiResponse): Country => {
  const {
    name: { common: name },
    capital,
    region,
    population,
    flags: { png: flag },
    borders,
    cca3,
  } = countryString;
  return {
    name,
    capital,
    region,
    population,
    flag,
    borders,
    cca3,
  };
};

export const parseCountryDetails = (
  countryString: CountryDetailsApiResponse
): CountryDetails => {
  const {name: {common : name, nativeName}, capital, region, subregion, population , flags: {png : flag},borders,tld,currencies,languages} = countryString
  return {
    name,
    nativeName:
      Object.values(nativeName)[0]?.common ||
      countryString.name.common,
    capital,
    region,
    subregion,
    population,
    flag,
    borders,
    tld,
    currencies,
    languages,
  };
};
