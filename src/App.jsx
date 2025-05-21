import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css'
import FavoritesPage from './pages/FavoritesPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/favorites" element={<FavoritesPage />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
