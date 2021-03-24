<template>
  <div class="card-deck px-4 mb-3 product-card">
    <ProductItem
      v-for="product of products"
      :item="product"
      :key="product"
    ></ProductItem>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem";
import { mapActions, mapState } from "vuex";

export default {
  created() {
    this.getProducts({ perpage: 10, page: 1 });
  },

  components: {
    ProductItem,
  },
  methods: {
    ...mapActions(["getProducts"])
  },
  computed: mapState(["products"]),
};
</script>

<style scoped>
.product-card {
  margin-top: 70px;
}
</style>
