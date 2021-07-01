<template>
	<div id="app" @load="loadHandle">
		<router-view></router-view>
	</div>
</template>
<script>
import { isIOS } from "@/utils";
export default {
	data() {
		return {
		};
	},
	created() {
		(function() {
			function init() {
				var html = document.querySelector("html");
				var width = html.getBoundingClientRect().width;
				html.style.fontSize = width / 7.5 + "px";
			}

			init();

			window.addEventListener("orientationchange", init);
			window.addEventListener("resize", init);
		})();
	},
	methods: {
		loadHandle() {
			let _this = this;
			window.onload = function() {
				this.$nextTick(() => {
					if (isIOS()) {
						console.log("ios系统");

						console.log("container", this.$refs["container"]);

						console.log(
							"container" + this.$refs["container"].style.height
						);

						// ios 软键盘弹出的事件处理

						document.body.addEventListener("focusin", () => {
							console.log("键盘弹起");

							console.log(
								"height" + this.$refs["container"].style.height
							);

							let scrollheight =
								document.documentElement.scrollHeight +
								400 +
								"px";

							_this.$nextTick(() => {
								console.log("scrollHeight", scrollheight);

								// _this.$refs["container"].style.height = pxToRem(scrollheight)
							});

							// this.$forceUpdate()
						});

						// ios 软键盘收起的事件处理
						document.body.addEventListener("focusout", () => {
							console.log("键盘收起");
							this.$refs["container"].style.height = "auto";
							console.log(
								"height" + this.$refs["container"].style.height
							);
						});
					} else {
						console.log("安卓系统");
					}
				});
			};
		}
	}
};
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: .28rem;
}

</style>
