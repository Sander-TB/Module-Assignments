//Question 1
let subtract = (a, b) => a - b;

//Question 2
const urlOne = new URL("https://api.rawg.io/api/games?genres=sports");

fetch(urlOne)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		loadGames(json);
	})
	.catch(function(error) {
		console.dir(error);
	});

function loadGames(json) {
	const games = json.results;
	for (let i = 0; i < games.length; i++);
	console.dir(games);
}

//Question 3
let string = "these cats are outrageous";
let newString = string.replace(/cats/, "giraffes");
console.log(string);
console.log(newString);

//Question 4 // Help? //

const urlTwo = new URL("https://my.site.com?userId=10");
const searchParams = new URLSearchParams(urlTwo.search);

if (searchParams.has("userId") === false) {
	console.log("third.html");
	//window.location.href = "third.html";
} else if (searchParams.has("userId") < 10) {
	console.log("first.html");
	//window.location.href = "first.html";
} else {
	console.log("second.html");
	//window.location.href = "second.html";
}

//Question 5
function someStuff() {
	const container = document.querySelector(".container");
	const btn = document.querySelector(".btn");
	container.removeChild(btn);
}
someStuff();

//Question 6
const ul = document.querySelectorAll("UL");

const newLi = document.createElement("LI");
newLi.className = "parrots";

const newLiText = document.createTextNode("Parrots");

newLi.appendChild(newLiText);

const list = document.querySelector("ul");
const elephants = document.querySelector(".elephants");

list.insertBefore(newLi, elephants);

//Question 7  // HELP //
