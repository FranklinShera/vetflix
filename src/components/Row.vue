<template>
  <div :class="{ 'large-row' : isLarge , 'small-row' : !isLarge}">
      <h2 id="title">{{ this.title }}</h2>
      <div id="poster_row">
           <div id="poster" @click="viewMovie(movie)" v-for="movie in this.movies" :key=movie.id >
             <img :src="returnImage(movie.poster_path,movie.backdrop_path)" :class="{ 'large-poster' : isLarge , 'small-poster' : !isLarge}" alt="movie.title">
         
           </div>
      </div>
    
  </div>
</template>

<script>

export default {
  name: 'Row',
  props: {
    title : String,
    movies : Object,
    isLarge : Boolean
  },
  data(){
      return{
          image_path : 'https://image.tmdb.org/t/p/original/'
      }
  },
  methods:{
    returnImage(poster ,backdrop){
          return (this.isLarge) ? this.image_path + poster : this.image_path + backdrop;
    },
    viewMovie(movie){
      let movietitle ='';
      if(movie.title){
          movietitle = movie.title
      }else{
        movietitle = movie.name
      }
      let movieName = movietitle + " " + movie.id
      let movieID = movie.id;
      let title = movieName.toLowerCase().replace(/ /g , "-");
       this.$router.push({ name: 'movie', params: {  title , movieID  } });
    }
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.large-poster{
  height: 240px;
  margin-right: 5px;
}

.small-poster{
  height: 130px;
  margin-right: 5px;
}

.large-row{
  height: 300px;
  
}

.small-row{
  height: 210px;
}

.large-poster:hover{
  transform: scale(1.09);
  
 transition: transform 450ms;
}

.small-poster:hover{
 transform: scale(1.05);
 
 transition: transform 450ms;
}

#title{
    color: white !important;
    margin-bottom: 15px;
    margin-left: 15px;

}

#poster_row{
  display: flex;
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 100px;

  /* overflow-y: hidden;
  overflow-x: scroll;  */
}
#poster_row::-webkit-scrollbar {
  display: none;
}

#poster{
 padding-left: 5px;
 object-fit: contain;
 transition: transform 450ms;
}




@media (max-width: 720px) {

#poster{
 object-fit: contain;
 transition: transform 450ms;
}
#title{
font-size: 4vw;
}
#poster_row{
  display: flex;
  margin-top: 10px;
  margin-bottom: 40px;

  overflow-y: hidden;
  overflow-x: scroll;  
}

#poster{
 object-fit: contain;
 transition: transform 450ms;
}


.large-poster{
  height: 170px;
  margin-right: 2px;
}

.small-poster{
  height: 85px;
  margin-right: 2px;
}

.large-row{
  height: 200px;
  margin-bottom: 10px;
}

.small-row{
  height: 110px;
  margin-bottom: 20px;
}

.large-poster:hover{
  transform: scale(1.09);
  
 transition: transform 450ms;
}

.small-poster:hover{
 transform: scale(1.05);
 
 transition: transform 450ms;
}

}
</style>
