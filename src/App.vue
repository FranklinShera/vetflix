<template>

  <div class="main">
    <header :class="{ 'flix-bg': topBg }">
      <RouterLink to="/">
        <img id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
          alt="">

      </RouterLink>
      <span id="my-name">FS</span>
    </header>


    <RouterView @scroll="checkBg" />

    <footer> <img id="logo2"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
        alt="">
      Demo Created By &nbsp; <span id="footer-name"><span
          style="color: white;text-decoration: none;margin-left: 3px">&nbsp; FS</span> {{ new Date().getFullYear()
        }}</span></footer>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import LazyLoad from "vanilla-lazyload";



const topBg = ref(false);

function checkBg() {
  if (window.scrollY > 210) {
    topBg.value = true;
    // console.log(topBg.value);
  } else {
    topBg.value = false;
    // console.log(topBg.value);
  }
};

window.addEventListener("load", function (event) {
  window.scrollTo(0, 0);
});

onMounted(() => {
  window.addEventListener("DOMContentLoaded", () => {

    window.addEventListener('scroll', checkBg);

    const lazy = new LazyLoad({
      elements_selector: ".lazy-load",
    });
  })


});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkBg);
});
</script>


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


}

#logo2 {
  height: 12px;

}

.footer-name {
  font-weight: 900;
  font-size: 1rem;
}

#my-name {

  color: white;
  filter: drop-shadow(0 0 2px #111);
  font-weight: 700;
}


header {
  position: fixed;
  z-index: 50;
  top: 0;
  width: 100%;
  height: 70px;
  transition: ease-in;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: var(--spacing-x, 0);
}

.flix-bg {
  background: rgba(0, 0, 0, 0.7);
}





@media (max-width: 720px) {
  #logo {
    height: 25px;

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
