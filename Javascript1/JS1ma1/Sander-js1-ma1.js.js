//Question 1
const cat = {
	complain: function() {
		console.log("Meow!");
	}
};
cat.complain();

//Question 2
var heading = document.querySelector("h3");
console.dir(heading);

//Question 3
var heading = document.querySelector("h3");
heading.style.fontSize = "2em";

//Question 4
var heading = document.querySelector("h3").classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");
console.dir(paragraphs);

//Question 6
const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = `<p> New paragraph </p>`;
console.log(resultsContainer.innerHTML)

//Question 7
const cats = [
	{
		name: "Blob",
		age: 10
	},
	{
		name: "Harold"
	},
	{
		name: "Blurt",
		age: 21
	}
];
function catFunction(catArray) {
	for (let i = 0; i < cats.length; i++) {
		console.log(cats[i].name);
	}
}
catFunction();

//Question 8
function catFunction2(catArray) {
	for (let i = 0; i < cats.length; i++) {
		const name = "<h5>" + cats[i].name + "</h5>";
		console.log(name);
	}
}

catFunction2();

//Question 9

		//Im having trouble understanding exactly what they're asking me to do here

function catFunction2(cats) {
	return resultsContainer.innerHTML;
}

		//??


//Question 10

let ageValue = "Age Unknown";

function catFunction3(catArray) {
	for (let i = 0; i < cats.length; i++) {

		if (cats[i].age) {
			ageValue = cats[i].age;
		} else {
			ageValue = "Age Unknown";
		}

		const DETAILS = `<div>
			<h5> ${cats[i].name} </h5>
			<p>${ageValue}</p>
		</div>`;
		console.log(DETAILS);
	}
}

catFunction3();

