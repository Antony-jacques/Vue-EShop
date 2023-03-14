<template>
  <div>
    Total d'items dans le cart :
    <span class="cart-icon">
      {{ cart.length }}
<!--      <img alt="Vue logo" src="../../../assets/shopping-cart.png">-->
      <div>{{ showDetails }}</div>
      <button @click="toggleVisibility">test</button>
    </span>
    <ShoppingCartDetails v-if="showDetails"/>
  </div>


</template>
<script>
import {mapGetters} from "vuex";
import ShoppingCartDetails from '@/modules/shop/components/ShoppingCartDetails.vue'

export default {
  name: "ShoppingCart",
  data() {
    return {
      showDetails: false,
    }
  },
  components: {ShoppingCartDetails},
  computed: {
    ...mapGetters({
      cart: 'getCart'
    }),
  },
  methods: {
    toggleVisibility: function() {
      this.showDetails = !this.showDetails
    }
  }
}
</script>
<style>
.cart-icon img {
  height: 30px;
}
  .cart-icon {
    height: 30px;
    width: 30px;
    background: url("../../../assets/shopping-cart.png");

  }


</style>
