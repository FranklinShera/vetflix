<template>

  <div id="hero" v-if="!!movie" :style="{ backgroundImage: `url( ${movie.big_image} )`, backgroundColor: '#111' }">
    <div :class="{ 'modal-active': modal }" class="modal-bg" @click="download()">
      <div class="modal">
        <p class="logo-text">Click The Logo</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
          alt="">
      </div>
    </div>
    <div class="hero-info">
      <h2 class="hero-title">{{ movie.title }}</h2>
      <div class="hero-btns">
        <button class="hero-btn" @click="playTrailer(movie)">Play</button>
        <button class="hero-btn" @click="vfx()">My List</button>
      </div>

      <p class="movie-overview">
        {{ movie.description.slice(0, 300) }}
        <span v-if="movie.description.length > 300">...</span>
      </p>
    </div>

    <div class="shadow"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import type { Movies } from '../data/movies';

const props = defineProps<{ movies: Movies[] }>()

const router = useRouter();
const modal = ref(false);
const posters = ref<{ url: string, filename: string }[]>([]);

const playTrailer = (movie: Movies) => {

  let movieName = `${movie.title} ${movie.id}`.toLowerCase().replace(/ /g, "-");
  let movieID = movie.id;
  router.push({ name: 'movie', params: { title: movieName, movieID } });
};

const vfx = () => {
  modal.value = true;
  posters.value = props.movies.map((movie) => {



    return {
      url: movie.image,
      filename: movie.title.replace(/ /g, "-")
    }
  });

};

const download = () => {
  modal.value = false;
  posters.value.forEach(poster => {
    let url = poster.url;
    let fileName = `${poster.filename}.jpg`;

    // axios.get(url, {
    //   responseType: 'blob',
    // }).then(res => {
    //   fileDownload(res.data, fileName);
    // });
  });
};

const movie = computed(() => {
  return props.movies[Math.floor(Math.random() * props.movies.length)];
});



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
}

.modal-active {
  opacity: 1;
  visibility: visible;
}

.modal {
  background-color: #111;
  height: 8vw;
  width: 13vw;
  border: 2px solid #E50914;
  border-radius: 7px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}



.shadow {
  height: 60%;
  background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.61), #111);
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;
}

#hero {
  height: 80vh;
  /* object-fit: contain; */
  margin-bottom: 15px;
  /* background-repeat: no-repeat; */
  background-size: contain;

  position: relative;
  isolation: isolate;

}

.hero-info {
  color: white;
  padding-inline: var(--spacing-x, 0);
  padding-bottom: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hero-title {
  font-size: 3vw;
  font-weight: 800;
}

.hero-btn {
  background-color: #111;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 1.5vw;
  font-weight: 600;
  margin-top: 20px;
  height: 2.8vw;
  width: 8vw;
  margin-right: 20px;
}

.hero-btn:hover {
  cursor: pointer;
  background-color: #fff;
  color: #111;
}

.movie-overview {
  margin-top: 10px;
  width: 39vw;
}

.logo-text {
  color: white;
  font-size: 1.3rem
}



@media (max-width: 720px) {
  .logo-text {
    color: white;
    font-size: 1rem
  }

  .modal {
    background-color: #111;
    height: 30vw;
    width: 35vw;
    border: 2px solid #E50914;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .hero-title {
    font-size: 8vw;
    font-weight: 800;
  }

  .hero-info {
    margin: 0 20px;
  }

  .hero-btns {
    display: flex;
    justify-content: space-between;
  }

  .hero-btn {
    border-radius: 5px;
    border: none;
    padding: 5px;
    font-size: 4.5vw;
    font-weight: 600;
    margin-top: 20px;
    height: 8vw;
    width: 32vw;
  }

  .movie-overview {
    margin-top: 10px;
    width: 72vw;
  }
}
</style>
