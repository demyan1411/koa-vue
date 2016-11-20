const a = 123;
console.log(a);
// import Vue from 'vue';
var Vue = require('vue');
import App from './App.vue'
const app = new Vue({
  el: '#app',
  render: h => h(App)
});

// console.log(app);
