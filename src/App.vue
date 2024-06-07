<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import requests from './requests';


const topBg = ref(false);
const netflixOriginals = ref([]);
const topRated = ref([]);
const trending = ref([]);
const actionMovies = ref([]);
const comedyMovies = ref([]);
const horrorMovies = ref([]);

function checkBg() {
  if (window.scrollY > 210) {
    topBg.value = true;
    console.log(topBg.value);
  } else {
    topBg.value = false;
    console.log(topBg.value);
  }
};

window.addEventListener("load", function (event) {
  window.scrollTo(0, 0);
});

onMounted(() => {
  window.addEventListener('scroll', checkBg);

  // axios.get(requests.netflixOriginals)
  //   .then((res) => {
  //     // Dispatch to store as needed
  //     // store.dispatch('setNetflix', res.data);
  //     netflixOriginals.value = res.data.results;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  // axios.get(requests.topRated)
  //   .then((res) => {
  //     // Dispatch to store as needed
  //     // store.dispatch('setToprated', res.data);
  //     topRated.value = res.data.results;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  // axios.get(requests.trending)
  //   .then((res) => {
  //     // Dispatch to store as needed
  //     // store.dispatch('setTrending', res.data);
  //     trending.value = res.data.results;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  // axios.get(requests.actionMovies)
  //   .then((res) => {
  //     // Dispatch to store as needed
  //     // store.dispatch('setAction', res.data);
  //     actionMovies.value = res.data.results;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  // axios.get(requests.comedyMovies)
  //   .then((res) => {
  //     // Dispatch to store as needed
  //     // store.dispatch('setComedy', res.data);
  //     comedyMovies.value = res.data.results;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  // axios.get(requests.horrorMovies)
  //   .then((res) => {
  //     // Dispatch to store as needed
  //     // store.dispatch('setHorror', res.data);
  //     horrorMovies.value = res.data.results;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkBg);
});
</script>

<template>

  <div id="app">
    <header :class="{ 'flix-bg': topBg }">
      <img id="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
        alt="">
      <span id="my-name">FS</span>
    </header>

    <!-- <router-view @scroll="checkBg">
      </router-view> -->
    <RouterView />

    <footer> <img id="logo2"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
        alt="">
      Demo Created By &nbsp; <span id="footer-name"><a style="color: white;text-decoration: none;margin-left: 3px"
          href="mailto:me@sheraclassics.co.ke">&nbsp; FS</a> {{ new Date().getFullYear() }}</span></footer>
  </div>
</template>

<style>
footer {
  color: white;
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 20px;
}

* {
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

.app {
  background-color: #111;
}

#logo {
  height: 40px;
  margin-left: 30px;
  margin-top: 20px;
}

#logo2 {
  height: 12px;
  margin-top: 20px;
}

.footer-name {
  font-weight: 900;
  font-size: 1rem;
}

#my-name {
  margin-top: 20px;
  margin-right: 30px;
  color: white;
  filter: drop-shadow(0 0 2px #111);
}




header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  transition: ease-in;
  display: flex;
  justify-content: space-between;
}

.flix-bg {
  background: rgba(0, 0, 0, 0.7);
}

header>h1,
header>span {
  margin-left: 20px;
}



@media (max-width: 720px) {
  #logo {
    height: 25px;
    margin-left: 30px;
    margin-top: 12px;
  }

  #my-name {
    margin-top: 12px;
    margin-right: 30px;
    color: white;
    filter: drop-shadow(0 0 2px #111);
  }

  header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    transition: ease-in;
    display: flex;
    justify-content: space-between;
  }
}
</style>
