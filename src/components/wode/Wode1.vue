<template>
	<div class="card text-dark bg-light mb-3">
		<div class="card-header">
			wode1
		</div>
		<div class="card-body">
			<p>wode111</p>
			<router-link tag="li" class="nav-link" :to="{name:'threerouter'}">
					<a class="list-group-item list-group-item-action">第三路由</a>
			</router-link>
			<router-view> </router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>