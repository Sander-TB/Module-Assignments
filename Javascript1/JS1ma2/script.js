// Question 1
const myFunctionExpression = function() {
	console.log("Sander");
};
myFunctionExpression();


// Question 2
const btn = document.querySelector(".btn");

const callAfterClick = function() {
	console.log("I was clicked");
};
btn.addEventListener("click", callAfterClick);


// Question 3
const textInput = document.querySelector("#firstName");

function callAfterKeyIsReleased(event) {
	console.log("value", event.target.value);
}

textInput.addEventListener("keydown", callAfterKeyIsReleased);


// Question 4
const button = document.querySelector("button");

function callOnHover(event) {
	event.target.classList.add("hover");
}
button.addEventListener("mouseover", callOnHover);


// Question 5
const buttonOtherState = document.querySelector("[data-animal='dog']");

function hoverDone(event) {
	event.target.classList.remove("hover");
}
buttonOtherState.addEventListener("mouseout", hoverDone);


// Question 6
const list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", hoverOnList);
}

function hoverOnList(event) {
	console.dir(list.dataset.animal)
};


// Question 7
const animal = "cow";

switch (animal) {
	case "cat":
		console.log("Meow");
		break;
	case "cow":
		console.log("Moo");
		break;
	case "bird":
		console.log("Tweet");
		break;
	default:
		console.log("Harrumph");
}


// Question 8
const sheep = ["Malcom", "Anders", "Marie"];

sheep.forEach(function(items) {
	console.log(items);
});


// Question 9
function logWord() {
	console.log("Hello!");

	if (counter === 5) {
		clearInterval(intervalId);
	}
	counter++;
}

let counter = 0;
const intervalId = setInterval(logWord, 500);


// Question 10
const timeoutContainer = document.querySelector("div.container");

function updateText() {
	setTimeout(function() {
		timeoutContainer.innerText = "Text updated";
	}, 2000);
}

updateText();
