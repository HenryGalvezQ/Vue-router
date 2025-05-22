<script setup>
import EntradasBlog from '../components/EntradasBlog.vue'
</script>

<template>
    <div>
        <h1 class="titlee">Hola estas en el blog</h1>
        <div class="panel-blog">
          <entradas-blog/>
          <div class="panel-blog-detail">
            <router-view/>

          </div>
        </div>
    </div>
</template>



<style lang="css" scoped>
.titlee {
    color: red;
    font-size: 18px;
}

.panel-blog {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.panel-blog-detail {
    border: 1px solid ;
    padding: 10px;
    min-width:200px;

}
</style>