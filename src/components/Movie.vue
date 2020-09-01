<template>
  <div id="movie" :style="{ backgroundImage: `url(${ image_path }${ movie.backdrop_path })` }">
     <h1 id="movie-title">{{ movie.title ||  movie.name }}</h1>
     
      <p id="about">
        {{ this.movie.overview }}
      </p>
      <div id="info">
          <div id="rating">
              <p>Rating</p>
              <p style="text-align: center">{{ movie.vote_average }}</p>
          </div>
          <div id="release">
              <p>Release</p>
              <p>{{ movie.release_date || movie.first_air_date }}</p>
          </div>
          <div id="genre">
              <p>Genre</p>
              <p  style="display: inline" v-for="genre in movie.genres" :key="genre.id">{{ genre.name+ " " }} </p>
          </div>
          <div id="adult" v-if="movie.adult">
              <p>18+</p>
          </div>
      </div>
      <div id="production"> 
          <div class="company" v-for="company in movie.production_companies" :key="company.id">
            <img class="logo" :src="returnImage(company.logo_path)" alt="">
             <h4>{{ company.name }}  , {{ company.origin_country }}</h4>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import requests from '../requests';

export default {
  name: 'Movie',
    props: ["title" , "movieID"],
  data(){
      return{
          image_path : 'https://image.tmdb.org/t/p/original',
          movie : [],
      }
  },
  methods:{
     returnImage(logo){
          return this.image_path + logo;
    },
      getData(){
        this.movie =  this.$store.getters.getCurrent
        }
  }
  ,
  mounted: function(){
   let  id = this.movieID;
        axios.get(`https://api.themoviedb.org/3/movie/${ id }?api_key=${requests.api_key}&language=en-US`)
                .then((res) => {
                  this.$store.dispatch('setCurrent', res.data );
                  this.movie = res.data;
                  this.getData();
                })
                .catch(err =>{
                  console.log(err);
                })
  }
}
</script>

<style scoped>
.logo{
  margin: 0 auto;
  padding-left: 20px;
  max-width: 85px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
#production{
   display: flex;
   height: 180px;
  justify-content: center;
  margin-top: 160px;
  padding:0 100px;
   background-image: linear-gradient(#11111126, #111111FF);
}

.company > h4{
  color: white;
  padding: 0 20px;
}

#rating{
   font-size: 1.7vw;
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
   font-size: 1.7vw;
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
  font-size: 1.7vw;
  color : white;
   margin-right: 15px ;
    background-color:  #111111BD;
    min-width:12vw;
  text-align: center;
  height: 5vw;
  padding-top: .9vw ;
  border: none;
  border-radius: 15px;
  padding-right: 15px;
   padding-left: 15px;
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
