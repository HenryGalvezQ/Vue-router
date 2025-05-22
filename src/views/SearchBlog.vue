<script setup>
    import { useRoute } from 'vue-router';
    import { onMounted, computed } from 'vue';

    import { listaBlogs } from '../services/blogServices';
    const route = useRoute();
    
    const listResults = computed(() => {
        return listaBlogs.filter((blog) =>  blog.title.includes(route.query.kword));
        });

    onMounted(() => {
        console.log('Query params -->', route.query.kword);
    });
</script>

<template>
    <div>
        <h3>Blogs encontrados</h3>
        <p v-for="blog in listResults">
            {{ blog.title }}
        </p>
    </div>
</template>



<style lang="scss" scoped>

</style>