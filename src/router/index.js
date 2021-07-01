import router from "./routers";
import {
	getToken,
	getLocalstorage
} from "@/utils/auth"; // getToken from cookie

const whiteList = []; // no redirect whitelist
router.beforeEach((to, from, next) => {
	if (getToken()) {
		// 已登录且要跳转的页面是登录页
		// if (to.path === '/login' || to.path === '/remind') {
		//   next({ path: '/sign' })
		// } else {
		//   next()
		// }
		next();
	} else {
		/* has no token*/
		if (whiteList.indexOf(to.path) !== -1) {
			// 在免登录白名单，直接进入
			next();
		} else {
			next(`/login`); // 否则全部重定向到登录页

		}
	}
});

router.afterEach(() => {});