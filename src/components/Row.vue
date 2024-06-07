<template>
  <div :class="{ 'large-row': props isLarge, 'small-row': !props.isLarge }">
    <h2 id="title">{{ props.title }}</h2>
    <div id="poster_row">
      <div id="poster" @click="viewMovie(movie)" v-for="movie in props.movies" :key=movie.id>
        <img :src="returnImage(movie.poster_path, movie.backdrop_path)"
          :class="{ 'large-poster': isLarge, 'small-poster': !isLarge }" alt="movie.title">

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  title: string,
  movies: object,
  isLarge: boolean
}>();



const image_path = 'https://image.tmdb.org/t/p/original/';
const router = useRouter();

function returnImage(poster, backdrop) {
  return props.isLarge ? image_path + poster : image_path + backdrop;
};

function viewMovie(movie) {
  let movietitle = movie.title ? movie.title : movie.name;
  let movieName = `${movietitle} ${movie.id}`.toLowerCase().replace(/ /g, "-");
  let movieID = movie.id;
  router.push({ name: 'movie', params: { title: movieName, movieID } });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#poster_row {
  display: flex;
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 100px;

  /* overflow-y: hidden;
  overflow-x: scroll; 
  scrollbar-width: none;*/
}

@-moz-document url-prefix() {

  /* Disable scrollbar Firefox */
  html {
    scrollbar-width: none;
  }
}

body {
  margin: 0;
  /* remove default margin */
  scrollbar-width: none;
  /* Also needed to disable scrollbar Firefox */
  -ms-overflow-style: none;
  /* Disable scrollbar IE 10+ */
  overflow-y: scroll;
  overflow-x: scroll;
}

body::-webkit-scrollbar {
  width: 0px;
  background: transparent;
  /* Disable scrollbar Chrome/Safari/Webkit */
}

.large-poster {
  height: 240px;
  margin-right: 5px;
}

.small-poster {
  height: 130px;
  margin-right: 5px;
}

.large-row {
  height: 300px;

}

.small-row {
  height: 210px;
}

.large-poster:hover {
  transform: scale(1.09);

  transition: transform 450ms;
}

.small-poster:hover {
  transform: scale(1.05);

  transition: transform 450ms;
}

#title {
  color: white !important;
  margin-bottom: 15px;
  margin-left: 15px;

}



#poster {
  padding-left: 5px;
  object-fit: contain;
  transition: transform 450ms;
}




@media (max-width: 720px) {

  #poster {
    object-fit: contain;
    transition: transform 450ms;
  }

  #title {
    font-size: 4vw;
  }

  #poster_row {
    display: flex;
    margin-top: 10px;
    margin-bottom: 40px;

    overflow-y: hidden;
    overflow-x: scroll;
  }

  #poster {
    object-fit: contain;
    transition: transform 450ms;
  }


  .large-poster {
    height: 170px;
    margin-right: 2px;
  }

  .small-poster {
    height: 85px;
    margin-right: 2px;
  }

  .large-row {
    height: 200px;
    margin-bottom: 10px;
  }

  .small-row {
    height: 110px;
    margin-bottom: 20px;
  }

  .large-poster:hover {
    transform: scale(1.09);

    transition: transform 450ms;
  }

  .small-poster:hover {
    transform: scale(1.05);

    transition: transform 450ms;
  }

}
</style>
