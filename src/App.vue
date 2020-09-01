<template>
  <div id="app">
    <header :class="{ 'flix-bg': topBg }" >
      <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png" alt="">
      <span id="my-name">by Franklin Shera</span>
    </header>
   
    <router-view @scroll="checkBg">
    </router-view>
 
    
  </div>
</template>

<script>

import axios from 'axios'
 window.addEventListener("load", function(event) {
      window.scrollTo(0, 0)
      console.log(event);
  });


import requests from './requests';
export default {
  name: 'App',
 
  data(){
    return{
        topBg: false 
    }
  },
  created () {
    window.addEventListener('scroll', this.  checkBg);
  },
  destroyed () {
    window.removeEventListener('scroll', this.  checkBg);
  },
  methods: {
    checkBg(){
      if(window.scrollY > 210){
        this.topBg = true;
        console.log(this.topBg);
      }else{
          this.topBg = false;
            console.log(this.topBg);
      }

    }
  
},
mounted: function (){
       axios.get(requests.netflixOriginals)
                .then((res) => {
                  this.$store.dispatch('setNetflix', res.data );
                  this.netflixOriginals = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

         axios.get(requests.topRated)
               .then((res) =>{
                  this.$store.dispatch('setToprated', res.data );
                  this.topRated = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

           axios.get(requests.trending)
               .then((res) =>{
                  this.$store.dispatch('setTrending', res.data );
                  this.trending = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

         axios.get(requests.actionMovies)
                .then((res) =>{
                  this.$store.dispatch('setAction', res.data );
                        this.actionMovies = res.data.results;
                })
                .catch(err =>{
                  console.log(err);
                })

         axios.get(requests.comedyMovies)
                .then((res) =>{
                  this.$store.dispatch('setComedy', res.data );
                        this.comedyMovies = res.data.results;

                })
                .catch(err =>{
                  console.log(err);
                })

         axios.get(requests.horrorMovies)
                .then((res) =>{
                  this.$store.dispatch('setHorror', res.data );
                        this.horrorMovies = res.data.results;

                })
                .catch(err =>{
                  console.log(err);
                })
}
}
</script>

<style>
html {
  scroll-behavior: smooth;
}


#logo{
  height: 40px;
  margin-left: 30px;
  margin-top: 20px;
}

#my-name{
  margin-top: 20px;
  margin-right: 30px;
  color: #E50914;
 filter: drop-shadow(0 0 2px #111);
}


  * {
    padding: 0;
    margin : 0;
  }

header{
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  transition: ease-in;
  display: flex;
  justify-content: space-between;
}

.flix-bg{
  background: rgba(0, 0, 0, 0.7);
}
header > h1, header > span {
  margin-left: 20px;
}
</style>
