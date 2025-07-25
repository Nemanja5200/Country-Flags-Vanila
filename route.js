import { showCountryDetails } from './pages/countryDetails.js';
import { showAllCountries } from './pages/home.js';


// Simple route handler
function handleRoute() {
  const hash = window.location.hash.slice(1);
  
  if (hash.startsWith('country/')) {
    const countryName = decodeURIComponent(hash.split('/')[1]);
    showCountryDetails(countryName);
  } else {
    showAllCountries();
  }
}

// Listen for hash changes
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

// Global navigation functions
window.routeToCountry = (countryName) => {
  window.location.hash = `country/${encodeURIComponent(countryName)}`;
};

window.routeHome = () => {
  window.location.hash = '';
};