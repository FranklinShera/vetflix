// TMDB API STUFF

    const API_KEY =  '7a679a23f3756b0936856515859ef5d8';

    const API_URL = `https://api.themoviedb.org/3`;

    // const API_READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTY3OWEyM2YzNzU2YjA5MzY4NTY1MTU4NTllZjVkOCIsInN1YiI6IjVmNDgwN2ViZWEzOTQ5MDAzNjNjY2U4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j-tubSK2Dc6ysdCny8eezOGJi_uNuN3xFYCmkz2NvRc';


    // ENDPOINTS

    export default {
        trending: `${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
        netflixOriginals: `${API_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
        topRated: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        actionMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
        comedyMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
        horrorMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`, 
        getGenres: `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
        api_key: '7a679a23f3756b0936856515859ef5d8'
        
    }