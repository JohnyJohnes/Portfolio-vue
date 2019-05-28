import Vue from 'vue'
import App from './App.vue'
//anime.js for vue.js
import VueAnime from 'vue-animejs';

Vue.use(VueAnime)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')