
const moviesContainer = document.querySelector("#movies");
const showsContainer = document.querySelector("#shows");

const movies = ["Robocop","Terminator","Titanic","Frozzen"];

const movieList = document.createElement("ul");

for (const movie of movies) {
     const li = `<li>${movie}</li>`;
     movieList.innerHTML += li;
}

moviesContainer.appendChild(movieList);


