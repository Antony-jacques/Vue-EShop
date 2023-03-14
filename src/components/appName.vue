<template>
  <div>
    <p>Ton app est {{ appName }}</p>
    <input v-model="value">
    <button @click="updateAppName">Modifier</button>

  </div>

</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'appName',
  data(){
    return{
      value: null
    }
  },
  computed: {
    ...mapGetters({
      appName: 'getAppName'
    })
  },
  methods : {
    ...mapMutations({
      setAppName: 'setAppName',
    }),
    updateAppName(){
      this.setAppName(this.value)
    }
  },
  mounted() {
    this.value = this.appName
  }
}
</script>