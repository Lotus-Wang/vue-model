<template>
	<h1>login</h1>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				name: 'Wang'

			}
		},
//		组件内的守卫
//		beforeRouteEnter(to, from, next) {
//			alert("欢迎点击登陆");
//			next(vm => {
//				alert("Hello "+vm.name);
//			})
//		},
//		beforeRouteLeave(to, from, next) {
//			const answer = window.confirm('确定离开? 取消!')
//			if(answer) {
//				next()
//			} else {
//				next(false)
//			}
//		}

	}
</script>

<style>

</style>