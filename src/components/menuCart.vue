<template>
  <div class="cart-container">
    <div @click="toggleCartModal()" class="cart-icon">
<!--      <img :src="cartImage" alt="">-->
      <div>{{getCartProductNumber}}</div>

    </div>
    <div class="cart-modal" v-if="isModalVisible">
      <cartDetails limit=3 />
    </div>
  </div>
</template>
<script>
import cartImage from '@/assets/cart-38.svg'
import cartDetails from "@/modules/shop/components/cartDetails.vue";
import {mapGetters} from "vuex";

  export default {
    data(){
      return {
        cartImage: cartImage,
        isModalVisible: false,
        cartQty: 0
      }
    },
    components: { cartDetails },
    computed: {
      ...mapGetters({
        getCartProductNumber: 'getCartProductNumber'
      })
    },
    methods: {
      toggleCartModal: function(){
        this.isModalVisible = ! this.isModalVisible
      }
    }
  }
</script>
<style scoped>
 .right-menu img {
   height: 20px;
 }

 .cart-container{
   position: relative;
 }

 .cart-modal {
   position: absolute;
   top: 100%;
   width: 300px;
   border: solid 1px #eee;
   padding: 1rem;
   background: white;
 }

 .cart-icon {
   padding: 0 1rem;
 }

 .cart-icon:hover{
   cursor: pointer;
 }
 .cart-icon {
   height: 2em;
   width: 2em;
   background: url("~@/assets/cart-38.svg");
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   display: flex;
 }

 .cart-icon div {
   background: none;
   color: red;
   margin: auto;
   margin-bottom: 2px;
 }
</style>
