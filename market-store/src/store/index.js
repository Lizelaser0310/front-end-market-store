import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginHelper: { require: false, next: "/" },
        userJwt: localStorage.getItem("_userJwt"),
        user: undefined
    },
    mutations: {
        login(state, userJwt) {
            localStorage.setItem("_userJwt", userJwt);
            state.userJwt = userJwt;
            state.loginHelper = { require: false, next: state.loginHelper.next };
        },
        logout(state) {
            localStorage.removeItem("_userJwt");
            state.userJwt = undefined;
            state.loginHelper = { require: false, next: state.loginHelper.next };
        },
        loginHelper(state, helper) {
            state.loginHelper = helper;
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.userJwt && state.userJwt !== "",
    }
})