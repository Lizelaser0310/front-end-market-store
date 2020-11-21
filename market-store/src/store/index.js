import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginHelper: { require: false, next: "/" },
        userJwt: localStorage.getItem("_userJwt"),
        user: undefined,

        cart: !localStorage.getItem("_cart") ? [] : JSON.parse(localStorage.getItem("_cart")),
        favorites: !localStorage.getItem("_favorites") ? [] : JSON.parse(localStorage.getItem("_favorites")),

        snackbarCount: 0,
        snackbarMessage: "Ocurrió un error en la operación"
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
            state.snackbarCount++;
            state.snackbarMessage = "¡Producto agregado correctamente al carrito!";
        },
        removeToCart(state, index) {
            state.cart.splice(index, 1);
            localStorage.setItem("_cart", JSON.stringify(state.cart))
            state.snackbarCount--;
            state.snackbarMessage = "Producto eliminado del carrito correctamente";
        },

        showSnackbar(state, message) {
            state.snackbarCount++;
            state.snackbarMessage = message;
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.userJwt && state.userJwt !== "",
    }
})