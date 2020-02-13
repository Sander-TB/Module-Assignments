const baseUrl = "https://api.rawg.io/api/games/4200";

fetch(baseUrl)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		createGameDetails(json);
	})
	.catch(function(error) {
		// document.location.href = "error.html"
	});

function createGameDetails(json) {
	const name = document.querySelector("h1");
	name.innerHTML = json.name;

	const image = document.querySelector(".image");
	image.style.backgroundImage = `url(${json.background_image})`;

	const description = document.querySelector(".description");
	description.innerHTML = json.description;

	const released = document.querySelector(".released");
	released.innerHTML = json.released;

	const rating = document.querySelector(".rating");
	rating.innerHTML = json.rating;

	console.dir(json);
}
