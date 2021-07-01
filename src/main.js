import Vue from 'vue'
import App from './App.vue'
import router from './router/routers'
import store from './store'

import './router/index'

Vue.config.productionTip = false

import {
	Button,
	Form,
	Field,
	Icon,
	Popup,
	RadioGroup,
	Radio,
	ActionSheet,
	Overlay,
	Loading,
	Uploader,
	Checkbox,
	DatetimePicker,
	Calendar,
	Cell,
	CellGroup
} from 'vant'
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(ActionSheet);
Vue.use(Overlay);
Vue.use(Loading);
Vue.use(Uploader);
Vue.use(Checkbox);
Vue.use(DatetimePicker)
Vue.use(Calendar)
Vue.use(Cell)
Vue.use(CellGroup)

import './assets/css/base.css'

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')