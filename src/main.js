import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import { Button, Select } from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

import MetaInfo from "vue-meta-info"

Vue.use(MetaInfo)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount("#app")
