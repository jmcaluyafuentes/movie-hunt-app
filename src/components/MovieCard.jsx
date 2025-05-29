import useFavoriteMovie from '../stores/favoriteMovieStore';
import '../css/MovieCard.css'

const MovieCard = ({movie}) => {
  const favoriteMovies = useFavoriteMovie(state => state.favoriteMovies);
  const addFavoriteMovie = useFavoriteMovie(state => state.addFavoriteMovie);
  const removeFavoriteMovie = useFavoriteMovie(state => state.removeFavoriteMovie);
  
  const isFavorite = favoriteMovies.some(favMovie => favMovie.id === movie.id)

  function onFavoriteClick(e) {
    e.preventDefault();

    if (isFavorite) {
      removeFavoriteMovie(movie.id)
    } else {
      addFavoriteMovie(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className={`favorite-btn ${isFavorite ? 'active' : ''}`} onClick={onFavoriteClick}>
            ❤︎
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard