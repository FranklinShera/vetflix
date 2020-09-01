<template>
  <div id="hero" :style="{ backgroundImage : `url(${'https://image.tmdb.org/t/p/original'+ this.shown.backdrop_path})`}">
     <div class="hero-info">
        <h2 class="hero-title">{{ this.shown.title }}</h2>
      <div class="hero-btns">
        <button class="hero-btn">Play</button>
        <button class="hero-btn">My List</button>
      </div>

      <p class="movie-overview">{{ this.shown.overview }}</p>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<script>

export default {
  name: 'Hero',
  props : ["movies"],
  data(){
      return{
          image_path : 'https://image.tmdb.org/t/p/original/',
         
      }
  },
  methods:{
     
  },
  computed:{
    shown: function (){

        return this.movies[Math.floor((Math.random() * this.movies.length) + 1)];
         
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #hero{
    height: 448px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  .hero-info{
    color: white;
    margin-left: 30px;
    padding-top: 200px;
    
  }

  .hero-title{
    font-size: 3vw;
    font-weight: 800;
  }

  .hero-btn{
    background-color: #111;
    color: white;
    border-radius: 5px;
    border:none;
    padding:5px;
    font-size: 1.5vw;
    margin-top: 20px;
    height: 3vw;
    width: 8vw;
    margin-right: 20px;
  }

   .hero-btn:hover{
       background-color: #fff;
        color: #111;
   }

  .movie-overview{
    margin-top: 10px;
    width: 39vw;
  }
</style>
