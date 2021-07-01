import Cookies from 'js-cookie'

const TokenKey = 'jit-econtract'

export function getToken() {
	return Cookies.get(TokenKey)
}

export function setToken(token) {
	return Cookies.set(TokenKey, token)
}

export function removeToken() {
	return Cookies.remove(TokenKey)
}

export function setLocalstorage(name, value) {
	return localStorage.setItem(name, value)
}

export function getLocalstorage(name) {
	return localStorage.getItem(name)
}