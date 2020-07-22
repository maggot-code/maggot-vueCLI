import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'
import './plugins/iview'
import * as tool from '@/utils/tool'
import * as api_public from '_api/public'

Vue.config.productionTip = false

Vue.prototype.$store = store;
Vue.prototype.$config = config;
Vue.prototype.$tool = tool;
Vue.prototype.$api = api_public;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
