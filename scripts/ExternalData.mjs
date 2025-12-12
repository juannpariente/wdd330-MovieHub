const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGU1YTllODY3MDAwYjBjYjAzMzAwMGU3OTIzMzBkOSIsIm5iZiI6MTc2NTQ3MjE1OC43ODQsInN1YiI6IjY5M2FmNzllZjlhMTllNDEwZGFlYTQwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bW1q37-LXt4MK9gKgi71Mx-v95u60pYdVlIZI3b5nbs"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

export async function getMovieData(endpoint) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/${endpoint}`, options);
    if (response.ok) {
      const data = await response.json()
      return data;
    } else {
      throw Error(await response.text())
    }
  } catch (error) {
    console.log(error);
  }
};