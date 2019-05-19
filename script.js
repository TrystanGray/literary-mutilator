const para = document.getElementById('1');
para.addEventListener('click', updateName);
function updateName() {
	let Saying = prompt('Enter a new message');
	para.textContent = 'Oh shit Morty, l-l-look this dumb ass broke our paragraph Morty, and the only thing this glip glop typed was: ' + Saying;
}

function changeColor(newColor) {
	var elem = document.getElementById('1');
	elem.style.color = newColor;
}