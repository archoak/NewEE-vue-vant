export function isIOS() {
	let isIphone = navigator.userAgent.includes('iPhone')
	let isIpad = navigator.userAgent.includes('iPad')
	return isIphone || isIpad
}

export function downloadFile(obj, name, suffix) {
	const fileName = name + '.' + suffix
	const data = new Blob([obj])

	// const url = window.URL.createObjectURL()

	const link = document.createElement('a')
	link.style.display = 'none'
	link.href = window.URL.createObjectURL(data)
	link.setAttribute('download', fileName)
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
	
}