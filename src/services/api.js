const API_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmZjMDI5OGRjM2UzZWEyMzgwODQ4YTNhYTRkNDAzYSIsIm5iZiI6MTc0NzkzMDA5Ny4wNjgsInN1YiI6IjY4MmY0YmYxMDhiOGYzOWFiYzY4NDgxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FDKGqzPzxLH0ysuWlNB4Sq8_isb55ZYActLK8GjwGcM"
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  return data.results;
}

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  return data.results;
}
