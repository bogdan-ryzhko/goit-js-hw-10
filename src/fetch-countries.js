import { Notify } from "notiflix";

function fetchCountries(name) {
	const link = `https://restcountries.com/v3.1/name/${name}`;

	return fetch(link)
		.then(response => response.json())
		.catch(error => Notify.failure('flafn'));
}

export default fetchCountries;