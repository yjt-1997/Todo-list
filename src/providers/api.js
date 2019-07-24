import request from './http-service'

const baseUrl = 'http://5d36b54b86300e0014b6452c.mockapi.io/api/v1/lists';
export const API = {
    getAllItem() {
        return request.get(baseUrl);
    },
    addItem(param) {
        return request.post(baseUrl, param)
    },
    updateItem(param) {
        return request.put(`${baseUrl}/${param.id}`, param)
    },
    deleteItem(param) {
        return request.delete(`${baseUrl}/${param.id}`, param)
    }
};