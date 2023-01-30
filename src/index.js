import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const country = document.getElementById('search-box');
const link = `https://restcountries.com/v3.1/name/${country}`;

function showCountries(event) {
	let countryName = event.target.value;
	console.log(countryName);
}

country.addEventListener('input', debounce(showCountries, DEBOUNCE_DELAY));
