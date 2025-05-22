import { createRouter, createWebHistory } from "vue-router";

import { homeRoutes } from "./home";
import { usersRoutes } from "./users";
const routes = [
    ...homeRoutes,
    ...usersRoutes
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from) => {
    console.log('Ruta protegida')
    let auth = localStorage.getItem('isAuth') === 'true'
    if (to.meta.secure && !auth) {
        return {
            path: '/login',
        }
    }

})
export default router