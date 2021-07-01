import request from '@/utils/request'

export function getBaseInfo(data) {
	return request({
		url: '/h5/api/v1/task/getBaseInfoByShortLink',
		data,
		method: 'post'
	})
}

export function getTaskAndSignInfo(data) {
	return request({
		url: '/h5/api/v1/task/getTaskAndSignInfo',
		data,
		method: 'post'
	})
}

export function getsmsCode(data) {
	return request({
		url: '/h5/api/v1/task/sendSmsBySignId',
		data,
		method: 'post'
	})
}

export function smsLoginBySignId(data) {
	return request({
		url: '/h5/api/v1/task/smsLoginBySignId',
		data,
		method: 'post'
	})
}

export function getLegalBaseInfo(data) {
	return request({
		url: '/h5/api/v1/task/legalBaseAuthInfoByShortLink',
		data,
		method: 'post'
	})
}