import VueRouter from 'vue-router'
import Main from './views/Main'
import Home from './views/Home'
import Mine from './views/Mine'
import TodoList from './components/TodoList'
import Vue from "vue";

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Main },
    {
        path: '/home',
        component: Home,
        children: [
            { path: '/', redirect: '/TodoList' },
            { path: '/TodoList', component: TodoList },
            { path: '/Mine', component: Mine }
        ]
    },

];
export default new VueRouter({
    routes,
});