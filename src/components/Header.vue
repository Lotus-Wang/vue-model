<link rel="stylesheet" type="text/css" href="../icon/inon_taobao/iconfont.css" />
<link rel="stylesheet" type="text/css" href="../icon/inon_taobao/iconface1.css" />
<template>
	<header class="app-header">
		<div class="head">
			<nav class="navbar navbar-expand-lg navbar-light">
				<ul class="navbar-nav">
					<li>
						<router-link to="/" class="nav-link">返回首页</router-link>
					</li>
					<li class="nav_menu china">
						<span>您好！欢迎光临商城</span>
					</li>
					<li>
						<router-link to="/login" class="nav-link">登录</router-link>
					</li>
					<li class="nav_menu china">
						<span>|</span>
					</li>
					<li>
						<router-link to="/reg" class="nav-link">注册</router-link>
					</li>
				</ul>
				<ul class="navbar-nav ml-auto">
					<li>
						<router-link to="/gouwuche" class="nav-link">我的进货单</router-link>
					</li>
					<li class="nav_menu china">
						<span>|</span>
					</li>
					<li>
						<router-link to="/menber" class="nav-link">会员中心</router-link>
					</li>
					<li class="nav_menu china">
						<span>|</span>
					</li>
					<li>
						<router-link to="/news" class="nav-link">消息通知</router-link>
					</li>
					<li class="nav_menu china">
						<span>|</span>
					</li>
					<li>
						<router-link to="/help" class="nav-link">帮助中心</router-link>
					</li>
					<li class="nav_menu china">
						<span>|</span>
					</li>
					<li>
						<router-link to="/wode" class="nav-link">我的</router-link>
					</li>
				</ul>
			</nav>
		</div>
		<div class=" search">
			<div class="row">
				<div class="col-3">
					<div class="sc_l">
						<img src="../assets/logo.png" />
					</div>
				</div>
				<div class="col-9">
					<div class="sc_r" >
						<span class="jindublock goon">
							<span class="yuan"> </span>
							<span class="xian" > </span>
							<p class="jindutip">进度</p>
						</span>
						<span class="jindublock">
							<span class="xian"> </span>
							<span class="yuan"> </span>
							<span class="xian"> </span>
							<p class="jindutip tiptwo">进度</p>
						</span>
						<span class="jindublock">
							<span class="xian"> </span>
							<span class="yuan"> </span>
							<p class="jindutip tipthree">进度</p>
						</span>
					</div>
				</div>
				<!--<div class="col-9 my-seach-box">
					<nav class="navbar navbar-light bg-light my-seach">
						<form class="form-inline">
							<input class="form-control" type="search" placeholder="搜索" aria-label="搜索">
							<button class="btn " type="submit">搜索</button>
						</form>
					</nav>
					<div class="sc_menu">
						<ul>
							<li v-for="searchList in searchlist">
								<a href="#" @click="searchList.show=!searchList.show" :class="{select:searchList.show}">{{searchList.name}}</a>
							</li>
						</ul>
					</div>
				</div>-->
			</div>
		</div>
		<!--search nav start-->
		<div class="screen-nav">
			<div class="screen-con">
				<h2>全部商品分类</h2>
			</div>
		</div>
		<!--search nav end-->

	</header>

</template>

<script>
	export default {
		name: 'app-header',
		data() {
			return {
				searchlist: [{
						name: '女装',
						show: false,
					},
					{
						name: '男装',
						show: false,
					},
					{
						name: '春装',
						show: false,
					},
					{
						name: '鞋子',
						show: false,
					}, {
						name: '女装',
						show: false,
					},
					{
						name: '男装',
						show: false,
					},
					{
						name: '春装',
						show: false,
					},
					{
						name: '鞋子',
						show: false,
					}
				],
			}

		}
		
	}
</script>
<style>
	.app-header {
		background: #FFFFFF;
	}
	
	.head {
		width: 100%;
		height: 30px;
		background: #f5f5f5;
		border-bottom: 1px solid #eee;
	}
	
	.navbar {
		width: 1200px;
		margin: 0 auto;
		padding: 0rem 1rem;
	}
	
	.navbar .navbar-nav li {
		height: 30px;
	}
	
	.navbar .navbar-nav li a,
	.navbar .navbar-nav li span {
		padding: 0rem 0.3rem;
		margin: 0;
		font-size: 12px;
		font-weight: 400;
		line-height: 30px;
		color: #999999;
	}
	/*search start*/
	
	.search {
		width: 1200px;
		margin: 0 auto;
		padding: 20px 0 9px;
	}
	
	.my-seach-box {
		box-sizing: border-box;
		padding-left: 100px;
	}
	
	.my-seach {
		margin: 0 !important;
		padding: 0;
		width: 627px;
		height: 62px;
		margin: 0 auto;
		margin-top: 15px;
	}
	
	.form-inline {
		width: 627px;
		height: 62px;
		margin: 0 auto;
		margin-top: 15px;
	}
	
	.form-control {
		width: 492px !important;
		border: 1px solid #e8e8e8;
		height: 38px;
		overflow: hidden;
		border-radius: 0 !important;
	}
	
	.form-control:focus {
		color: #333333;
		background-color: #fff;
		border-color: #e8e8e8;
		outline: 0;
		box-shadow: 0 0 0 0rem !important;
	}
	
	.btn {
		position: absolute;
		right: 57px;
		top: 20px;
		width: 78px;
		height: 38px;
		z-index: 1000;
		text-align: center;
		border-radius: 0 !important;
		background: #C91623;
		font-size: 16px;
		color: #FFFFFF;
	}
	
	.btn button:link,
	.btn button:active {
		outline: none;
		border: none;
	}
	
	.btn:focus {
		outline: 0;
		box-shadow: none;
	}
	
	.sc_menu {
		width: 571px;
	}
	
	.sc_menu ul li {
		display: inline-block;
		line-height: 23px;
	}
	
	.sc_menu ul li a {
		font-size: 12px;
		color: #999999;
		margin-right: 15px;
		line-height: 23px;
	}
	
	.sc_menu ul li a.select,
	.sc_menu ul li a:hover {
		color: #C91623;
	}
	
	.sc_menu ul li.more {
		float: right;
		line-height: 23px;
	}
	
	.sc_menu ul li.more i {
		margin-top: 2px;
		line-height: 23px;
		font-size: 12px;
	}
	/*jindu*/
	.sc_r{
		float: right;margin-top: 20px;
	}
	.jindublock{
		vertical-align: middle;display: inline-block;margin: 0 5px;
	}
	.yuan{
		display: inline-block; background: #bfcbd9;width: 12px;height: 12px;border-radius: 50%;
	}
	.xian{
		display: inline-block; width: 85px;height: 2px; background: #bfcbd9;vertical-align: middle;
	}
	.tiptwo{
		text-align: center;
	}
	.tipthree{
		text-align: right;
	}
	.jindutip{
		color: #bfcbd9;
	}
	.goon .yuan{
		background: #C91623;
	}
	.goon .xian{
		background: #C91623;
	}
	.goon .jindutip{
		color: #C91623;
	}
	/*jindu end*/
	/*search end*/
	/*screen-nav start*/
	
	.screen-nav {
		width: 100%;
		background: #FFFFFF;
	}
	
	.screen-con {
		width: 1200px;
		height: 40px;
		margin: 0 auto;
	}
	
	.screen-con h2 {
		display: inline-block;
		height: 40px;
		line-height: 40px;
		width: 210px;
		font-size: 15px;
		color: #FFFFFF;
		text-align: center;
		background: #C91623;
	}
	/*
.screen-con ul {
	display: inline-block;
	height: 40px;
	line-height: 40px;
	font-size: 16px;
}

.screen-con ul li {
	display: inline-block;
	padding: 0 4px;
	margin: 0 3px;
	color: #ddd;
}

.screen-con ul li a {
	color: #FFFFFF;
	font-weight: 600;
	text-align: center;
	line-height: 40px;
	font-size: 15px;
}*/
	/*search nav end*/
</style>