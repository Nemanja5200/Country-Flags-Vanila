declare global {
  interface Window {
    routeHome: () => void;
    routeCountryDetails: (countryName: string) => void;
    showAllCountries: () => void; 
    routeToCountry: (countryName: string) => void; 
  }
}

export {};