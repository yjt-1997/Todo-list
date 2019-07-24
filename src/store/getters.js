export const getters = {
    getItems: (state) => {
        if (state.status == "All") {
            return state.items;
        } else if (state.status == "Actived") {
            return state.items.filter(item => !item.isCompleted);
        } else {
            return state.items.filter(item => item.isCompleted);
        }
    }
}