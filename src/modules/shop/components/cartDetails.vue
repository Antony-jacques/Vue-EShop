<template>
  <div>
    <div v-if="cartProducts.length" class="cart">
      <h3>Votre Panier</h3>
      <table>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <cartItem v-for="(cartProduct, index) in cartProducts" :key="index" :cartProduct="cartProduct"/>

      </table>
      <discountCode/>
      <div
          class="total"
          :class="{ 'striped-price': isDiscounted}"
      >Montant total: {{ getCartTotalAmount }}</div>
      <div v-if="isDiscounted" class="total">Montant après promo: {{ getCartDiscountedAmount }}</div>

    </div>
    <div v-else>
      Your cart is empty
    </div>
  </div>

</template>
<script>
import cartItem from '@/modules/shop/components/cartItem.vue'
import discountCode from '@/modules/shop/components/discountCode.vue'

import {mapGetters} from "vuex";

  export default {
    data(){
      return {
        // total: 0,
        showSeeMoreProductsBtn: false,
        discountedTotal: 0
      }
    },
    components: { cartItem, discountCode },
    props: {
      limit: Number
    },
    computed: {
      ...mapGetters({
        cartProducts: 'getCart',
        getCartTotalAmount: 'getCartTotalAmount',
        getCartDiscountedAmount: 'getCartDiscountedAmount'
      }),
      getTotal: function(){
        return this.cartProducts.reduce((a, {price, qtyCart}) => a + (price * qtyCart), 0)
      },
      isDiscounted: function(){
        return this.getCartDiscountedAmount !== null
      }
    }
  }
</script>

<style>
  .cart-modal .cart {
    height: 170px;
    overflow: auto;
  }
  .cart table{
    margin: 0 auto;
  }

  .cart .total {
    font-weight: bold;
  }

  .cart .striped-price {
    text-decoration: line-through;
    color: red;
  }
</style>
