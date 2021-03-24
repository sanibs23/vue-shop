import { createStore } from "vuex";
import ProductService from "../services/ProductService";

export default createStore({
  state: {
    products: [],
    carts: [],
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    ADD_CART(state, payload) {
      const updatedProduct = state.products.map((item) => {
        if (item.id === payload.id) {
          item.isAdded = true;
          item.quantity = 1;
        }
        return item;
      });
      state.products = updatedProduct;
      state.carts.push(payload);
    },
  },
  actions: {
    async getProducts({ commit }, { perPage, page }) {
      try {
        const response = await ProductService.getProducts(perPage, page);
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getCartsLength: (state) => {
      return state.carts.length;
    },
    getTotalCartPrice: (state) => {
      return state.carts.reduce((acc, current) => {
        return acc + current.price * current.quantity;
      }, 0);
    },
  },
});
