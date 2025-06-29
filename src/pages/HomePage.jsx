import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPopularMovies, searchMovies } from "../services/api";
import MoviesGrid from "../components/MoviesGrid";
import "../css/HomePage.css";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [numberOfMovies, setNumberOfMovies] = useState(0);
  const location = useLocation();

  const loadPopularMovies = async () => {
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSearchQuery("");
    setLoading(true);
    loadPopularMovies();
    
    if (location.pathname === '/') {
      loadPopularMovies();
    }
  }, [location.key]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery.toLowerCase());
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      loadPopularMovies();
    }
    const lowerSearchQuery = searchQuery.toLowerCase();
    const countMovies = movies.filter(movie => movie.title.toLowerCase().includes(lowerSearchQuery)).length;
    setNumberOfMovies(countMovies);
  }, [searchQuery, movies]);

  return (
    <div className="home-page">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies ..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        numberOfMovies === 0 ? (
          <p>{`There are no movies with title containing "${searchQuery}".`}</p>
        ) : (
          <MoviesGrid movies={movies} numberOfMovies={numberOfMovies} searchQuery={searchQuery}/>
        )
      )}
    </div>
  );
};

export default HomePage;
