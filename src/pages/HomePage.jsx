import React from 'react'
import MovieCard from '../components/MovieCard'

const HomePage = () => {
  const movies = [
    { id: 1, title: "Avengers", release_date: "2021" },
    { id: 2, title: "Superman", release_date: "2018" },
    { id: 3, title: "Batman", release_date: "2015" },
    { id: 4, title: "Green Lantern", release_date: "2023" },
  ]
  return (
    <div className="home-page">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </div>
  )
}

export default HomePage