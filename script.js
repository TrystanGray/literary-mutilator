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

function mixWords() {
	let stuff = document.getElementById("2").textContent;
	let words = stuff.split(" ");
	words.map(function(t) {
		for(i = (words.length - 1); i > 0; i--){
			let j = Math.floor(Math.random() * (i + 1));
			let temp = words[i];
			words[i] = words[j];
			words[j] = temp;
		}
		document.getElementById("2").textContent = words.join(" ");
	});
}
