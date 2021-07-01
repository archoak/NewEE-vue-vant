import axios from 'axios'
import router from '@/router/routers'
import {
	getToken
} from '@/utils/auth'
import {
	Notify
} from 'vant';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
	timeout: 3000000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
		const isToken = (config.headers || {}).isToken === false
		if (getToken() && !isToken) {
			config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
		}
		return config
	},
	error => {
		// Do something with request error
		console.log(error) // for debug
		Promise.reject(error)
	}
)

// response 拦截器
service.interceptors.response.use(response => {

		if (response.data instanceof Blob) {
			return response.data
		} else {
			const code = response.data.code
			if (code == 401) {
				// 登陆状态已过期
			} else if (code != 0) {
				Notify({
					type: 'danger',
					message: response.data.message
				});
				// return Promise.reject('error')
			} else {
				return response.data
			}
		}

	},
	error => {
		let code = 0
		try {
			code = error.response.data.status
		} catch (e) {
			if (error.toString().indexOf('Error: timeout') !== -1) {
				// Notification.error({
				//   title: '网络请求超时',
				//   duration: 5000
				// })
				Notify({
					type: 'danger',
					message: '网络请求超时'
				});
				return Promise.reject(error)
			}
		}
		if (code) {
			if (code === 401) {
				router.push({
					path: '/401'
				})
			} else if (code === 403) {
				router.push({
					path: '/401'
				})
			} else {
				const errorMsg = error.response.data.message

				if (errorMsg !== undefined) {
					// Notification.error({
					//   title: errorMsg,
					//   duration: 5000
					// })
					Notify({
						type: 'danger',
						message: errorMsg
					});
				}
			}
		} else {
			// this.$message.error('服务器错误！');
			// Notification.error({
			//   title: '接口请求失败',
			//   duration: 5000
			// })
			Notify({
				type: 'danger',
				message: '接口请求失败'
			});
		}
		return Promise.reject(error)
	}
)
export default service