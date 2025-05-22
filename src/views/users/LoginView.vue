<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);

    const login = () => {
        localStorage.setItem('isAuth', true);
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            router.push({
                name: 'user-perfil'
            });
        }, 1000);
    };
</script>

<template>
    <div>
        <h1>Ingresar al sistema</h1>
        <button @click = "login()">Acceder</button>
        <p v-if="loading">...accediendo</p>
    </div>
</template>



<style lang="scss" scoped>

</style>