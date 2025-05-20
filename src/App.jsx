import MovieCard from './components/MovieCard'
import './App.css'

function App() {
  return (
    <>
      <MovieCard movie={{title: "John's Movie", release_date: "2025"}}/>
      <MovieCard movie={{title: "Mark's Movie", release_date: "2021"}}/>
    </>
  )
}

export default App
