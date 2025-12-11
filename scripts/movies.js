import { initHeaderFooter } from "./HeaderFooter.mjs";
import { getMovieData, movieCardTemplate } from "./MovieListing.mjs";
import { renderListWithTemplate } from "./Tools.mjs";

initHeaderFooter();

const movieList = document.querySelector("#movie-list");

async function init() {
    const movies = await getMovieData();
    renderListWithTemplate(movieCardTemplate, movieList, movies);
}

init();