import useFavoriteMovie from '../stores/favoriteMovieStore';
import MovieCard from '../components/MovieCard';
import '../css/FavoritesPage.css'

const Favorites = () => {
  const favoriteMovies = useFavoriteMovie((state) => state.favoriteMovies);

  if (favoriteMovies.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorite Movies</h2>
        <div className={`movies-grid ${favoriteMovies.length === 1 ? "adjust-width" : ""}`}>
          {favoriteMovies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  )
}

export default Favorites