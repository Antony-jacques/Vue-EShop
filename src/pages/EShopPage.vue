<template>
  <div>
    <h2>eshop</h2>
    <searchInput/>
    <div class="main-container">
      <div class="grid-container">
        <div class="side-menu">
          <div>
            <sideBar/>
          </div>
        </div>
        <div class="items-list">
          <shopItemsList/>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  import shopItemsList from '@/components/shopItemsList.vue'
  import sideBar from '@/modules/shop/components/sideBar.vue'
  import searchInput from "@/modules/shop/components/searchInput.vue";

  export default {
    data() {
      return {}
    },
    components: { shopItemsList, sideBar, searchInput }
  }
</script>

<style scoped>
  .side-menu {
    grid-area: menu;
    background: red;
    width: 200px;
  }

  .items-list {
    grid-area: list;
  }

  .main-container{

  }
  .grid-container {
    width: 75vw;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
    'menu list list';
    gap: 10px;
    background-color: #2196F3;
    padding: 10px;
  }

  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
</style>
