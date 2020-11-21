import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginHelper: { require: false, next: "/" },
        userJwt: localStorage.getItem("_userJwt"),
        user: undefined,

        cart: !localStorage.getItem("_cart") ? [] : JSON.parse(localStorage.getItem("_cart"))
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
        },

        addToCart(state, payload) {
            const idx = state.cart.findIndex((item) => item.product.id === payload.product.id);
            if (idx < 0) {
                state.cart.push({ product: payload.product, quantity: payload.quantity });
                localStorage.setItem("_cart", JSON.stringify(state.cart))
            }
            else {
                state.cart[idx].quantity += payload.quantity;
            }
        },
        removeToCart(state, index) {
            state.cart.splice(index, 1);
            localStorage.setItem("_cart", JSON.stringify(state.cart))
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.userJwt && state.userJwt !== "",
    }
})