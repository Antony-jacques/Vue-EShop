<template>
  <div :style="styleAttr" id="test">
    hello {{styleAttr}} {{studentName}} {{color}}
    <div>
      <button @click="test">
        click me
      </button>
      <div v-if="show">
        Je suis affichée
      </div>
      <div v-else>
        La div est cachée
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TestComponent',
  data() {
    return {
      studentName: 'Jean'
    }
  },
  props: {
    color: {type: String},
    show: {type: Boolean}
  },
  computed: {
    styleAttr: function() {
      return {
        backgroundColor: this.color
      }
    }
  },
  methods: {
    test(){
      alert(this.studentName)
    }
  }
}
</script>

