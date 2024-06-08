<template>
  <div id="movie-home">

    <Hero :movies="collection" />

    <div class="movie-rows">

      <Row title="Latest Movies" isLarge :movies="latest" />
      <Row v-for="cat in catalog" :key="cat.title" :title="cat.title + ' Movies'" :isLarge="false"
        :movies="cat.items" />
    </div>


  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Row from './Row.vue';
import Hero from './Hero.vue';
import mov, { Movies } from "../data/movies"

const catalog = ref<{ title: string; items: Movies[] }[]>([])

const latest = ref<Movies[]>([]);
const collection = ref<Movies[]>([]);

onMounted(() => {
  collection.value = mov.moviesAndSeries.sort((a, b) => b.rating - a.rating)

  catalog.value = mov.genres.map((genre) => {
    return {
      title: genre,
      items: mov.moviesAndSeries
        .filter((movie) => movie.genre.includes(genre))
        .sort((a, b) => b.rating - a.rating),
    };
  });


  latest.value = mov.moviesAndSeries.sort((a, b) => b.year.start - a.year.start)

});
</script>

<style scoped>
#movie-home {}


.movie-rows {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing-y) / 2);
  width: 100%;
}
</style>
