import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// Vue.prototype.$http = axios;
// axios.defaults.baseURL = 'http://127.0.0.1:3333/'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')