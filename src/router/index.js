import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import configs from '../config/index'
import {pageLoading,getToken,cacheDelete} from '../utils/tool'

const routerBasicsPath = {
	'login':(to,next,token) => {
		token ? next({name:'_home'}) : next();
	},
	'error_500': (to,next) => {
		next()
	},
	'error_404': (to,next) => {
		next()
	},
	'error_401': (to,next) => {
		next()
	},
	'other' : (to,next,token) => {
		token ? next() : next({name:'login'})
	}
}

const checkToken = (to,from,next) => {
	let token = getToken();
	if(!token) cacheDelete();
	routerBasicsPath[to.name] ? routerBasicsPath[to.name](to,next,token) : routerBasicsPath.other(to,next,token);
}

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	pageLoading();
	configs.tokenCheck ? checkToken(to,from,next) : next();
})

router.afterEach(to => {
	console.log(to);
	pageLoading('finish');
	window.scrollTo(0, 0)
})

export default router