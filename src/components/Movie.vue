<template>
  <div id="movie" :style="{ backgroundImage: `url(${ bg })` }">
     <h1 id="movie-title">{{ this.movie.title ||  this.movie.name }}</h1>
     
      <p id="about">
        {{ this.movie.overview }}
      </p>
  </div>
</template>

<script>

export default {
  name: 'Movie',
    props: ["title" , "movie"],
  data(){
      return{
          image_path : 'https://image.tmdb.org/t/p/original/',
          bg : 'https://image.tmdb.org/t/p/original' + this.movie.backdrop_path,
           poster : 'https://image.tmdb.org/t/p/original' + this.movie.poster_path
      }
  },
  methods:{
     
  }
}
</script>

<style scoped>
#movie-title{
  text-align: center;
  color : white;
   margin-left: 30px; 
   padding-top:360px;
}
#movie{
  height: 1000px;
  object-fit: contain;
}


#about{
  text-align: center;
  color: white;
  width: 800px;
  margin: auto;
  padding: 20px;
  margin-top: 30px;
  background-color: rgba(0, 0, 0, .5);
}
</style>
