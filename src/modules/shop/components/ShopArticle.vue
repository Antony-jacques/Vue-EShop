<template>
  <li class="article-card">
    <h2 class="article-name">
      {{ item.name }}
    </h2>
    <div class="article-img">

    </div>
    <div class="article-price">
      {{ item.price }}{{ currency }}
    </div>
    <button @click="addItemToCart" >Ajouter au panier222</button>
  </li>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'ShopArticle',
  data() {
    return {}
  },
  props: {
    item: Object,
  },
  computed: {
    ...mapGetters({
      items: 'getItemsCollection',
      currency: 'getCurrency'
    }),
  },
  methods: {
    ...mapMutations({
      addToCart: 'addToCart'
    }),
    addItemToCart(){
      this.addToCart(this.item)
      console.log(this.item)
    },
  }
}
</script>

<style scoped>
  .article-card {
    border: solid 1px;
    padding: 2rem;
    min-width: 200px;
  }
</style>
