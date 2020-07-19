import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview'

import config from '@/config'
import * as api_public from '_api/public'

Vue.config.productionTip = false

Vue.prototype.$store = store;
Vue.prototype.$config = config;
Vue.prototype.$api = api_public;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
