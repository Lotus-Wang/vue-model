import Home from './components/Home'
import Login from './components/Login'
import Reg from './components/Reg'
import Gouwuche from './components/Gouwuche'
import Menber from './components/Menber'
import News from './components/News'
import Help from './components/Help'
import Wode from './components/wode/Wode'
import Wode1 from './components/wode/Wode1'
import Threerouter from './components/wode/three/Threerouter'
import Wode2 from './components/wode/Wode2'


export const routes = [{
		path: '/',
		component: Home
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/reg',
		component: Reg
	},
	{
		path: '/gouwuche',
		component: Gouwuche
	},
	{
		path: '/menber',
		component: Menber
	},
	{
		path: '/news',
		component: News
	},
	{
		path: '/help',
		component: Help
	},
	{
		path: '/wode',
		redirect: '/wode/wode1',
		component: Wode,
		children: [{
				path: '/wode/wode1',
				name: 'wode1',
				redirect: '/wode/wode1/threerouter',
				component: Wode1,
				children: [{
					path: '/wode/wode1/threerouter',
					name: 'threerouter',
					component: Threerouter
				}]
			},
			{
				path: '/wode2',
				name: 'wode2',
				component: Wode2,
				//路由独享守卫
				//beforeEnter: (to, from, next) => {
				//	alert("您还不是会员，请先申请会员");
				//	next('/wode/wode1'); //一种是实现跳转，一种是false阻止跳转
				//}
			}
		]
	},
	{
		path: '*',
		redirect: '/'
	}
]
