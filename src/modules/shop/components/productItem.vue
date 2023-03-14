<template>
  <div class="product-card" >
    <div class="content">
      <router-link :to="`/eshop/single-product/${product.id}`" class="product-link">
      <div class="product-img">
        <img :src=product.image>
      </div>
      <div class="product-infos">
          <span>
            {{ product.title }}
          </span>
        <span>
            {{ product.price }} {{ getCurrency }}
          </span>
      </div>
      </router-link>
    </div>
    <div>
      <button class="tocart" @click="addProduct(product)" >Ajouter au panier</button>
    </div>
    <transition name="fade" >
      <div v-if="isAddedToCart" class="message success-message note">
        {{ product.title }} a été ajouté au panier
      </div>
    </transition>

  </div>
</template>
<script>
import {mapMutations, mapGetters} from "vuex";

export default {
  data(){
    return {
      isAddedToCart: false
    }
  },
  props: { product: Object },
  methods: {
    ...mapMutations({
      addToCart: 'addToCart'
    }),
    addProduct: function(product){
      this.addToCart(product)
      this.showSuccessMsg()
    },
    showSuccessMsg: function(){
      console.log("success")
      this.isAddedToCart = true
    }
  },
  computed: {
    ...mapGetters({
      getCurrency: 'getCurrency'
    })
  }
}
</script>

<style>
  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product-img img {
    //height: 200px;
  }

  .tocart{
    background-color:#42cc8c;
    display:inline-block;
    padding:0.46em 1.6em;
    border:0.1em solid #000000;
    margin:0 0.2em 0.2em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#000000;
    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);

    text-align:center;
    transition: all 0.15s;
  }
  .tocart:hover{
    text-shadow: 0 0 2em rgba(255,255,255,1);
    color:#FFFFFF;
    border-color:#FFFFFF;
  }

  .product-link {
    text-decoration: none;
  }

  .message.success-message.note {
    font-size: 18px;
  }

  /*transition*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
