<template>
  <div>
    SHOPPAGE
    <ItemList/>
    <ShopArticle/>
  </div>

</template>
<script>
import ItemList from '@/modules/shop/components/ItemList'
import ShopArticle from '@/modules/shop/components/ShopArticle.vue'
  export default {
    name: 'ShopPage',
    components: {
      ItemList,
      ShopArticle,
    }
  }
</script>
