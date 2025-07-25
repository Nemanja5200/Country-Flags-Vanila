
import{fetchCountries } from './api.js';
import { renderCards } from './components/renderCards.js';
import './route.js'
import './pages/home.js';

document.addEventListener('DOMContentLoaded', async () => {
const countries = await fetchCountries();
renderCards(countries);
});