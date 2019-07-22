import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        items: [],
        toDisplayItems: [],
    },
    getters: {
        getDisplayItems: state => state.toDisplayItems,
        getAllItems: state => {
            state.toDisplayItems = state.items;
            state.toDisplayItems.splice(0, 0);
        },
        getActiveItems: state => {
            state.toDisplayItems = state.items.filter(item => !item.isCompleted);
            state.toDisplayItems.splice(0, 0);
        },
        getCompletedItems: state => {
            state.toDisplayItems = state.items.filter(item => item.isCompleted);
            state.toDisplayItems.splice(0, 0);
        }

    },
    mutations: {
        addItem(state, item) {
            item.id = state.items.length + 1;
            state.items.push(item);
            state.toDisplayItems.push(item);
        },
        update(state, id) {
            let item = state.items.filter(item => item.id == id);
            item.isCompleted = !item.isCompleted;
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')