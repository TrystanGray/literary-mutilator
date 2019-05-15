const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
	let name = prompt('Enter a new message');
	para.textContent = 'Oh shit Morty, l-l-look this dumb ass broke our paragraph Morty, and the only thing this glip glop typed was:' + name;
}