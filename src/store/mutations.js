export const mutations = {
    reloadItems: (state, newItems) => {
        state.items = newItems;
    },
    updateStatus: (state, status) => {
        state.status = status;
    },
    addUserName: (state, name) => {
        state.name = name;
    }
}