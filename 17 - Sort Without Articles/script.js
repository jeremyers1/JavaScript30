const bands = [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog',
];

function removeArticle(str) {
	// JavaScript30 class used RegExp: str.replace(/^(a |the |an )/i, '').trim();
	let words = str.split(' ');
	if (words[0] === 'A' || words[0] === 'An' || words[0] === 'The') {
		words.shift();
		return words.join(' ');
	}
	return str;
}

const alphaBands = bands.sort((a, b) =>
	removeArticle(a) > removeArticle(b) ? 1 : -1
);

// JavaScript30 class used .map method with innerHTML, but it included commas, so he must strip them out with .join('')
// document.querySelector('#bands').innerHTML = alphaBands.map(band => `<li>${band}</li>`).join('');
const bandList = document.getElementById('bands');
alphaBands.forEach((band) => {
	let li = document.createElement('li');
	li.innerText = band;
	bandList.appendChild(li);
});
