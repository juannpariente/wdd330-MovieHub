import { getLocalStorage, setLocalStorage } from "./Tools.mjs";
import { renderListWithTemplate } from "./Tools.mjs";
import { getMovieData } from "./ExternalData.mjs";

export function movieCardTemplate(movieData) {
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
            data-rating="${movieData.vote_average}"
        >
            ★
        </button>
    </li>`
}

let currentPage = 1

export async function displayMovies(page = currentPage) {
    const movieList = document.querySelector("#movie-list");
    const movies = await getMovieData(`movie/popular?language=en-US&page=${page}`);
    renderListWithTemplate(movieCardTemplate, movieList, movies.results, "afterbegin", true);

    setupFavoriteButtons()
}

export function setupFavoriteButtons() {
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

export function pageButtons() {
    const prevBtn = document.querySelector("#prevPage");
    const nextBtn = document.querySelector("#nextPage");
    const pageNumber = document.querySelector("#pageNumber");



    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            pageNumber.textContent = currentPage;
            displayMovies(currentPage);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });

    nextBtn.addEventListener("click", () => {
        currentPage++;
        pageNumber.textContent = currentPage;
        displayMovies(currentPage);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}