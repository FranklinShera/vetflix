<template>
  <div id="movie-home">
      <Hero :movies="[ ...topRated]"/>
    <Row title="Netflix Originals" isLarge :movies="{ ...netflixOriginals }"/>
    <Row title="Trending Movies" :isLarge="false"  :movies="{ ...trending }" />
    <Row title="Top Rated Movies" :isLarge="false" :movies="{ ...topRated }" />
    <Row title="Horror Movies" :isLarge="false" :movies="{ ...horrorMovies }"/>
    <Row title="Action Movies" :isLarge="false" :movies="{ ...actionMovies }"/>
    <Row title="Comedy Movies" :isLarge="false" :movies="{ ...comedyMovies }"/>
    
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
      }
  },
  methods:{
     
  },
  mounted: function (){
      
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
