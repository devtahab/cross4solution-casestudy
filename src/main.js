import './assets/base.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import App from './App.vue'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import Menu from '@/components/Menu.vue'
import MenuCategory from './components/MenuCategory.vue'
import Meal from './components/Meal.vue'
import Search from './components/Search.vue'
import Favorites from './components/Favorites.vue'

let router = createRouter({
    history: createWebHistory(import.meta.url.BASE_URL),
    routes: [
        { path: '/', component: MenuCategory },
        { path: '/menu/:category', component: Menu },
        { path: '/meal/:id', component: Meal },
        { path: '/search', component: Search },
        { path: '/favorites', component: Favorites }
    ]
})

let app = createApp(App)

app.use(router)
app.use(store)

app.component('app-navbar', Navbar)
app.component('app-footer', Footer)

app.mount('#app')