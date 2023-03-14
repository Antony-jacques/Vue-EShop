<template>
  <div>
    <input v-model="searchQuery" id="search" type="text" name="search" placeholder="Search..." class="input-text" maxlength="128">
    <button @click="search">Send</button>
    {{ searchQuery }}
    <div class="search-result">
      <h3>search results:</h3>
      <div>
        <cartItem v-for="(searchResult, index) in searchResults" :key="index" :cartProduct="searchResult"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import cartItem from '@/modules/shop/components/cartItem.vue'

 export default {
   data(){
     return {
       searchQuery: '',
       searchResults: [],
     }
   },
   components: {
     cartItem,
   },
   computed: {
     ...mapGetters({
       allProducts: 'getProducts',
     })
   },
   methods: {
     ...mapMutations({
       displaySearchedProducts: 'DISPLAY_SEARCHED_PRODUCTS'
     }),
     search: function(){
       let regex = new RegExp(this.searchQuery, "gi")
       let result = this.allProducts.filter(product => product.title.match(regex))
       this.displaySearchedProducts(result)
       this.searchResults = result
       console.log('regex', regex)
       console.log('search result', result)
     }
   },
   created(){
     console.log('searchcompo', this.allProducts)
   }
 }
</script>
