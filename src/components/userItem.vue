<template>
    <tr >
      <td >
        <span v-if="!editMode">{{ user.name }}</span>
        <input v-model="updatedName" v-if="editMode" type="text" :placeholder="user.name">
      </td>

      <td >
        <span v-if="!editMode">{{ user.username }}</span>
        <input v-model="updatedUsername" v-if="editMode" type="text" :placeholder="user.username">
      </td>

      <td >
        <span v-if="!editMode">{{ user.email }}</span>
        <input v-model="updatedEmail" v-if="editMode" type="text" :placeholder="user.email">
      </td>

      <td>{{ user.id }}</td>
      <td>
        <button v-if="!editMode" class="edit-btn" @click="toggleEditMode" >edit</button>
        <button v-if="editMode" class="save-btn" @click="updatedUser" >save</button>
        <button @click="removeUser">remove</button>
      </td>
    </tr>

</template>
<script>
import {mapGetters, mapMutations} from "vuex";

  export default {
    data(){
      return {
        editMode: false,
        updatedName: '',
        updatedUsername: '',
        updatedEmail: '',
      }
    },
    props: {
      user: Object
    },
    computed: {
      ...mapGetters({
        users: 'getUsers'
      }),
      getTargetedUser: function(){
        return this.users.filter(user => user.id === this.user.id)
      },
    },
    methods: {
      ...mapMutations({
        saveUpdatedUser: 'UPDATE_USER',
        deleteUser: 'DELETE_USER'
      }),
      toggleEditMode: function(){
        // let editButtons = document.querySelectorAll('.edit-btn')
        // console.log(editButtons)
        this.editMode = !this.editMode;
        console.log(this.editMode)
      },
      updatedUser: function(){
        let formUpdatedUser = {
          name: this.updatedName,
          username: this.updatedUsername,
          email: this.updatedEmail,
          id: this.user.id
        }
        console.log('update :', formUpdatedUser)
        this.toggleEditMode()
        this.saveUpdatedUser(formUpdatedUser)

      },
      removeUser: function(){
        this.deleteUser(this.user.id)
      }
    },

    mounted() {
      //console.log('userItem log', this.getTargetedUser)
    }
  }
</script>
