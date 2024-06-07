import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    netflixOriginals: [],
    horrorMovies: [],
    comedyMovies: [],
    topRated: [],
    actionMovies: [],
    trendingMovies: [],
    onViewed: [],
  }),
  getters: {
    getCurrent: (state) => state.onViewed,
    getNetflix: (state) => state.netflixOriginals.results,
    getHorror: (state) => state.horrorMovies.results,
    getComedy: (state) => state.comedyMovies.results,
    getToprated: (state) => state.topRated.results,
    getTrending: (state) => state.trendingMovies.results,
    getAction: (state) => state.actionMovies.results,
  },
  actions: {
    setCurrent(onView) {
      this.onViewed = onView;
    },
    setNetflix(netFlix) {
      this.netflixOriginals = netFlix;
    },
    setHorror(horror) {
      this.horrorMovies = horror;
    },
    setComedy(comedy) {
      this.comedyMovies = comedy;
    },
    setAction(actionmovie) {
      this.actionMovies = actionmovie;
    },
    setToprated(topRated) {
      this.topRated = topRated;
    },
    setTrending(trending) {
      this.trendingMovies = trending;
    },
  },
});
