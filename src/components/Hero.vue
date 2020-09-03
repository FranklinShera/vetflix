<template>
  <div id="hero" :style="{ backgroundImage : `url(${ image_path }${ shown.backdrop_path } )`}">
     <div class="hero-info">
        <h2 class="hero-title">{{ shown.title }}</h2>
      <div class="hero-btns">
        <button class="hero-btn" @click="download()">Play</button>
        <button class="hero-btn" @click="vfx()">My List</button>
      </div>

      <p class="movie-overview">{{ shown.overview }}</p>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<script>

import axios from 'axios'
import fileDownload from 'js-file-download';
export default {
  name: 'Hero',
  props : ["movies"],
  data(){
      return{
          image_path : 'https://image.tmdb.org/t/p/original',
          posters: []
      }
  },
  methods:{
    vfx(){
        let img = []

         this.movies.forEach((movie) => {
           
           let file_name = ''
           let loc = ''

                if(movie.name){
                      loc = `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      file_name = movie.name

                      console.log(file_name);
                }else if( movie.original_name ){
                        loc = `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        file_name = movie.original_name

                        console.log(file_name);
                }else if( movie.title){
                        loc = `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        file_name = movie.title

                        console.log(file_name);
                }


                img.push({
                          url: loc,
                          filename: file_name.replace(/ /g , "-")
                        })

         });  

            this.posters = img

           },
   download(){

        this.posters.forEach(poster =>{

          // let type = "image/jpeg"
          let url = poster.url
          let fileName = poster.filename + ".jpg"

            axios.get(url, {
                  responseType: 'blob',
                }).then(res => {
                  fileDownload(res.data, fileName);
                });

          console.log(fileName + " -- POSTER DOWNLOADED!");
        })
            
   }
 },
  
  computed:{
    shown: function(){

        return this.movies[Math.floor((Math.random() * this.movies.length) + 1)];
         
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shadow{
    height: 5.6rem;
    background-image: linear-gradient(180deg,transparent, rgba(0, 0, 0, 0.61),#111);
  }
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
    font-weight: 600;
    margin-top: 20px;
    height: 2.8vw;
    width: 8vw;
    margin-right: 20px;
  }

   .hero-btn:hover{
     cursor: pointer;
       background-color: #fff;
        color: #111;
   }

  .movie-overview{
    margin-top: 10px;
    width: 39vw;
  }
</style>
