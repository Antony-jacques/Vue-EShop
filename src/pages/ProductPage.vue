<template>
  <div class="main-content">
    <div class="product-media">
      <img :src=singleProduct.image alt="">
    </div>
    <div class="product-infos">
      <div>{{ singleProduct.title }}</div>
      <div>{{ singleProduct.category }}</div>
      <div>{{ singleProduct.description }}</div>
      <div>{{ singleProduct.rating.rate }} /5 ({{ singleProduct.rating.count }} rates)</div>
      <div>{{ singleProduct.price }}€</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return {
        singleProduct: {}
      }
    },
    computed: {
      getId(){
        return this.$route.params.id
      }
    },
    async created(){
      try {
        const fetchedProduct = await axios.get(`https://fakestoreapi.com/products/${this.getId}`)
        this.singleProduct = fetchedProduct.data

        console.log('this.singleProduct', this.singleProduct)
      } catch(error){
        console.log(error)
      }
    },

  }
</script>

<style scoped>
  .main-content {
    margin: 100px auto;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
  }

  .product-media {
    max-width: 500px;
  }

  .product-infos {
    width: 39.5%;
  }
 .product-media img {
   max-height: 541px;
   border: 1px solid #e2dfdc;
  }
</style>
