import { initHeaderFooter } from "./HeaderFooter.mjs";
import { getMovieData } from "./ExternalData.mjs";
import { getParam } from "./Tools.mjs";
import { renderTemplate } from "./MovieDetails.mjs";

initHeaderFooter();

const movieElement = document.querySelector("#movie-details");
const movieId = getParam("movie");

async function displayMovie() {
    const movie = await getMovieData(`movie/${movieId}?language=en-US`);
    const movieTrailer = await getMovieData(`movie/${movieId}/videos?language=en-US`);
    const movieReviews = await getMovieData(`movie/${movieId}/reviews?language=en-US`);
    renderTemplate(movieElement, movie, movieTrailer, movieReviews);
}

displayMovie();