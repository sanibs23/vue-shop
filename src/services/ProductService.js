import axios from "axios";
axios.defaults.withCredentials = true

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
});

export default {
  getProducts(perPage = 20, page = 1) {
    return apiClient.get("/products?_limit=" + perPage + "&_page=" + page);
  },
  //   getEvent(id) {
  //     return apiClient.get('/events/' + id)
  //   }
};
