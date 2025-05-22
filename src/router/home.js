import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";
import EntradaBlogView from "../views/EntradaBlogView.vue";
import SearchBlog from "../views/SearchBlog.vue";
import NotFoundView from "../views/NotFoundView.vue";


export const homeRoutes = [
    { path:'/:pathMatch(.*)*', component: NotFoundView, name: 'not-found' },
    { path: '/', component: HomeView, name: 'home' },
    { path: '/about', component: AboutView, name: 'about' },
    { path: '/blog', component: BlogView, name: 'blog' },
    { path: '/entra/:id(\\d+)', component: EntradaBlogView, name: 'blog-entrada' },
    { path: '/search-blog', component: SearchBlog, name: 'search-blog'},
    { path:
        '/blog',
        component: BlogView,
        name: 'blog',
        children: [
            {path: 'detail/:id', component: EntradaBlogView, name: 'blog-detail'},
        ]
    },

]