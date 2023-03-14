<template>

  <div>
    countries

    <div>
      <router-link to="/peru" tag="button">peru</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "countriesComponent",

    computed: {
      getPeru() {
        return '/peru'
      }
    },


    mounted() {
      fetch('https://restcountries.com/v3.1/name/france')
          .then(response => response.json())
          .then(data => console.log(data))
    }
  }
</script>
