import { initHeaderFooter } from "./HeaderFooter.mjs";
import { displayMovies, pageButtons } from "./MovieListing.mjs";
import { displayFavoriteMovies } from "./FilterMovies.mjs";

initHeaderFooter();

displayMovies();

displayFavoriteMovies()

pageButtons()