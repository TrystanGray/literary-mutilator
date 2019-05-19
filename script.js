// a little easter egg ;) wish i could do it on all . maybe w class? cheating now lol
const para = document.getElementById('1');
para.addEventListener('click', updateName);
function updateName() {
	let Saying = prompt('What do you have to say for yourself mortal?');
	para.textContent = 'Oh shit Morty, l-l-look this dumb ass broke our paragraph Morty, and the only thing this glip glop typed was: ' + Saying;
}
const easter = document.getElementById('2');
easter.addEventListener('click', updateName);
function updateName() {
	let Saying = prompt('What do you have to say for yourself mortal?');
	easter.textContent = 'Oh shit Morty, l-l-look this dumb ass broke our paragraph Morty, and the only thing this glip glop typed was: ' + Saying;
}
const egg = document.getElementById('3');
egg.addEventListener('click', updateName);
function updateName() {
	let Saying = prompt('What do you have to say for yourself mortal?');
	egg.textContent = 'Oh shit Morty, l-l-look this dumb ass broke our paragraph Morty, and the only thing this glip glop typed was: ' + Saying;
}


//changing color of words
function changeColor(newColor) {
	var elem = document.getElementById('1');
	elem.style.color = newColor;
}


//randomizing words, took me so damn long to find anything
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


// highlighting paragraph
function highlight() {
	document.getElementById("3").style.backgroundColor = "#fdff32";
}
