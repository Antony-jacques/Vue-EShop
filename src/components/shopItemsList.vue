<template>
  <div>
    <h2>list</h2>
    <div class="product-items">
      <div></div>
      <productItem v-for="product in products" :key="product.id" :product="product"/>
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import productItem from '@/modules/shop/components/productItem.vue'
  export default {
    data(){
      return {

      }
    },
    components: { productItem },
    computed: {
      ...mapGetters({
        products: 'getFilteredProducts',
      })
    },
    created(){
      console.log('products before fetch', this.products)
      if(this.products.length === 0){
        this.$store.dispatch('loadProducts')
      }
      console.log('products after fetch', this.products)

    }
  }
</script>

<style>
  .product-img img{
    width: 250px;
  }

  .product-items{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .product-infos{
    font-size: 14px;
    line-height: 18px;
  }

  .product-card{
    width: 250px;
    padding: 1rem;
  }
</style>

