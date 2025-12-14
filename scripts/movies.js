import { initHeaderFooter } from "./HeaderFooter.mjs";
import { pageButtons, setTypes } from "./MovieListing.mjs";
import { displayFavoriteMovies, displayMovies } from "./FilterMovies.mjs";

initHeaderFooter();

displayMovies();

displayFavoriteMovies()

pageButtons()

const filter = document.querySelector("#movieFilter");
const pageNumber = document.querySelector("#pageNumber");

filter.addEventListener("change", (e) => {
  const value = e.target.value;
  setTypes(value)
  displayMovies(value);
});