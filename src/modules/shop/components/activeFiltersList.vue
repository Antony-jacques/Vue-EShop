<template>
  <div v-if="filteredCategories.length" >
    <span>filtres actifs: </span>
    <button @click="removeCategFilter(filteredCategory)" v-for="(filteredCategory, index) in filteredCategories" :key="index">
      {{ filteredCategory }} X
    </button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
   data(){
     return {
       name: 'hello'

     }
   },
  computed: {
     ...mapGetters({
       filteredCategories: 'getFilteredCategories'
     })
  },
  methods: {
     ...mapMutations({
       removeCategFilter: 'REMOVE_CATEG_FILTER'
     })
  }
 }
</script>
