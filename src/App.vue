<script setup>
  import {ref} from 'vue';

  import { RouterView, RouterLink } from 'vue-router';

  import HomeView from './views/HomeView.vue'
  import AboutView from './views/AboutView.vue'
  import BlogView from './views/BlogView.vue'

  const pageActive = ref(HomeView)

</script>

<template>
  <div>
    <div class="menu">
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink :to= "{name: 'about'}"> About </RouterLink>
      <RouterLink :to = "{name: 'blog'}"> Blog </RouterLink>
      
    </div>
    <div class="content">
      <RouterView/>
    </div>
</div>
</template>

<style scoped>
.content {
  width: 600px;
  padding: 1em;
}
.body {
  padding: 3rem;
  background-color: #b8eeff;
}
.menu {
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1em;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
