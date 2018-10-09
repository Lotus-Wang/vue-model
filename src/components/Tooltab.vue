<template>
	<!--右边悬停tab-->
	<div class="tooltabs">
		<a href="#" class="tool-tab">
			<span class="tab-block">
				<i class="iconfont icon-QQ"></i>
				<span>QQ咨询</span>
			</span>
		</a>
		<a href="" class="tool-tab">
			<span class="tab-block">
						<i class="iconfont icon-weixin"></i>
						<span>微信咨询</span>
			</span>
		</a>
		<a href="" class="tool-tab">
			<span class="tab-block">
						<i class="iconfont icon-dianhua"></i>
						<span>电话咨询</span>
			</span>
		</a>
		<a href="" class="tool-tab">
			<span class="tab-block">
						<i class="iconfont icon-less"></i>
						<span>置顶</span>
			</span>
		</a>
	</div>
</template>

<script>
</script>

<style scoped>
	/*tool tabs start*/
	
	.tooltabs {
		position: fixed;
		top: 50%;
		right: 30px;
		width: 55px;
		margin-top: -80px;
	}
	
	.tool-tab {
		display: block;
		width: 55px;
		height: 55px;
		margin-bottom: 1px;
		cursor: pointer;
		background-color: #C91623;
		border-radius: 3px 0 0 3px;
		display: table;
	}
	
	.tool-tab .tab-block i {
		display: block;
		font-size: 22px;
		color: #FFFFFF;
		text-align: center;
		/*vertical-align: middle;*/
		/*height: 55px;
	line-height: 55px;*/
	}
	
	.tool-tab .tab-block {
		display: block;
		display: table-cell;
		vertical-align: middle;
	}
	
	.tool-tab .tab-block span {
		display: block;
		font-size: 10px;
		color: #FFFFFF;
		text-align: center;
	}
	
	.tool-tab .tab-block:hover,
	.tool-tab .tab-block:hover i,
	.tool-tab .tab-block:hover span {
		color: #C91623;
		background-color: #FFFFFF;
	}
	/*tool tabs end*/

</style>