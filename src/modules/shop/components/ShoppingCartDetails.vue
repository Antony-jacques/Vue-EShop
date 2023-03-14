<template>
  <ul class="cart-item-container">
    <li class="cart-item" v-for="item in cart" :key="item.id">
      <div>{{item.name}}</div>
      <div>{{item.qtyCart}}</div>
      <div></div>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'ShoppingCartDetails',
  data(){
    return {

    }
  },
  computed: {
    ...mapGetters({
      stateCart: 'getCart'
    }),
    cart(){
      return this.st
    },
  },
  watch: {
    cart(a,b){
      console.log('update cart',a,b)
    }
  },
}
</script>
<style>

  .cart-item-container {
    display: flex;
    flex-direction: column;
  }
  .cart-item {

    list-style-type: none;
    padding: 1rem;
    border: solid 1px  ;
  }
</style>
