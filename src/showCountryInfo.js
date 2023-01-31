function showCountryInfo(countryArray) {
	return countryArray.map(country => {

		const languages = Object.values(country.languages).join(', ');

		return `<div class="country-info__item">
			<div class="country-info__item-top">
				<img width="50" src="${country.flags.svg}" alt="${country.name.official}">
				<h2 class="country-name">${country.name.official}</h2>
			</div>
			<p class="capital"><b>Capital:</b> ${country.capital}</p>
			<p class="capital"><b>Population:</b> ${country.population}</p>
			<p class="capital"><b>Languages:</b> ${languages}</p>
		</div>`
	}).join('')
}

export default showCountryInfo;