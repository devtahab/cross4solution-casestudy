import { createStore } from "vuex";

let store = createStore({
    state: {
        favorites: []
    },
    mutations: {
        addFavorite(state, meal){
            state.favorites.push(meal)
        },
        removeFavorite(state, mealId){
            state.favorites = state.favorites.filter(fav => fav.id !== mealId)
        }
    },
    actions: {
        toggleFavorite({commit, state}, meal){
            let isExists = state.favorites.find(fav => fav.id === meal.id)
            if(isExists){
                commit('removeFavorite', meal.id)
            }
            else{
                commit('addFavorite', meal)
            }
        }
    },
    getters: {
        isFavorite: (state) => (mealId) => {
            return state.favorites.some(meal => meal.id === mealId)
        },
        favorites: state => state.favorites
    }
})

export default store;