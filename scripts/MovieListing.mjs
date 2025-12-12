export function movieCardTemplate(movieData) {
    return `<li class="movie-card">
        <a href="/wdd330-MovieHub/movie-details.html?movie=${movieData.id}">
            <img src="https://image.tmdb.org/t/p/w500${movieData.poster_path}" alt="${movieData.original_title}">
            <h2>${movieData.title}</h2>
        </a>
    </li>`
}

