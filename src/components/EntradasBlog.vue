<script setup>
import { RouterLink } from 'vue-router';
import { listaBlogs } from '../services/blogServices';

</script>

<template>
    <div>
        <h3>Lista blogs</h3>
        <div 
        v-for="blog in listaBlogs" class="blog-item">
            <RouterLink :to="{name: 'blog-detail', params: {id:blog.id}}" 
            class="item-link">{{blog.title}}</RouterLink>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.blog-item {
    display: block;
    padding: 10px;
    border: 1px solid;
    margin-bottom: 1em;
}
.item-link{
    color: rgb(133, 66, 250);
    display: block;
    text-align: left;
}
</style>