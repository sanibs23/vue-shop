import { createStore } from "vuex";
import ProductService from "../services/ProductService";

export default createStore({
  state: {
    products: [],
    carts: [],
    totalCount: 0,
  },
  mutations: {
    SET_PRODUCTS(state, { items, totalCount }) {
      state.products = [...state.products, ...items];
      state.totalCount = totalCount;
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
    UPDATE_CART(state, { cartIndex, quantity }) {
      console.log(quantity);
      state.carts[cartIndex].quantity = quantity;
    },
    REMOVE_CART(state, cartId) {
      const filterdCart = state.carts.filter((itm) => itm.id !== cartId);
      state.carts = filterdCart;
    },
  },
  actions: {
    async getProducts({ commit }, { perPage, page }) {
      try {
        const response = await ProductService.getProducts(perPage, page);
        commit("SET_PRODUCTS", {
          items: response.data,
          totalCount: response.headers["x-total-count"],
        });
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
