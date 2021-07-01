import Vue from 'vue'
import Vuex from 'vuex'
import {
	getBaseInfo,
	smsLoginBySignId
} from '@/api/login'
import {
	setToken
} from '@/utils/auth'

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		taskId: '',
		signId: '',
		token: '',
		signInfo: {}, // 合同数据
		signFileListInfo: [], // 签署数据
		sealInfo: {} // 印章数据 
	},
	mutations: {
		SET_TASKID: (state, taskId) => {
			state.taskId = taskId
		},
		SET_SIGNID: (state, signId) => {
			state.signId = signId
		},
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_SIGNINFO: (state, info) => {
			state.signInfo = info
		},
		SET_FILE_LIST_INFO: (state, info) => {
			state.signFileListInfo = info
		},
		SET_SEAL_INFO: (state, info) => {
			state.sealInfo = info
		}
	},
	actions: {
		getBase({
			commit
		}, shortLink) {
			return new Promise((resolve, reject) => {
				getBaseInfo({
					shortLink
				}).then(res => {
					commit('SET_TASKID', res.result.taskId)
					commit('SET_SIGNID', res.result.signId)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},
		login({
			commit
		}, info) {
			return new Promise((resolve, reject) => {
				smsLoginBySignId({
					signId: info.signId,
					vcode: info.vcode,
					type: info.type
				}).then(res => {
					setToken(res.result.token)
					commit('SET_TOKEN', res.result.token)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		}
	},
	modules: {},
	plugins: [createPersistedState()]
})