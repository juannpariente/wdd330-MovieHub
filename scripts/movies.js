import { initHeaderFooter } from "./HeaderFooter.mjs";
import { movieCardTemplate, setupFavoriteButtons } from "./MovieListing.mjs";
import { renderListWithTemplate } from "./Tools.mjs";
import { getMovieData } from "./ExternalData.mjs";

initHeaderFooter();

const movieList = document.querySelector("#movie-list");

async function displayMovies() {
    const movies = await getMovieData("movie/popular?language=en-US&page=1");
    renderListWithTemplate(movieCardTemplate, movieList, movies.results);

    setupFavoriteButtons()
}

displayMovies();