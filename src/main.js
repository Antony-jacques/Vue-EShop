import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Vuetable} from 'vuetable-2'

Vue.config.productionTip = false
Vue.component('VueTable', Vuetable) // decla compo global dans toute l'app (nom du compo dans les templates, var js de l'import )
new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')

