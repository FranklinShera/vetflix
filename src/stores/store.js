import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default  new Vuex.Store({
    state: {
       netflixOriginals: [],
       horrorMovies: [],
       comedyMovies: [],
       topRated: [],
       actionMovies: [],
       trendingMovies: [],

       onViewed: [],

    },
    getters:{
        getCurrent(state){
            return state.onViewed;
        },
        getNetflix(state){
            return state.netflixOriginals.results;
        },
        getHorror(state){
            return state.horrorMovies.results;
        },
        getComedy(state){
            return state.comedyMovies.results;
        },
        getToprated(state){
            return state.topRated.results ;
        },
        getTrending(state){
            return state.trendingMovies.results;
        },
        getAction(state){
            return state.actionMovies.results;
        }
    },
    mutations: {
        setCurrent(state, onView){
            state.onViewed = onView;
        },
        setNetflix(state, netFlix){
            state.netflixOriginals = netFlix;
        },

         setHorror(state, horror){
           state.horrorMovies = horror;
        },

        setComedy(state, comedy){
            state.comedyMovies = comedy;
        },

        setAction(state, actionmovie){
            state.actionMovies = actionmovie;
        },

        setToprated(state, topRated){
            state.topRated = topRated;
        },

        setTrending(state, trending){
            state.trendingMovies = trending;
        },
    },
    actions: {
        setCurrent({ commit }, onView){
            commit('setCurrent', onView);
        },
        setNetflix({ commit }, netFlix){
            commit('setNetflix', netFlix);
        },

        setHorror({ commit }, horror){
            commit('setHorror', horror);
        },

        setComedy({ commit }, comedy){
            commit('setComedy', comedy);
        },

        setAction({ commit }, actionmovie){
            commit('setAction', actionmovie);
        },

        setToprated({ commit }, topRated){
            commit('setToprated', topRated);
        },


        setTrending({ commit }, trending){
            commit('setTrending', trending);
        },
        
    }
})