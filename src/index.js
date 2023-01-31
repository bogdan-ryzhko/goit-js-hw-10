import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import fetchCountries from './fetch-countries';
import showCountryInfo from './showCountryInfo';
import showCountryList from './showCountryList';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const INFO_MSG = 'Too many matches found. Please enter a more specific name.';

const refs = {
	inputCountry: document.getElementById('search-box'),
	countryList: document.querySelector('.country-list'),
	countryInfo: document.querySelector('.country-info'),
}

function showCountries(event) {
	let countryName = event.target.value;

	if (countryName === '') {
		refs.countryList.innerHTML = '';
		refs.countryInfo.innerHTML = '';
		return;
	}

	fetchCountries(countryName)
		.then(country => {
			if (country.length === 1) {
				refs.countryList.innerHTML = '';
				refs.countryInfo.innerHTML = showCountryInfo(country);
			}

			if (country.length > 2 && country.length < 10) {
				refs.countryInfo.innerHTML = '';
				refs.countryList.innerHTML = showCountryList(country);
			}

			if (country.length > 10) {
				Notify.info(INFO_MSG)
			}
		})
		.catch(error => {
			console.log(error)
		});
}

refs.inputCountry.addEventListener('input', debounce(showCountries, DEBOUNCE_DELAY));