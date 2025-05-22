<script setup>
  import { RouterLink, useRouter} from 'vue-router';
  import { ref } from 'vue';

  const router = useRouter();

  const kword = ref('');

  const buscarBlog = () => {
    router.push({
      name: 'search-blog',
      query: {
        kword:kword.value
      }
    });  
  };
</script>

<template>
  <div>
    <div class="menu">
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink :to= "{name: 'about'}"> About </RouterLink>
      <RouterLink :to = "{name: 'blog'}"> Blog </RouterLink>
      <RouterLink :to = "{name: 'login'}"> Acceder </RouterLink>

      <div>
        <input type="text" placeholder="Buscar.." v-model="kword"/>
        <button @click="buscarBlog">Buscar</button>
      </div>
    </div>
</div>
</template>



<style lang="scss" scoped>
.menu {
  display: flex;
  gap: 1em;
}
</style>