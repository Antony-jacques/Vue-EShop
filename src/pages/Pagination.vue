<template>
  <div>
    Pagination {{ test }}
    <p>current : {{ currentPage }}</p>
    <p>page number : {{ getPageNumber }}</p>
    <button @click="getNextPage">plus</button>
    <button v-for="(page, index) in pages" :key="index"> {{ page }}</button>
    <button>moins</button>
    <button @click="getButtons" >test page number</button>
    <ul>
      <li v-for="(item, i) in dataArray" :key="i" class="item">
        <span>
          {{ item }} - {{ i }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "PaginationTest",
    data(){
      return {
        test: "toto",
        posts : [''],
        currentPage: 1,
        perPage: 10,
        pages: [],

        dataArray: [
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
            'toto',
        ]
      }

    },

    methods: {
      getNextPage() {
        this.currentPage +=1
      },
      // paginate (item) {
      //   let page = this.currentPage;
      //   let perPage = this.perPage;
      //   let firstItem = (page * perPage) - perPage;
      //   let lastItem = (page * perPage);
      //   return  item.slice(firstItem, lastItem);
      // }
    },
    computed: {
      displayedPosts () {
        return this.paginate(this.posts);
      },
      getButtons(){
        for(let i=0; i < this.getPageNumber; i++){
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.pages.push(i+1)
        }
        console.log(this.pages)
        return 'null'
      },
      getPageNumber(){
        let pageNumber = Math.ceil(this.dataArray.length / this.perPage)
        return pageNumber
      }

    },
  }
</script>

<style scoped>
  .red {
    background: red;
  }
</style>
