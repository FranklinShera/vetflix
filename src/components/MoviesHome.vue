<template>
  <div id="movie-home">
    <Hero :movies="[...collection]" />
    <Row title="Netflix Originals" isLarge :movies="{ ...netflixOriginals }" />
    <Row title="Airing Today" :isLarge="false" :movies="{ ...airingToday }" />
    <Row title="TV Shows On Air" :isLarge="false" :movies="{ ...tvOnAir }" />
    <Row title="Trending Movies" :isLarge="false" :movies="{ ...trending }" />
    <Row title="Top Rated Movies" :isLarge="false" :movies="{ ...topRated }" />
    <Row title="Horror Movies" :isLarge="false" :movies="{ ...horrorMovies }" />
    <Row title="Action Movies" :isLarge="false" :movies="{ ...actionMovies }" />
    <Row title="Comedy Movies" :isLarge="false" :movies="{ ...comedyMovies }" />
    <Row title="Discover Movies" :isLarge="false" :movies="{ ...dicoverMovie }" />
    <Row title="Discover TV Shows" :isLarge="false" :movies="{ ...discoverTv }" />

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Row from './Row.vue';
import Hero from './Hero.vue';
import requests from '../requests';


const netflixOriginals = ref([]);
const horrorMovies = ref([]);
const comedyMovies = ref([]);
const topRated = ref([]);
const actionMovies = ref([]);
const trending = ref([]);
const collection = ref([]);
const tvOnAir = ref([]);
const airingToday = ref([]);
const dicoverMovie = ref([]);
const discoverTv = ref([]);

const putMovies = () => {
  collection.value = [
    ...tvOnAir.value,
    ...airingToday.value,
    ...dicoverMovie.value,
    ...discoverTv.value,
    ...netflixOriginals.value,
    ...horrorMovies.value,
    ...comedyMovies.value,
    ...topRated.value,
    ...actionMovies.value,
    ...trending.value,
  ];
};

onMounted(() => {
  axios.get(requests.discoverTv)
    .then((res) => {
      discoverTv.value = res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });

  axios.get(requests.dicoverMovie)
    .then((res) => {
      dicoverMovie.value = res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });

  axios.get(requests.airingToday)
    .then((res) => {
      airingToday.value = res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });

  axios.get(requests.tvOnAir)
    .then((res) => {
      tvOnAir.value = res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });

  axios.get(requests.netflixOriginals)
    .then((res) => {
      netflixOriginals.value = res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });

  axios.get(requests.topRated)
    .then((res) => {
      topRated.value = res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });

  axios.get(requests.trending)
    .then((res) => {
      trending.value = res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });

  axios.get(requests.actionMovies)
    .then((res) => {
      actionMovies.value = res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });

  axios.get(requests.comedyMovies)
    .then((res) => {
      comedyMovies.value = res.data.results;
    })
    .catch((err) => {
      console.log(err);
    });

  axios.get(requests.horrorMovies)
    .then((res) => {
      horrorMovies.value = res.data.results;
    })
    .then(() => {
      putMovies();
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style scoped>
#movie-home {}
</style>
