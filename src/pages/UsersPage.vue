<template>
  <div>
    <h2>
    users
  </h2>
    <table class="users">
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>ID</th>
        <th>Actions</th>
      </tr>
      <userItem v-for="user in getUserList" :key=user.id :user="user"/>
    </table>
    <addUserForm @addNewUser="users = $event" />
  </div>
</template>

<script>
  import { mapGetters, mapActions} from "vuex";
  import addUserForm from '@/components/addUserForm.vue'
  import userItem from '@/components/userItem.vue'

  export default {
    data(){
      return {
        name: 'UsersPage',
      }
    },

    components: {addUserForm, userItem},

    computed: {
      ...mapGetters({
        users: "getUsers"
      }),
      getUserList: function(){

        return this.users
      },
    },

    methods: {
      ...mapActions(['loadUsers'])
    },

    beforeMount() {
      this.loadUsers()
      console.log(this.users)
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
  }
</style>
