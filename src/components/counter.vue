
<template>
  <div>
    Tu as cliqué {{ x }} fois
    <button @click="increment">clique moi fort!</button>
  </div>
</template>
<script>
export default {
  name: 'clickCounter',
  data() {
    return {
      x: 0
    }
  },
  methods: {
    increment() {
      this.x += 1;
    }
  },
};
</script>