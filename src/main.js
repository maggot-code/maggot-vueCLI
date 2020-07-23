import './plugins/iview'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'

import * as tool from '@/utils/tool'
import * as feedback from '@/utils/feedback'
import * as api_public from '_api/public'
import * as options from '@/config/options'

import MaskLoad from '_c/dynamic/'

Vue.config.productionTip = false

Vue.prototype.$store = store;
Vue.prototype.$config = config;
Vue.prototype.$tool = tool;
Vue.prototype.$fb = feedback;
Vue.prototype.$api = api_public;
Vue.prototype.$op = options;
Vue.prototype.$ml = MaskLoad;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
