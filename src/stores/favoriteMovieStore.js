import { create } from "zustand";

const useFavoriteMovie = create((set) => ({
  favoriteMovies: [],
  
  addFavoriteMovie: (movie) =>
    set((state) => ({ favoriteMovies: [...state.favoriteMovies, movie] })),

  removeFavoriteMovie: (movieId) =>
    set((state) => ({
      favoriteMovies: state.favoriteMovies.filter(
        (movie) => movie.id !== movieId
      ),
    })),
}));

export default useFavoriteMovie;
