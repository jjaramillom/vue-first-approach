import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueCompositionAPI from '@vue/composition-api'
import { BootstrapVue } from 'bootstrap-vue';

Vue.use(VueCompositionAPI)

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
