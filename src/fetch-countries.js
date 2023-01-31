import { Notify } from "notiflix";

const ERROR_MSG = 'Oops, there is no country with that name.';

function fetchCountries(name) {

	const FIELDS_OPTIONS = 'name,capital,population,flags,languages'

	const link = `https://restcountries.com/v3.1/name/${name}?fields=${FIELDS_OPTIONS}`;

	return fetch(link)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.status);
			}
			return response.json()
		})
		.catch((error) => {
			Notify.failure(ERROR_MSG);
			return error;
		});
}

export default fetchCountries;