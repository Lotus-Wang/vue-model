<template>
	<div id="app">
		<app-header></app-header>
		<router-view> </router-view>
		<app-footer></app-footer>
		<app-tooltab></app-tooltab>
	</div>
</template>

<script>
	import Header from './components/Header'
	import Footer from './components/Footer'
	import Tooltab from './components/Tooltab'
	import './assets/iconfont/iconfont.css'

	export default {
		name: 'App',
		components: {
			//  appHeader:Header
			"app-header": Header,
			"app-footer": Footer,
			"app-tooltab": Tooltab
		}
	}
</script>

<style>
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	
	* {
		margin: 0;
		padding: 0;
		list-style: 0;
		text-decoration: none;
		box-sizing: border-box;
	}
	
	html,
	body {
		width: 100%;
		background: #EDEDED;
		height: 100%;
		font-family: verdana, sans-serif;
	}
	
	ul {
		list-style-type: none;
	}
	
	a:hover {
		text-decoration: none;
	}
	
	@media (min-width: 1200px) .container {
		max-width: 1200px;
	}
</style>