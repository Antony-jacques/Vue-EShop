<template>
  <div>
    peru component

  </div>
</template>

<script>

  export default {
    name: 'PeruComponent',
    components: {
    },
    computed: {
      getcountryUrlParam(){
        return this.$route.params.country
      }
    }
  }
</script>
