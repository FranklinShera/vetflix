<template>
  <div class="row" :class="{ 'large-row': props.isLarge, 'small-row': !props.isLarge }">
    <h2 class="title">{{ props.title }}</h2>
    <div class="poster_row">
      <div class="poster" @click="viewMovie(movie)" v-for="movie in props.movies" :key=movie.id>
        <img :data-src="returnImage(movie.image, movie.big_image)"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
          :class="{ 'large-poster': isLarge, 'small-poster': !isLarge }" class="lazy-load" :alt="movie.title">

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Movies } from '../data/movies';


const props = defineProps<{
  title: string,
  movies: Movies[],
  isLarge: boolean
}>();

const router = useRouter();

function returnImage(poster: string, backdrop: string) {
  return props.isLarge ? poster : backdrop;
};

function viewMovie(movie: Movies) {

  router.push({ name: 'movie', params: { id: movie.imdbid } });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  translate: var(--spacing-x) 0px;

  max-width: 100%;
}



.poster_row {
  display: flex;
  padding-left: 25px;
  margin-top: 20px;
  /* margin-bottom: 200px; */

  /* overflow-y: hidden; */
  overflow-x: scroll;
  scrollbar-width: none;

  scroll-snap-type: x mandatory;
  scroll-padding: 10px;
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
  /* overflow-y: scroll; */
  /* overflow-x: hidden; */
}

body::-webkit-scrollbar {
  width: 0px;
  background: transparent;
  /* Disable scrollbar Chrome/Safari/Webkit */
}

.large-poster {
  height: 250px;
  margin-right: 5px;
}

.small-poster {
  height: 200px;
  margin-right: 5px;
}

.large-row {
  /* height: 300px; */

}

.small-row {
  /* height: 210px; */
}

.large-poster:hover {
  transform: scale(1.0);

  transition: transform 450ms;
}

.small-poster:hover {
  transform: scale(1.05);

  transition: transform 450ms;
}

.title {
  color: white !important;
  margin-bottom: 15px;
  margin-left: 15px;

}



.poster {
  padding-left: 5px;
  object-fit: contain;
  transition: transform 450ms;
  scroll-snap-align: start;
}




@media (max-width: 720px) {

  .poster {
    object-fit: contain;
    transition: transform 450ms;
  }

  .title {
    font-size: 4vw;
  }

  .poster_row {
    display: flex;
    margin-top: 10px;
    margin-bottom: 40px;

    overflow-y: hidden;
    overflow-x: scroll;
  }

  .poster {
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
