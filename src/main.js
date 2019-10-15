import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCjVG2c1dXIBZgrBcO9HX7vDzG5cUDwtSA",
  authDomain: "vue-calendar-39d0b.firebaseapp.com",
  databaseURL: "https://vue-calendar-39d0b.firebaseio.com",
  projectId: "vue-calendar-39d0b",
  storageBucket: "vue-calendar-39d0b.appspot.com",
  messagingSenderId: "646848161241",
  appId: "1:646848161241:web:62a8693e6ed44fa7fe65c8"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
