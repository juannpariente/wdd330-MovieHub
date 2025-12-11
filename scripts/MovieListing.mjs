const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGU1YTllODY3MDAwYjBjYjAzMzAwMGU3OTIzMzBkOSIsIm5iZiI6MTc2NTQ3MjE1OC43ODQsInN1YiI6IjY5M2FmNzllZjlhMTllNDEwZGFlYTQwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bW1q37-LXt4MK9gKgi71Mx-v95u60pYdVlIZI3b5nbs"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

export async function getMovieData() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    if (response.ok) {
      const data = await response.json()
      return data.results;
    } else {
      throw Error(await response.text())
    }
  } catch (error) {
    console.log(error);
  }
};

export function movieCardTemplate(movieData) {
    return `<li class="movie-card">
        <a href="../movie-details/?product=${movieData.id}">
            <img src="https://image.tmdb.org/t/p/w500${movieData.poster_path}" alt="${movieData.original_title}">
            <h2>${movieData.title}</h2>
        </a>
    </li>`
}

