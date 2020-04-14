import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAMp1PgXko19W9iPjPr96KkOJhi5jxmf3w",
  authDomain: "my-address-pj-57015.firebaseapp.com",
  databaseURL: "https://my-address-pj-57015.firebaseio.com",
  projectId: "my-address-pj-57015",
  storageBucket: "my-address-pj-57015.appspot.com",
  messagingSenderId: "577901911532",
  appId: "1:577901911532:web:66a858090d193b4b7334c9",
  measurementId: "G-ZZKFHWZ0TR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
