<script setup>
import { useRoute } from 'vue-router';
    import { ref, onMounted, watch } from 'vue';
    import {getBlogItem} from '../services/blogServices';

    const blogRetrived = ref(getBlogItem(1));

    const route = useRoute();
    
    watch(() => route.params.id, (newId,oldId) => {
        blogRetrived.value = getBlogItem(route.params.id);
    });
    onMounted(() => {
        const id = route.params.id;
        blogRetrived.value = getBlogItem(route.params.id);
    });

</script>

<template>
    <div>
        <h1>Entrada del blog</h1>
        <div>
            <p>id: {{ $route.params.id}}</p>
            <h3>title: {{ blogRetrived.title }}</h3>
            <p>contenido: {{ blogRetrived.content }}</p>
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>