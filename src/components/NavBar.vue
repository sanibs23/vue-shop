<template>
  <div
    class="d-flex justify-content-between shadow _navbar px-5 align-items-center"
  >
    <div>
      <router-link to="/">
        <img
          src="https://www.graphicsprings.com/filestorage/stencils/337eff932d1fbaa3e32c6f327edf84a2.png?width=500&height=500"
          alt="logo"
          class="logo"
        />
        <span>Vue-Shop</span>
      </router-link>
    </div>
    <div class="pointer">
     <router-link :to="{name:'Cart-Details'}">
          <span>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </span>
      <span>{{ getCartsLength || null }}</span>
     </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getCartsLength"]),
};
</script>

<style scoped>
._navbar {
  width: 100%;
  height: 60px;
  background: rgb(248, 192, 192);
  position: fixed;
  z-index: 10;
}
.logo {
  width: 70px;
  height: 70px;
}
</style>
