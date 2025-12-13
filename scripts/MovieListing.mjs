import { getLocalStorage, setLocalStorage } from "./Tools.mjs";
import { renderListWithTemplate } from "./Tools.mjs";
import { getMovieData } from "./ExternalData.mjs";

function movieCardTemplate(movieData) {
    return `<li class="movie-card">
        <a href="/wdd330-MovieHub/movie-details.html?movie=${movieData.id}">
            <img src="https://image.tmdb.org/t/p/w342${movieData.poster_path}" alt="${movieData.title}" loading="lazy" width="300" height="482">
            <h2>${movieData.title}</h2>
        </a>
        <button
            class="fav-btn"
            data-id="${movieData.id}"
            data-title="${movieData.title}"
            data-poster="${movieData.poster_path}"
        >
            ★
        </button>
    </li>`
}

export async function displayMovies() {
    const movieList = document.querySelector("#movie-list");
    const movies = await getMovieData("movie/popular?language=en-US&page=1");
    renderListWithTemplate(movieCardTemplate, movieList, movies.results);

    setupFavoriteButtons()
}

function setupFavoriteButtons() {
    const buttons = document.querySelectorAll(".fav-btn");

    buttons.forEach(btn => {
        const movieFav = {
            id: Number(btn.dataset.id),
            title: btn.dataset.title,
            poster_path: btn.dataset.poster
        };

        let favs = getLocalStorage("fav");

        if (favs.some(m => m.id === movieFav.id)) {
            btn.classList.add("active");
        }

        btn.addEventListener("click", () => {
            favs = getLocalStorage("fav");

            if (favs.some(m => m.id === movieFav.id)) {
                favs = favs.filter(m => m.id !== movieFav.id);
                btn.classList.remove("active");
            } else {
                favs.push(movieFav);
                btn.classList.add("active");
            }

            setLocalStorage("fav", favs);
        });
    });
}

export function displayFavoriteMovies() {
    const btnFav = document.querySelector("#filter-fav-btn");

    btnFav.addEventListener("click", () => {
        const movieList = document.querySelector("#movie-list");

        let favs = getLocalStorage("fav");

        renderListWithTemplate(movieCardTemplate, movieList, favs, "afterbegin", true);

        setupFavoriteButtons()
    });
}