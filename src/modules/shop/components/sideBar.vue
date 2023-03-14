<template>
  <div>
    <activeFiltersList/>
    <button @click="setCurrentSection(1)" class="accordion">Trier</button>
    <div v-if="currentSection === 1" class="panel">
      <button @click="sortByPriceAsc" class="button sort-btn">Prix croissants</button>
      <button @click="sortByPriceDesc" class="button sort-btn" >Prix décroissants</button>
    </div>

    <button @click="setCurrentSection(2)" class="accordion">Filtrer</button>
    <div v-if="currentSection === 2" class="panel">
      <div>
        <button @click="filterByCateg(category)" class="button sort-btn" v-for="(category,index) in getProductsCategories" :key="index">
          {{ category }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import activeFiltersList from "@/modules/shop/components/activeFiltersList.vue";


  export default {
    data(){
      return {
        currentSection: true,
      }
    },
    components: { activeFiltersList },
    methods: {
      ...mapMutations({
        sortByPriceAsc: 'SORT_BY_PRICE_ASC',
        sortByPriceDesc: 'SORT_BY_PRICE_DESC',
        filterByCateg: 'FILTER_BY_CATEG',
      }),
      setCurrentSection: function(num){
        if( num === this.currentSection){
          this.currentSection = null
          return
        }
        this.currentSection = num
        console.log(this.currentSection)
      }
    },
    computed: {
      ...mapGetters({
        getProductsCategories: 'getProductsCategories'
      })
    }
  }
</script>

<style scoped>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  //display: none;
  background-color: white;
  overflow: hidden;
}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.sort-btn{
  background-color: white;
  color: black;
  border: 2px solid #008CBA;
}

.sort-btn:hover {
  background-color: #008CBA;
  color: white;
}
</style>
