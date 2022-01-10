import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'

// 뷰파이어 노드 모듈 가져와서 Vue 에 연결
import {rtdbPlugin} from 'vuefire'
Vue.use(rtdbPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
