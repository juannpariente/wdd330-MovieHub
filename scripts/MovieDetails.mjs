export function renderTemplate(element, movieData, trailer, reviews) {
    const html = `
    <img src="https://image.tmdb.org/t/p/w500${movieData.poster_path}" alt="${movieData.original_title}">
    
    <div class="main-details">
        <h2>${movieData.title}</h2>
        <p>Rating: ${movieData.vote_average.toFixed(1)}⭐ | Year: ${movieData.release_date.slice(0, 4)}</p>

        <h3>Synopsis</h3>
        <p>${movieData.overview}</p>

        <h3>Genres</h3>
        <p>${movieData.genres.map(g => g.name).join(", ")}</p>
    </div>
    <div class="trailer">
        <iframe src="https://www.youtube.com/embed/${trailer.key}" title="${movieData.title}" width="800" height="450"  allowfullscreen></iframe>
    </div>
    <div class="reviews">
        <h2>Reviews</h2>
        <ul>
            ${
                reviews.length > 0
                ? reviews.slice(0, 3).map(r => `
                    <li>
                        <p><strong>${r.author}</strong></p>
                        <p>${r.content}</p>
                    </li>
                `).join("")
                : "<p>No reviews available.</p>"
            }
        </ul>
    </div>
    `;

    element.insertAdjacentHTML("beforeend", html);
}
