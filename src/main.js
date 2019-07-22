import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    getAllItems: state => state.items,
    getActiveItems: state => state.items.isCompleted = false,
    getCompletedItems: state => state.items.isCompleted = true,
  },
  mutations: {
    addItem(state, item) {
      item.id = state.items.length + 1;
      state.items.push(item);
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
