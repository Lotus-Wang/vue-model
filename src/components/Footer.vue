<template>
	<footer class="app-footer">
		<div class="footer">
			<div class="foot-content">
				<div class="lianxi">
					<p class="dt">客服电话</p>
					<p class="dainhua">400-660-2350</p>
				</div>
				<div class="lianjie">
					<div class="lj-block">
						<h3>新手指南</h3>
						<p class="detail">购物流程</p>
						<p class="dainhua">会员制度</p>
						<p class="dainhua">常见问题</p>
					</div>
					<div class="lj-block">
						<h3>支付方式</h3>
						<p class="dainhua">线下支付</p>
						<p class="dainhua">支付宝支付</p>
						<p class="dainhua">微信支付</p>
					</div>
					<div class="lj-block">
						<h3>新手指南</h3>
						<p class="detail">购物流程</p>
						<p class="dainhua">会员制度</p>
						<p class="dainhua">常见问题</p>
						<p class="dainhua">会员制度</p>
						<p class="dainhua">常见问题</p>
					</div>
					<div class="lj-block">
						<h3>新手指南</h3>
						<p class="detail">购物流程</p>
						<p class="dainhua">会员制度</p>
						<p class="dainhua">常见问题</p>
					</div>
				</div>
			</div>
			<div class="banquan">
				<p>Copyright &copy;2016 深圳市集思同创网络有限公司 Inc. All Rights Reserved</p>
			</div>
		</div>

	</footer>
</template>

<script>
	export default {
		name: 'app-footer',
	}
</script>

<style scoped>
	.footer {
		width: 100%;
		height: 255px;
		margin-top: 20px;
		background-color: #e8e8e8;
		font-size: 12px;
	}
	
	.bg-white {
		margin-top: 50px;
		background-color: #FFFFFF;
	}
	
	.foot-content {
		width: 1200px;
		margin: 0 auto;
	}
	
	.lianxi {
		float: left;
		width: 350px;
		height: 220px;
		display: -moz-box;
		display: -webkit-box;
		-moz-box-pack: center;
		-webkit-box-pack: center;
		-moz-box-orient: vertical;
		-webkit-box-orient: vertical;
		vertical-align: middle;
		text-align: center;
	}
	
	.lianxi .dt {
		font-size: 14px !important;
		color: #666666 !important;
	}
	
	.lianxi .dainhua {
		font-size: 18px;
		color: #C91623;
		font-weight: 600;
	}
	
	.lianjie {
		float: left;
		width: 850px;
		height: 220px;
	}
	
	.lj-block {
		margin-top: 50px;
		float: left;
		width: 25%;
	}
	
	.lj-block h3 {
		font-size: 14px;
		color: #333333;
		font-weight: 600;
		line-height: 25px;
	}
	
	.lj-block p {
		font-size: 12px;
		color: #999999;
		font-weight: 500;
		line-height: 25px;
		margin-bottom: 0;
	}
	
	.banquan {
		float: left;
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	
	.banquan p {
		height: 35px;
		line-height: 35px;
		font-size: 12px;
		color: #666666;
	}
</style>