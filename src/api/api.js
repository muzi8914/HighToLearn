var api = {

	init(Vue, axios) {

		Vue.prototype.URL = {
			BASEURL: 'http://119.23.201.62:8082/api/api/',//测试地址
		
			menuList: 'firstPageManage/menuList',//首页功能菜单
		};

		axios.interceptors.request.use(
			(config) => {
				config.headers.common = {
					// 'Content-Type': "text/plain"
					// 'Content-Type': "application/json"
					'Content-Type': 'application/x-www-form-urlencoded'
					// 'appDevice': {"device":"pico","platform":"android-guanjia","version":"1.0.0"}
				};
				// 设置超时时间
				config.timeout = 20000;
				return config;
			}, (err) => {
				return null
			}
		);

	}
}
export { api }