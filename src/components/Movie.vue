<template>
  <div id="movie" :style="{ backgroundImage: `url(${ bg })` }">
     <h1 id="movie-title">{{ this.movie.title ||  this.movie.name }}</h1>
     
      <p id="about">
        {{ this.movie.overview }}
      </p>
      <div id="info">
          <div id="rating">
              <p>Rating</p>
              <p style="text-align: center">{{ this.movie.vote_average }}</p>
          </div>
          <div id="release">
              <p>Release</p>
              <p>{{ this.movie.release_date || this.movie.first_air_date }}</p>
          </div>
          <div id="genre">
              <p>Genre</p>
              <p v-for="genre in this.movie.genre_ids" :key="genre" style="display: inline">{{ genre }} </p>
          </div>
          <div id="adult">
              <p>18+</p>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Movie',
    props: ["title" , "movie"],
  data(){
      return{
        genre:[],
          image_path : 'https://image.tmdb.org/t/p/original/',
          bg : 'https://image.tmdb.org/t/p/original' + this.movie.backdrop_path,
           poster : 'https://image.tmdb.org/t/p/original' + this.movie.poster_path
      }
  },
  methods:{
     
  }
  ,
  mounted: function(){
    
  }
}
</script>

<style scoped>
#rating{
   font-size: 2vw;
  color : white;
  margin-right: 15px ;
  background-color:  #111111BD;
  width: 10vw;
  text-align: center;
  height: 5vw;
  padding-top: .9vw ;
  border: none;
  border-radius: 15px;
}

#release{
   font-size: 2vw;
  color : white;
   margin-right: 15px ;
    background-color:  #111111BD;
    width: 12vw;
  text-align: center;
  height: 5vw;
  padding-top: .9vw ;
  border: none;
  border-radius: 15px;
}

#genre{
   font-size: 2vw;
  color : white;
   margin-right: 15px ;
    background-color:  #111111BD;
    width: 12vw;
  text-align: center;
  height: 5vw;
  padding-top: .9vw ;
  border: none;
  border-radius: 15px;
}

#adult{
    font-size: 4.5vw;
  color : #E50914;
   background-color: #111111BD;
   width: 10vw;
  text-align: center;
  height: 5vw;
  padding: .4vw 0 ;
  border: none;
  border-radius: 15px;
}


#info{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

#movie-title{
  text-align: center;
  font-size: 5vw;
  color : white;
   margin-left: 30px; 
   padding-top:360px;
    filter: drop-shadow(0 0 2px #a84032);
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
  border: none;
  border-radius: 15px;
}
</style>
