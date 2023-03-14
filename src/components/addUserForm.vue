<template>
  <div>
    <h1>Form</h1>
    <div>
      <h2>highest id : {{getHighestId}}</h2>
    </div>
    <div v-if="errors.length" class="errors-container">
      <h3>Veuillez corriger ces erreurs</h3>
      <ul>
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{error}}
        </li>
      </ul>
    </div>
    <form >
      <label for="name">name</label>
      <input v-model="newName" type="text" id="name" name="name">

      <label for="userName">user name</label>
      <input v-model="newUserName" type="text" id="userName" name="userName">

      <label for="email">email</label>
      <input v-model="newEmail" type="text" id="email" name="email">


      <button @click="addNewUser" >submit</button>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

  export default {
    data(){
      return {
        newName: '',
        newUserName: 'Jeano',
        newEmail: 'jj@sjsh.com',
        errors: [],
      }
    },
    computed: {
      ...mapGetters({
        users: 'getUsers'
      }),
      getHighestId: function(){
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        let sorteById = this.users.sort((a,b)=> a.id-b.id)
        let lastUser = sorteById[sorteById.length - 1]
        let lastId = lastUser?.id
        console.log('lastUser', lastUser)
        console.log('lastUser id', lastUser?.id)
        return  lastId
      }
    },
    methods: {
      ...mapMutations({
        addUser: 'ADD_NEW_USER'
      }),
      addNewUser: function(e){
        e.preventDefault()

        if(this.checkForm()){
          //console.log('this.getHighestId',this.getHighestId)
          //console.log('this.getHighestId + 1',this.getHighestId+1)
          let submitedUser = {
            name: this.newName,
            username: this.newUserName,
            email: this.newEmail,
            id: this.getHighestId+1
          }

          //this.$emit("addNewUser",submitedUser)
          this.addUser(submitedUser)
          this.errors = []
          console.log(submitedUser)
          //e.preventDefault();
        }

      },
      checkForm: function(){
        console.log('passage dans checkform')
        if(!this.newName.length){
          this.errors.push('Le champs name est obligatoire')
          return false
        }
        return true

      }
    },
    mounted(){
      //console.log(this.$data.newUser)
    }
  }
</script>

<style scoped>
  label {
    display: block;
    margin-top: 2rem;
  }

  button {
    display: block;
    margin: 2rem auto;
  }

  .error {
    list-style-type: none;
    color: red;
  }
</style>
