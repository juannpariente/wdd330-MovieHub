import { renderListWithTemplate, getLocalStorage } from "./Tools.mjs";
import { setupFavoriteButtons } from "./MovieListing.mjs";
import { movieCardTemplate } from "./MovieListing.mjs";
import { getMovieData } from "./ExternalData.mjs";

export async function displayMovies(type = "popular", page = 1) {
    const movieList = document.querySelector("#movie-list");
    const movies = await getMovieData(`movie/${type}?language=en-US&page=${page}`);
    renderListWithTemplate(movieCardTemplate, movieList, movies.results, "afterbegin", true);

    setupFavoriteButtons();
}

export function displayFavoriteMovies() {
    const btnFav = document.querySelector("#filter-fav-btn");

    btnFav.addEventListener("click", () => {
        const movieList = document.querySelector("#movie-list");
        const pagination = document.querySelector(".pagination");

        let favs = getLocalStorage("fav");

        renderListWithTemplate(movieCardTemplate, movieList, favs, "afterbegin", true);

        setupFavoriteButtons();

        pagination.classList.add("hidden");
    });
}

export async function displayTopRatedMovies() {
    const movieList = document.querySelector("#top-rated-movies");
    const movies = await getMovieData("movie/top_rated?language=en-US&page=1");

    const descMovies = movies.results.sort((a, b) => b.vote_average - a.vote_average);

    const topRated = descMovies.slice(0, 4);

    renderListWithTemplate(movieCardTemplate, movieList, topRated);

    setupFavoriteButtons();
}
