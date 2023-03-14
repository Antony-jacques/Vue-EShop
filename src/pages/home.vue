<template>
  <div>
    <HelloWorld msg="Welcome"/>
    <Countries/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Countries from '../components/countries.vue'

export default {
  name: "HomePage",
  components: {
    HelloWorld, Countries
  }
}
</script>
