import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from "vue-router";
import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})