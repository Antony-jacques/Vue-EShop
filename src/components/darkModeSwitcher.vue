<template>
  <div>
    <button @click="toggle">dark mode </button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

  export default {
    data(){
      return {
        data: 'hello'
      }
    },
    computed: {
      ...mapGetters({
        isDarkMode: 'getIsDarkMode'
      }),
    },
    methods: {
      ...mapMutations({
        toggleDarkMode: 'toggleDarkMode'
      }),
      toggle(){
        this.toggleDarkMode()
        console.log(this.isDarkMode)
      }
    }
  }
</script>
