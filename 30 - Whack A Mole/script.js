/*TODO
BUG! Game allows multiple clicks on one mole for multiple points
1. Include a countdown timer so player knows how much time is left
2. create an all-time scoreboard and save it to local storage
3. create levels -- speed of peep increases, and number of holes increases
*/

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if (hole === lastHole) {
		//we don't want the same hole twice
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}

function peep() {
	const time = randomTime(200, 1000);
	const hole = randomHole(holes);
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
}

function startGame() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	peep();
	setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
	if (!e.isTrusted) return; // cheater!!
	score++;
	this.classList.remove('up');
	scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
