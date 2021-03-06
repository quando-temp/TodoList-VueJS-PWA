import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import i18n from './locales/config';
import './registerServiceWorker';
import './assets/styling/scss/styles.scss';
import filterPlugin from './helpers/filter';
import directivePlugin from './helpers/directive';
import VueInstall from 'vue-pwa-install';
import './assets/styling/animate.css';
import 'vue-date-pick/dist/vueDatePick.css';


import { APIService } from './helpers/services/api.service';
import { FirebaseService } from './helpers/services/firebase.service';

const api = new APIService();
const firebase = new FirebaseService();

Vue.config.productionTip = false;
Vue.prototype.$http = api;
Vue.prototype.$firebase = firebase;


Vue.use(VueI18n);
Vue.use(directivePlugin);
Vue.use(filterPlugin);
Vue.use(VueInstall);

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app');
