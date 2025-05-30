import { useEffect } from 'react';
import useFavoriteMovie from '../stores/favoriteMovieStore.js';

const SyncFavoritesToLocalStorage = () => {
  const favoriteMovies = useFavoriteMovie(state => (state.favoriteMovies));

  useEffect(() => {
    localStorage.setItem("localFavMovies", JSON.stringify(favoriteMovies));
  },[favoriteMovies]);

  return (
    null
  )
}

export default SyncFavoritesToLocalStorage