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
    mutations: {
        addItem(state, item) {
            item.id = state.items.length + 1;
            state.items.push(item);
            state.toDisplayItems.push(item);
        },
        update(state, id) {
            let item = state.items.filter(item => item.id == id);
            item.isCompleted = !item.isCompleted;
        },
        updateDisplayItems(state, flag) {
            if (flag == "All") {
                state.toDisplayItems = state.items;
            } else if (flag == "Actived") {
                state.toDisplayItems = state.items.filter(item => !item.isCompleted);
            } else {
                state.toDisplayItems = state.items.filter(item => item.isCompleted);
            }
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')