import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css'
import FavoritesPage from './pages/FavoritesPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/favorites" element={<FavoritesPage />}/>
      </Routes>
    </>
  )
}

export default App
