import Vue from 'vue'
import App from './App.vue'
import store from "../store/index";
import router from "./router";
import {library} from '@fortawesome/fontawesome-svg-core';
import "./assets/sass/app.sass";


import {
  faHome,
  faSync
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faHome, faSync);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
