import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";
import EntradaBlogView from "../views/EntradaBlogView.vue";


const routes = [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/about', component: AboutView, name: 'about' },
    { path: '/blog', component: BlogView, name: 'blog' },
    { path: '/entra/id', component: EntradaBlogView, name: 'blog-entrada' },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router