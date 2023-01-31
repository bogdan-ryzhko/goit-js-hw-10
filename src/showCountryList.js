function showCountryList(countries) {
	return countries.map(country => {
		return `<li class="country-info__item">
			<div class="country-list__top">
				<img width="50" src="${country.flags.svg}" alt="${country.name.official}">
				<h2 class="country-name">${country.name.official}</h2>
			</div>
		</li>`
	}).join('')
}

export default showCountryList;