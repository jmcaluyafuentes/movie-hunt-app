import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Avengers", release_date: "2021" },
    { id: 2, title: "Superman", release_date: "2018" },
    { id: 3, title: "Batman", release_date: "2015" },
    { id: 4, title: "Green Lantern", release_date: "2023" },
  ];

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
          className="seach-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="search-button"
        >
          Search
        </button>
      </form>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default HomePage;
