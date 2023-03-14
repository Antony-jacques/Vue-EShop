<template>
  <div>
    wordCounter
    <textarea v-model.lazy="message"></textarea>
    <div>{{message}}</div>
    <div>{{getMessageLength}}</div>
  </div>
</template>
<script>
  export default {
    name: 'wordCounter',

    data(){
      return {
        message: ''
      }
    },
    computed: {
      getMessageLength(){
        if(this.message.length === 0 ){
          return 0
        }
        return this.message.split(' ').length
      }
    },
  }
</script>
