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

export async function displayUpcomingMovies() {
    // const upcomingTemplate = `<li class="movie-card">
    //     <a href="/wdd330-MovieHub/movie-details.html?movie=${movieData.id}">
    //         <img src="https://image.tmdb.org/t/p/w342${movieData.poster_path}" alt="${movieData.title}" loading="lazy" width="300" height="482">
    //         <h2>${movieData.title}</h2>
    //     </a>
    //     <button
    //         class="fav-btn"
    //         data-id="${movieData.id}"
    //         data-title="${movieData.title}"
    //         data-poster="${movieData.poster_path}"
    //         data-rating="${movieData.vote_average}"
    //     >
    //         ★
    //     </button>
    // </li>`


    const movieList = document.querySelector("#upcoming-movies");
    const movies = await getMovieData("movie/upcoming?language=en-US&page=1");

    const upcomingMovies = movies.results.slice(0, 2);

    renderListWithTemplate(movieCardTemplate, movieList, upcomingMovies);
}
