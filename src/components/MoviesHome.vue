<template>
  <div id="movie-home">
      <Hero :movies="[ ...collection ]" />
    <Row title="Netflix Originals" isLarge :movies="{ ...netflixOriginals }"/>
    <Row title="Airing Today" :isLarge="false"  :movies="{ ...airingToday }" />
    <Row title="TV Shows On Air" :isLarge="false" :movies="{ ...tvOnAir }"/>
    <Row title="Trending Movies" :isLarge="false"  :movies="{ ...trending }" />
    <Row title="Top Rated Movies" :isLarge="false" :movies="{ ...topRated }" />
    <Row title="Horror Movies" :isLarge="false" :movies="{ ...horrorMovies }"/>
    <Row title="Action Movies" :isLarge="false" :movies="{ ...actionMovies }"/>
    <Row title="Comedy Movies" :isLarge="false" :movies="{ ...comedyMovies }"/>    
    <Row title="Discover Movies" :isLarge="false" :movies="{ ...dicoverMovie }"/>
    <Row title="Discover TV Shows" :isLarge="false" :movies="{ ...discoverTv }"/>
   
  </div>
</template>

<script>
import Row from './Row'

import Hero from './Hero'

import axios from 'axios'

import requests from '../requests';

export default {
  name: 'Home',
    components: {
    Row,
    Hero
  },
  data(){
      return{
            netflixOriginals: [],
            horrorMovies: [],
            comedyMovies: [],
            topRated: [],
            actionMovies: [],  
            trending: [],  
            collection:[],
            tvOnAir: [],
            airingToday: [],  
            dicoverMovie: [],  
            discoverTv:[],
      }
  },
  methods:{

    putMovies(){
            this.collection = [...this.tvOnAir, ...this.airingToday ,...this.dicoverMovie,...this.discoverTv, ...this.netflixOriginals, ...this.horrorMovies, ...this.comedyMovies, ...this.topRated, ...this.actionMovies,...this.trending ];     
    }
  },
  mounted: function (){
        
         axios.get(requests.discoverTv)
               .then((res) =>{
                  this.discoverTv = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

           axios.get(requests.dicoverMovie)
               .then((res) =>{
                  this.dicoverMovie = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

         axios.get(requests.airingToday)
                .then((res) =>{
                        this.airingToday = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

         axios.get(requests.tvOnAir)
                .then((res) =>{
                        this.tvOnAir = res.data.results;

                })
                .catch(err =>{
                  console.log(err);
                })
            

            axios.get(requests.netflixOriginals)
                .then((res) => {
                  this.netflixOriginals = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

         axios.get(requests.topRated)
               .then((res) =>{
                  this.topRated = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

           axios.get(requests.trending)
               .then((res) =>{
                  this.trending = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

         axios.get(requests.actionMovies)
                .then((res) =>{
                        this.actionMovies = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

         axios.get(requests.comedyMovies)
                .then((res) =>{
                        this.comedyMovies = res.data.results;

                })
                .catch(err =>{
                  console.log(err);
                })

         axios.get(requests.horrorMovies)
                .then((res) =>{
                        this.horrorMovies = res.data.results;

                }).then(() =>{
                     this.putMovies();
                })
                .catch(err =>{
                  console.log(err);
                })

}
}
</script>

<style scoped>
#movie-home{
    
}
</style>
