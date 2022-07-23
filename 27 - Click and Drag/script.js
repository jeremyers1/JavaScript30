const slider = document.querySelector('.items');
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', e => {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
	if (!isDown) return; // stop the fn from running unless mouse is down
	e.preventDefault(); // stop browser from thinking it knows what we are clicking on
	const x = e.pageX - slider.offsetLeft; // recalculate every time we move the slider
	const walk = (x - startX) * 3; // *3 to help scroll faster
	slider.scrollLeft = scrollLeft - walk;
});
