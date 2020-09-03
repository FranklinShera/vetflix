<template>
  <div id="app">
    <header :class="{ 'flix-bg': topBg }" >
      <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png" alt="">
      <span id="my-name">SHERACLASSICS</span>
    </header>
   
    <router-view @scroll="checkBg">
    </router-view>
 
     <footer> <img id="logo2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png" alt="">
      Demo Created By &nbsp; <span id="footer-name"><a style="color: white;text-decoration: none;margin-left: 3px" href="mailto:me@sheraclassics.co.ke">&nbsp; Franklin Shera</a> {{  new Date().getFullYear() }}</span></footer>
  </div>
</template>

<script>

import axios from 'axios'
 window.addEventListener("load", function(event) {
      window.scrollTo(0, 0)
      console.log(process.env.TMDB_API_KEY);
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

footer{
  color: white;
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 20px;
}

 * {
    padding: 0;
    margin : 0;
  }
html {
  scroll-behavior: smooth;
}

.app{
  background-color: #111;
}

#logo{
  height: 40px;
  margin-left: 30px;
  margin-top: 20px;
}

#logo2{
  height: 12px;
  margin-top: 20px;
}

.footer-name{
  font-weight: 900;
  font-size: 1rem;
}
#my-name{
  margin-top: 20px;
  margin-right: 30px;
  color: white;
 filter: drop-shadow(0 0 2px #111);
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



@media (max-width: 720px) {
    #logo{
      height: 25px;
      margin-left: 30px;
      margin-top: 12px;
    }

    #my-name{
      margin-top: 12px;
      margin-right: 30px;
      color: white;
    filter: drop-shadow(0 0 2px #111);
    }

    header{
      position: fixed;
      top: 0;
      width: 100%;
      height: 50px;
      transition: ease-in;
      display: flex;
      justify-content: space-between;
    }
}


</style>
