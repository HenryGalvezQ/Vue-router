<script setup>
  import {ref} from 'vue';

  import { RouterView } from 'vue-router';
  import HeaderMain from './components/HeaderMain.vue'

  import HomeView from './views/HomeView.vue'
  import AboutView from './views/AboutView.vue'
  import BlogView from './views/BlogView.vue'

  const pageActive = ref(HomeView)

</script>

<template>
  <div>
    <HeaderMain/>
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
