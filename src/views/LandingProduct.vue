<template>
  <div class="px-4 mb-3 product-card">
    <div class="card-deck justify-content-center" v-if="products.length">
      <ProductItem v-for="product of products" :item="product" :key="product" />
    </div>
    <div class="card-deck" v-else>
      <ProductSkeleton v-for="item in 10" :key="item" />
    </div>

    <div v-if="products.length < totalCount" class="my-4">
      <button @click="nextPage" class="btn btn-info shadow">Load More</button>
    </div>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem";
import ProductSkeleton from "../components/ProductSkeleton";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    ProductItem,
    ProductSkeleton,
  },

  created() {
    this.products.length === 0 &&
      this.getProducts({ perPage: this.perPage, page: this.page });
  },
  data() {
    return {
      page: 1,
      perPage: 10,
    };
  },
  methods: {
    ...mapActions(["getProducts"]),
    nextPage() {
      this.getProducts({ perPage: this.perPage, page: this.page++ });
      this.page++;
    },
  },
  computed: mapState(["products","totalCount"]),
};
</script>

<style scoped>
.product-card {
  margin-top: 70px;
}
</style>
