import VueRouter from 'vue-router'
import Main from './components/Main'
import Home from './components/Home'
import TodoList from './components/TodoList'
import Mine from './components/Mine'
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