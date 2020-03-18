import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Form, CellGroup, Checkbox, CheckboxGroup, Field, RadioGroup, Radio, Rate } from 'vant';

[Form, CellGroup, Checkbox, CheckboxGroup, Field, RadioGroup, Radio, Rate].forEach(v => Vue.use(v))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
