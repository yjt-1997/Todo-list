import mutationsType from './mutationsType'

export const mutations = {
    [mutationsType.ADD_USER_NAME]: (state, newName) => {
        state.name = newName;
    }
}