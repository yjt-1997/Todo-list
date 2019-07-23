export const mutations = {
    reloadItems: (state, newItems) => {
        state.items = newItems;
        state.toDisplayItems = newItems;
    },
    addItem: (state, item) => {
        item.id = state.items.length + 1;
        state.items.push(item);
        state.toDisplayItems.push(item);
    },
    update: (state, id) => {
        let item = state.items.filter(item => item.id == id);
        item.isCompleted = !item.isCompleted;
    },
    updateDisplayItems: (state, flag) => {
        if (flag == "All") {
            state.toDisplayItems = state.items;
        } else if (flag == "Actived") {
            state.toDisplayItems = state.items.filter(item => !item.isCompleted);
        } else {
            state.toDisplayItems = state.items.filter(item => item.isCompleted);
        }
    }
}