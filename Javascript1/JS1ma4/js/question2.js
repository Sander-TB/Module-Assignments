const baseUrl = "https://api.rawg.io/api/games?";

fetch(baseUrl)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		createGames(json);
	})
	.catch(function(error) {
		console.log(error);
	});

function createGames(json) {
	const games = json.results;
	console.dir(games);

	const gamesContainer = document.querySelector(".results");

	let html = "";

	games.forEach(function(result) {
		let imageUrl = "";

		html += `<div class="game">
                    <h2>${result.name}</h2>
                    <img src="${result.background_image}" alt="Name of game">
                </div>`;
	});

	gamesContainer.innerHTML = html;
}
