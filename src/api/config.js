import Vue from 'vue'

import {
	Style,
	Button,
	Toolbar,
	CheckboxGroup,
	Radio,
	Input,
	Textarea,
	Select,
	Switch,
	Rate,
	Validator,
	Form,
	Loading,
	Tip,
	Popup,
	Toast,
	Picker,
	CascadePicker,
	DatePicker,
	SegmentPicker,
	TimePicker,
	Dialog,
	ActionSheet,
	Drawer,
	Scroll,
	Slide,
	IndexList,
	Swipe,
	Upload
} from 'cube-ui'

Vue.use(Button)
Vue.use(Toolbar)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Textarea)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Validator)
Vue.use(Form)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(DatePicker)
Vue.use(SegmentPicker)
Vue.use(TimePicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Drawer)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
Vue.use(Swipe)
Vue.use(Upload)

/*------------------------------ 引入公共样式 ------------------------------*/
import '../../static/css/reset.css';

/*------------------------------ axios使用设置 ------------------------------*/
import axios from 'axios'

import { api } from './api' //接口地址

Vue.config.productionTip = false

/*------------------------------ 引入播放器 ------------------------------*/
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.use(VueVideoPlayer)


Vue.prototype.$axios = axios;
// Vue.prototype.URL = api;
// // axios.defaults.withCredentials=true
// // 初始化API的配置
api.init(Vue, axios);


//添加请求拦截器
/*axios.interceptors.request.use(function(config){
	//在发送请求之前做某事
	config.headers.common = {
		'Content-Type':"text/plain",
		'x-authentication-token':"",
	}
	//设置超时时间
	config.timeout = 12000;
	return config;
}，function(error){
	//请求错误时做些事
	return Promise.reject(error);
});*/


// // 拦截响应response，并做一些错误处理
// axios.interceptors.response.use((response) => {
// 	return response;
// }, (err) => {
// 	// 这里是返回状态码不为200时候的错误处理
// 	if (err.toString().indexOf("timeout") != -1) {
// 		Cube.Dialog.$create({
// 			type: 'alert',
// 			content: "请求超时，请稍后再试",
// 			icon: 'cubeic-alert'
// 		}).show()
// 	}
// 	if (err && err.response) {
// 		switch (err.response.status) {
// 			case 400:
// 				err.message = '请求错误'
// 				break

// 			case 401:
// 				err.message = '未授权，请登录'
// 				break

// 			case 403:
// 				err.message = '拒绝访问'
// 				break

// 			case 404:
// 				err.message = `请求地址出错: ${err.response.config.url}`
// 				break

// 			case 408:
// 				err.message = '请求超时'
// 				break

// 			case 500:
// 				err.message = '服务器开个小差，请稍后再试'
// 				break

// 			case 501:
// 				err.message = '服务器开个小差，请稍后再试'
// 				break

// 			case 502:
// 				err.message = '服务器开个小差，请稍后再试'
// 				break

// 			case 503:
// 				err.message = '服务器开个小差，请稍后再试'
// 				break

// 			case 504:
// 				err.message = '服务器开个小差，请稍后再试'
// 				break

// 			case 505:
// 				err.message = 'HTTP版本不受支持'
// 				break

// 			default:
// 		}
// 		Cube.Dialog.$create({
// 			type: 'alert',
// 			content: err.message,
// 			icon: 'cubeic-alert'
// 		}).show()
// 	}
// 	return Promise.reject(err)
// })

export { Vue }