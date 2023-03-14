<template>
  <div>

    <ul>
<!--      <li v-for="item in items" :key="item.id" >-->
<!--        {{item.name}} {{item.price}} {{currency}}-->
<!--      </li>-->
      <ShopArticle v-for="item in items" :key="item.id" :item="item"/>
    </ul>
    <button @click="updateCurrency">dollar</button>
    <h2>{{getTotal}}</h2>
    <div><ShoppingCart/></div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import ShopArticle from '@/modules/shop/components/ShopArticle.vue'
import ShoppingCart from '@/modules/shop/components/ShoppingCart.vue'

  export default {
    name: 'ItemList',

    data(){
      return {
        value: null
      }
    },

    components: {ShopArticle,ShoppingCart },
    computed : {
      ...mapGetters({
        items: 'getItemsCollection',
        currency: 'getCurrency'
      }),
      getTotal(){

        let number = this.items.reduce(function(acc, obj){
          return acc + obj.price
        }, 0)


        return  `Le total est :` + number
      },
    },
    methods: {
      ...mapMutations({
        setCurrency: 'setCurrency'
      }),
      updateCurrency(){
        this.setCurrency('$')
      },
    }
  }
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }


</style>
