import React, { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import '../css/HomePage.css'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies ...");
      }
      finally {
        setLoading(false);
      }
    }

    loadPopularMovies();
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };

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

      <div className="movies-grid">
        {movies.map((movie) => 
          movie.title.toLowerCase().includes(searchQuery) && (
            <MovieCard movie={movie} key={movie.id} />
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
