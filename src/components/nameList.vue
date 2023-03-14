<template>
  <div>
    <ul>
      <li v-for="(name,i) in names" :key="i">
        <router-link :to="getHelloRoute(name)" >{{name}}</router-link>
      </li>
    </ul>
    <input v-model="newName" >
    <button :disabled="nameNumber > 4" @click="addName">submit</button>
  </div>
</template>
<script>
  export default {
    name: 'nameList',
    data() {
      return {
        names: ['Claire', 'Julien'],
        newName: ''
      }
    },
    methods: {
      addName() {
        this.names.push(this.newName)
        this.newName = ''
      },
      getHelloRoute(name){
        return {
          name: 'HelloPage',
          params: {
            firstname: name
          }
        }
      }
    },
    computed: {
      nameNumber() {
        return this.names.length
      }
    },
    watch : { // se lance à chaque modif de la propriété
      nameNumber() { // doit avoir le meme nom que la propriété à surveiller ds computed
        if(this.nameNumber > 4) {
          alert('limite atteinte !')
        }
      }
    },
    created() {
      this.names.push('René')
    },

    beforeCreate() { console.log('beforeCreate'); },
    //created() { console.log('created'); },
    beforeMounted() { console.log('beforeMounted'); },
    mounted() { console.log('mounted'); }, // utilisé pour appel api
  }
</script>