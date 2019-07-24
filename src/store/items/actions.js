import axios from 'axios'
import mutationsType from './mutationsType'
import { API } from "../../providers/api"

const baseUrl = 'http://5d36b54b86300e0014b6452c.mockapi.io/api/v1/lists';
export const actions = {
    getList({ commit }) {
        API.getAllItem().then(response => commit(mutationsType.RE_LOAD_ITEMS, response.data));
    },
    addItem(context, data) {
        API.addItem(data).then(() => this.dispatch('getList'));
    },
    updateItem(context, data) {
        API.updateItem(data).then(() => this.dispatch('getList'));
    },
    deleteItem(context, data) {
        API.deleteItem(data).then(() => this.dispatch('getList'));
    },
}