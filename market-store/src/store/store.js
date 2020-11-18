import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userJwt: null
    },
    mutations: {
        login(state, userJwt) {
            state.userJwt = userJwt
            localStorage.setItem("userJwt", userJwt);
        }
    }
})