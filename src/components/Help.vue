<template>
	<div class="help">
		<div id="help" class="col-sm-12 text-center">
			<div class="backg">
				<h1>您好</h1>
				<button @click="goToMenu" class="btn-success">Let's order</button>
			</div>
		</div>
		<h1>help</h1>
	</div>
</template>

<script>
	export default {
		name: 'help',
		data() {
			return {

			}
		},
		methods: {
			goToMenu() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	#help {
		background: url(../assets/dt1.png);
		height: 95vh;
		color: #333333;
		padding: 10%;
	}
	
	.backg {
		background: #eee;
		opacity: 0.8;
		max-width: 70vw;
		margin: 0 auto;
		padding: 20px 0;
	}
</style>