
import Movie from './components/Movie'
import MoviesHome from './components/MoviesHome'
export const routes = [
    
    {
        path: '/', 
        component: MoviesHome
    },
   
    {
        path: '/:title',
        name: 'movie',
        props: true,
        component: Movie,
    }
]