import { getLocalStorage, setLocalStorage } from "./Tools.mjs";

export function movieCardTemplate(movieData) {
    return `<li class="movie-card">
        <a href="/wdd330-MovieHub/movie-details.html?movie=${movieData.id}">
            <img src="https://image.tmdb.org/t/p/w500${movieData.poster_path}" alt="${movieData.original_title}">
            <h2>${movieData.title}</h2>
        </a>
        <button class="fav-btn" data-id="${movieData.id}">★</button>
    </li>`
}

export function setupFavoriteButtons() {
    const buttons = document.querySelectorAll(".fav-btn");
    let favs = getLocalStorage("fav");

    buttons.forEach(btn => {
        const movieId = Number(btn.dataset.id);

        if (favs.includes(movieId)) {
            btn.classList.add("active");
        }

        btn.addEventListener("click", () => {

            if (favs.includes(movieId)) {
                favs = favs.filter(id => id !== movieId);
                btn.classList.remove("active");
            } else {
                favs.push(movieId);
                btn.classList.add("active");
            }

            setLocalStorage("fav", favs);
        });
    });
}

