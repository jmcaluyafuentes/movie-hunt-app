const API_KEY="e2fc0298dc3e3ea2380848a3aa4d403a"
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json;
  return data.results;
}
