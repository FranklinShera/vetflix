<template>
  <div id="hero" :style="{ backgroundImage: `url(${image_path}${shown.backdrop_path} )` }">
    <div :class="{ 'modal-active': modal }" class="modal-bg" @click="download()">
      <div class="modal">
        <p class="logo-text">Click The Logo</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
          alt="">
      </div>
    </div>
    <div class="hero-info">
      <h2 class="hero-title">{{ shown.title }}</h2>
      <div class="hero-btns">
        <button class="hero-btn" @click="playTrailer(shown)">Play</button>
        <button class="hero-btn" @click="vfx()">My List</button>
      </div>

      <p class="movie-overview">
        {{ shown.overview.slice(0, 198) }}
        <span v-if="shown.overview.length > 198">...</span>
      </p>
    </div>

    <div class="shadow"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{ movies: unknown[] }>()

const router = useRouter();
const modal = ref(false);
const image_path = 'https://image.tmdb.org/t/p/original';
const posters = ref([]);

const playTrailer = (movie) => {
  let movietitle = movie.title ? movie.title : movie.name;
  let movieName = `${movietitle} ${movie.id}`.toLowerCase().replace(/ /g, "-");
  let movieID = movie.id;
  router.push({ name: 'movie', params: { title: movieName, movieID } });
};

const vfx = () => {
  modal.value = true;
  let img = [];

  props.movies.forEach((movie) => {
    let file_name = '';
    let loc = '';

    if (movie.name) {
      loc = `${image_path}${movie.poster_path}`;
      file_name = movie.name;
    } else if (movie.original_name) {
      loc = `${image_path}${movie.poster_path}`;
      file_name = movie.original_name;
    } else if (movie.title) {
      loc = `${image_path}${movie.poster_path}`;
      file_name = movie.title;
    }

    img.push({
      url: loc,
      filename: file_name.replace(/ /g, "-")
    });
  });

  posters.value = img;
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

const shown = computed(() => {
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
  height: 3.6rem;
  background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.61), #111);
}

#hero {
  height: 448px;
  object-fit: contain;
  margin-bottom: 15px;
  background-size: cover;
  background-position: center center;
}

.hero-info {
  color: white;
  margin-left: 30px;
  padding-top: 200px;
  height: 190px;

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
