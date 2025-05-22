<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

    const logout = () => {
        localStorage.setItem('isAuth',false);
        router.replace({
            name: 'login'
        });
        
    };
</script>

<template>
    <div>
        <h3>Bienvenido al perfil</h3>
        <button @click="logout()">Cerrar sesion</button>
    </div>
</template>



<style lang="scss" scoped>

</style>