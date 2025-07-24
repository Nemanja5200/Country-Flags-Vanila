
import{fetchCountries , renderCards} from './api.js';
document.addEventListener('DOMContentLoaded', async () => {
const countries = await fetchCountries();
renderCards(countries);
});