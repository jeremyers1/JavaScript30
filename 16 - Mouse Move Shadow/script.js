const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(e) {
	//  const width = hero.offsetWidth;
	//  const height = hero.offsetHeight;
	const { offsetWidth: width, offsetHeight: height } = hero; //ES6 destructuring
	let { offsetX: x, offsetY: y } = e;

	if (this !== e.target) {
		// correct x, y settings if mouse moves over h1 element
		x += e.target.offsetLeft;
		y += e.target.offsetTop;
	}

	const xWalk = Math.round((x / width) * walk - walk / 2); //off set from 50 to -50, not 0 to 100
	const yWalk = Math.round((y / width) * walk - walk / 2);

	text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)`;
}

hero.addEventListener('mousemove', shadow);
