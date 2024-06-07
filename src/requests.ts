const API_KEY = "";
const API_URL = `https://api.themoviedb.org/3`;

export default {
  airingToday: `${API_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
  tvOnAir: `${API_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
  dicoverMovie: `${API_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
  discoverTv: `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
  trending: `${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginals: `${API_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  getGenres: `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  api_key: `${API_KEY}`,
};
