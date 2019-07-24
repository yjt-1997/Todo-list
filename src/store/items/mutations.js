import mutationsType from './mutationsType'

export const mutations = {
    [mutationsType.RE_LOAD_ITEMS]: (state, newItems) => {
        state.items = newItems;
    },
    [mutationsType.UPDATE_STATUS]: (state, newStatus) => {
        state.status = newStatus;
    }
}
