<template>
  <div class="card product-card shadow my-2">
    <img class="card-img-top" :alt="item.title" :src="item.image" />
    <div class="card-body">
      <h3 class="card-title product-card-title">{{ item.title }}</h3>
      <hr />
      <p class="card-text">{{ item.description }}</p>
    </div>
    <div class="card-footer">
      <span class="mr-2">${{ item.price }}</span>
      <button :disabled="item.isAdded" class="btn btn-outline-primary" @click="ADD_CART(item)">{{item.isAdded?"Added":"Add to Cart"}}</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods:{
      ...mapMutations(["ADD_CART"])
  }
};
</script>

<style scoped>
.product-card {
  min-width: 220px;
  max-width:280px;
}
.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.product-card-title {
  font-size: 18px;
  font-weight: bold;
}
</style>
