const API_TOKEN = import.meta.env.VITE_APP_API_TOKEN;
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

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
