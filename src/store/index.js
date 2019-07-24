import Vue from 'vue'
import Vuex from 'vuex'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { items } from './items/index'
import { user } from './user/index'

Vue.use(Vuex)
Vue.use(Antd)

export const store = new Vuex.Store({
    modules: {
        items,
        user
    }
})