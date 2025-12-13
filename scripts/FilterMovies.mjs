import { renderListWithTemplate, getLocalStorage } from "./Tools.mjs";
import { setupFavoriteButtons } from "./MovieListing.mjs";
import { movieCardTemplate } from "./MovieListing.mjs";
import { getMovieData } from "./ExternalData.mjs";

export function displayFavoriteMovies() {
    const btnFav = document.querySelector("#filter-fav-btn");

    btnFav.addEventListener("click", () => {
        const movieList = document.querySelector("#movie-list");

        let favs = getLocalStorage("fav");

        renderListWithTemplate(movieCardTemplate, movieList, favs, "afterbegin", true);

        setupFavoriteButtons()
    });
}

export async function displayTopRatedMovies() {
    const movieList = document.querySelector("#top-rated-movies");
    const movies = await getMovieData("movie/top_rated?language=en-US&page=1");

    const descMovies = movies.results.sort((a, b) => b.vote_average - a.vote_average);

    const topRated = descMovies.slice(0, 6);

    renderListWithTemplate(movieCardTemplate, movieList, topRated);

    setupFavoriteButtons()
}
