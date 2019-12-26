import Vue from 'vue'
import Router from 'vue-router'

const Index = ()=> import('@/pages/Index')//首页

const login = ()=> import('@/pages/login/login')//登录

const finding = ()=> import('@/pages/finding/index')//发现
const fContent = ()=> import('@/pages/finding/children/fContent')//发现
const videoPlayer = ()=> import('@/pages/finding/children/playVideo')//视频播放

const classList = ()=>import('@/pages/class/index')//课程
const experience = ()=>import('@/pages/class/children/done')//课程列表，可滚动

const QBank = ()=> import('@/pages/ticketBank/index');//题库
const QDetail = ()=> import('@/pages/ticketBank/children/done');//题库详情

const mine = ()=> import("@/pages/mine/index");//我的

Vue.use(Router)

let router = new Router({
	mode: 'history',
  	routes: [
    	{
	      path: '/',
			component: Index,
			meta: {
				title: '',
				login: true,
				keepAlive: false,
			},
			children: [
				{
					path: '',
					component: finding,
					meta: {
						title: '',
						login: true,
						keepAlive: false,
					},
					children: [
						{
							path: '',
							component: fContent,
							meta: {
								title: '',
								login: true,
								keepAlive: false,
							}
						},
					]
				},
				{
					path: 'classList',
					component: classList,
					meta: {
						title: '消防体验课',
						login: true,
						keepAlive: false,
					},
					children: [
						{
							path: '',
							component: experience,
							meta: {
								title: '实务体验课',
								login: true,
								keepAlive: false,
							},
						}
					]
				},
				{
					path: 'QBank',
					component: QBank,
					meta: {
						title: '题库',
						login: true,
						keepAlive: false,
					},
					children: [
						{
							path: '',
							component: QDetail,
							meta: {
								title: '实务',
								login: true,
								keepAlive: false,
							},
						},
						// {
						// 	path: '',
						// 	component: QDetail,
						// 	meta: {
						// 		title: '综合能力',
						// 		login: true,
						// 		keepAlive: false,
						// 	},
						// },
						// {
						// 	path: '',
						// 	component: QDetail,
						// 	meta: {
						// 		title: '案例',
						// 		login: true,
						// 		keepAlive: false,
						// 	},
						// },
						// {
						// 	path: '',
						// 	component: QDetail,
						// 	meta: {
						// 		title: '三合一',
						// 		login: true,
						// 		keepAlive: false,
						// 	},
						// }
					]
				},
				{
					path: 'mine',
					component: mine,
					meta: {
						title: '我的',
						login: true,
						keepAlive: false,
					},
					// children: [
					// 	{}
					// ]
				}
			]
		},
		{
			path: '/login',
			component: login,
			meta: {
				title: '登录',
				login: true,
				keepAlive: false,
			}
		},
		{
			path: '/videoPlayer',
			component: videoPlayer,
			meta: {
				title: '视频播放',
				login: true,
				keepAlive: false
			}
		}
	]
})

// router.beforeEach((to,from,next)=>{
// 	if (to.meta.login) {
// 		next()
// 	} else {
// 		next()
// 	}
// })

router.afterEach((to,from,next)=>{
	if (to.meta.title) {
		window.document.title = to.meta.title
	} else {
		window.document.title = '高仿嗨学堂'
	}
})

export default router