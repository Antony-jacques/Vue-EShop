<template>
  <div>Hello {{name}}</div>
</template>
<script>
  export default {

    name: 'HelloPage',
    computed: {
      name(){
        return this.$route.params.firstname
      }
    }
  }
</script>