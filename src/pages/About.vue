<template>
  <div>
    <div>AboutPage</div>
    <TestComponent :color="color" :show="true"/>
    <TestComponent color="yellow" :show="false"/>
    <NameList/>
    <AppName/>
    <WordCounter/>
  </div>
</template>
<script>
import TestComponent from '../components/test.vue'
import NameList from '../components/nameList.vue'
import AppName from '../components/appName.vue'
import WordCounter from "@/modules/wordCounter/components/wordCounter.vue";

export default {
  name: "AboutPage",
  mounted() {
    console.log('aboutPage')
  },
  components: {
    TestComponent,
    NameList,
    AppName,
    WordCounter
  },
  data(){
    return {
      color: 'red'
    }
  }
}
</script>
