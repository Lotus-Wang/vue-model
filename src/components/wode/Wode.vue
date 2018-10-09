<template>
	<div class="row bm-5">
		<div class="col-4">
			<!--导航-->
			<div class="list-group mb-5">
				<router-link tag="li" class="nav-link" :to="{name:'wode1'}">
					<a class="list-group-item list-group-item-action">我的</a>
				</router-link>
				<router-link tag="li" class="nav-link" :to="{name:'wode2'}">
					<a class="list-group-item list-group-item-action">我的</a>
				</router-link>
			</div>
		</div>
		<div class="col-8">
			<router-view> </router-view>
		</div>
		<router-view name="myrouter"> </router-view>
		
	</div>
</template>

<script>
</script>

<style>
</style>