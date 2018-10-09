// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './routes'

Vue.use(VueRouter)


const router = new VueRouter({
	routes,
	mode: 'history'
})

//全局守卫
//router.beforeEach((to,from,next)=>{
//	//判断store.gettes.isLogin===false
//	//to当前跳转的信息
//	if(to.path=='/login' || to.path=='/reg'){
//		next();
//	}
//	else{
//		alert("还未登陆，请先登陆");
//		next('/login');
//	}
//})

//后置钩子
//router.afterEach((to, from) => {
//	alert("after each");
//})
/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	components: {
		App
	},
	template: '<App/>'
})