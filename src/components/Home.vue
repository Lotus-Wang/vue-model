<template>
	<div class="home">
		<!--screen-box-start-->
		<div class="screen-box">
			<div class="screen-center">
				<div class="left-l">
					<ul>
						<li v-for="menudata in menuList">
							<div class="title">
								<a href="#">{{menudata.title}}</a>
								<span class="iconfont icon-xiangyou1"> </span>
							</div>
							<a href="#">{{menudata.classify1}}</a>
							<a href="#">{{menudata.classify2}}</a>
							<a href="#">{{menudata.classify3}}</a>
						</li>
					</ul>
				</div>
				<div class="right-r">
					<div class="right-geren">
						<div class="tx">
							<a href="#">
								<img src="../assets/toux.png" />
							</a>
						</div>
						<span>Hi<strong>你好</strong></span>
						<div class="gongneng">
							<div class="gn-mg">
								<a href="#" class="login">登录</a>
								<a href="#" class="reg">免费注册</a>
							</div>
						</div>
						<div class="">
							<span id="">
								
							</span>
							<span id="">
								
							</span>
						</div>
					</div>
					<div class="right-gonggao">
						<ul class="title">
							<li class="select">
								<a href="#">商城公告</a>
							</li>
						</ul>
						<div class="gonggaoCont">

							<ul id="vueBox" :class="{marquee_top:animate}">
								<li v-for="(item, index) in marqueeList">
									<a href="#">{{item.describe}}</a>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</div>
		</div>
		<!--专区-->
		<div class="sp-zhuanqu">
			<a href="shangpinfenlei.html" v-for="prefecture in prefectureList" class="sp-zqblock">
				<img :src="prefecture.src" />
				<div class="bg"> </div>
				<div class="title">
					<h3>{{prefecture.title}}</h3>
					<p>{{prefecture.describe}}</p>
				</div>
			</a>
			<!--<div class="clearfix"> </div>-->
		</div>
		<!--专区推荐-->
		<!--one-->
		<div class="sp-tuijiang" style="height: 422px;">
			<ul class="title">
				<h3>热卖推荐</h3>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
			</ul>
			<div class="gonggaoCont">
				<div class="tuijiang-l">
					<img src="../assets/zqtj1.png" />
				</div>
				<div class="tuijiang-r">
					<a href="#" class="m-block" title="时尚商务机械手表">
						<div class="tupian">
							<img src="../assets/tj1.png" />
						</div>
						<div class="title">
							<h3>时尚商务机械手表</h3>
							<p>精选优质牛皮，帅气有型</p>
						</div>
					</a>
					<a href="#" class="m-block" title="时尚商务机械手表">
						<div class="title">
							<h3>时尚商务机械手表</h3>
							<p>精选优质牛皮，帅气有型</p>
						</div>
						<div class="tupian">
							<img src="../assets/tj3.png" />
						</div>
					</a>
					<a href="#" class="m-block" title="时尚商务机械手表">
						<div class="tupian">
							<img src="../assets/tj3.png" />
						</div>
						<div class="title">
							<h3>时尚商务机械手表</h3>
							<p>精选优质牛皮，帅气有型</p>
						</div>
					</a>
					<a href="#" class="m-block" title="时尚商务机械手表">
						<div class="title">
							<h3>时尚商务机械手表</h3>
							<p>精选优质牛皮，帅气有型</p>
						</div>
						<div class="tupian">
							<img src="../assets/zqtj2.png" />
						</div>
					</a>
				</div>
			</div>
		</div>
		<!--one end-->
		<!--two-->
		<div class="sp-tuijiang" >
			<ul class="title">
				<h3>热卖推荐</h3>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
			</ul>
			<div class="gonggaoCont">
				<div class="tuijiang-l1">
					<img src="../assets/zqtj.png" />
				</div>
				<div class="tuijiang-m">
					<ul class="tuijiang">
						<li v-for="shopcarList in shopcartdatas">
							<a href="#" class="shangpin">
								<div class="img-block">
									<img  :src="shopcarList.src" />
								</div>
								<p class="detail" v-text="shopcarList.name"></p>
								<p class="price">{{shopcarList.price | moneyFiler}}</p>
							</a>
						</li>
						

					</ul>
				</div>
			</div>
		</div>
		<!--two end-->
		<!--three-->
		<div class="sp-tuijiang">
			<ul class="title">
				<h3>热卖推荐</h3>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
			</ul>
			<div class="gonggaoCont">
				<div class="tuijiang-l1">
					<img src="../assets/zqtj.png" />
				</div>
				<div class="tuijiang-m">
					<ul class="tuijiang">
						<li v-for="shopcarList in shopcartdatas">
							<a href="#" class="shangpin">
								<div class="img-block">
									<img  :src="shopcarList.src" />
								</div>
								<p class="detail" v-text="shopcarList.name"></p>
								<p class="price">{{shopcarList.price | moneyFiler}}</p>
							</a>
						</li>
						

					</ul>
				</div>
			</div>
		</div>
		<!--three end-->
		<!--fore-->
		<div class="sp-tuijiang">
			<ul class="title">
				<h3>热卖推荐</h3>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
				<li>
					<a href="#">商城公告</a>
				</li>
			</ul>
			<div class="gonggaoCont">
				<div class="tuijiang-l1">
					<img src="../assets/zqtj.png" />
				</div>
				<div class="tuijiang-m">
					<ul class="tuijiang">
						<li v-for="shopcarList in shopcartdatas">
							<a href="#" class="shangpin">
								<div class="img-block">
									<img  :src="shopcarList.src" />
								</div>
								<p class="detail" v-text="shopcarList.name"></p>
								<p class="price">{{shopcarList.price | moneyFiler}}</p>
							</a>
						</li>
						

					</ul>
				</div>
			</div>
		</div>
		<!--fore end-->
	
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				menuList: [{
						title: '女装',
						classify1: '衬衫',
						classify2: '连衣裙',
						classify3: '牛仔裤'
					},
					{
						title: '男装',
						classify1: '衬衫',
						classify2: '裙子',
						classify3: '西装'
					},
					{
						title: '鞋子',
						classify1: '跑鞋',
						classify2: '凉鞋',
						classify3: '高跟鞋'
					},
					{
						title: '女装',
						classify1: '衬衫',
						classify2: '连衣裙',
						classify3: '牛仔裤'
					},
					{
						title: '男装',
						classify1: '衬衫',
						classify2: '裙子',
						classify3: '西装'
					},
					{
						title: '鞋子',
						classify1: '跑鞋',
						classify2: '凉鞋',
						classify3: '高跟鞋'
					},
					{
						title: '女装',
						classify1: '衬衫',
						classify2: '连衣裙',
						classify3: '牛仔裤'
					},
					{
						title: '男装',
						classify1: '衬衫',
						classify2: '裙子',
						classify3: '西装'
					},
					{
						title: '鞋子',
						classify1: '跑鞋',
						classify2: '凉鞋',
						classify3: '高跟鞋'
					}
				],
				marqueeList: [{
						describe: '1阿里巴巴与星巴克达成全面战略合作',
						amount: '10'
					},
					{
						describe: '2阿里巴巴与星巴克达成全面战略合作阿里巴巴与星巴克达成全面战略合作',
						amount: '20'
					},
					{
						describe: '3阿里巴巴与星巴克达成全面战略合作',
						amount: '30'
					},
					{
						describe: '4阿里巴巴与星巴克达成全面战略合作阿里巴巴与星巴克达成全面战略合作',
						amount: '40'
					}
				],
				animate: false,
				marqueeList: [{
						describe: '1阿里巴巴与星巴克达成全面战略合作',
						amount: '10'
					},
					{
						describe: '2阿里巴巴与星巴克达成全面战略合作阿里巴巴与星巴克达成全面战略合作',
						amount: '20'
					},
					{
						describe: '3阿里巴巴与星巴克达成全面战略合作',
						amount: '30'
					},
					{
						describe: '4阿里巴巴与星巴克达成全面战略合作阿里巴巴与星巴克达成全面战略合作',
						amount: '40'
					}
				],
				prefectureList: [{
						url: 'shangpinfenlei.html',
						src: require('../assets/tj3.png'),
						title: '新品专区',
						describe: '淘你生活最时尚',
					},
					{
						url: 'shangpinfenlei.html',
						src: require('../assets/tj1.png'),
						title: '新品专区',
						describe: '淘你生活最时尚',
					},
					{
						url: 'shangpinfenlei.html',
						src: require('../assets/tj3.png'),
						title: '新品专区',
						describe: '淘你生活最时尚',
					},
					{
						url: 'shangpinfenlei.html',
						src: require('../assets/tj1.png'),
						title: '新品专区',
						describe: '淘你生活最时尚',
					}
				],
				shopcartdatas: [{
					"checked": false,
					"src": require("../assets/zqtj3.png"),
					"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
					"color": "白色",
					"size": "S",
					"price": 123,
					"num": 1,
					"saveandremove": true,
					"type": "商品",
				},
				{
					"checked": false,
					"src": require("../assets/zqtj3.png"),
					"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
					"color": "白色",
					"size": "S",
					"price": 123,
					"num": 1,
					"saveandremove": true,
					"type": "商品",
				},
				{
					"checked": false,
					"src": require("../assets/zqtj3.png"),
					"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
					"color": "白色",
					"size": "S",
					"price": 123,
					"num": 1,
					"saveandremove": true,
					"type": "商品",
				},
				{
					"checked": false,
					"src": require("../assets/zqtj3.png"),
					"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
					"color": "白色",
					"size": "S",
					"price": 123,
					"num": 1,
					"saveandremove": true,
					"type": "商品",
				},
				{
					"checked": false,
					"src": require("../assets/zqtj3.png"),
					"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
					"color": "白色",
					"size": "S",
					"price": 123,
					"num": 1,
					"saveandremove": true,
					"type": "商品",
				},
				{
					"checked": false,
					"src": require("../assets/zqtj3.png"),
					"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
					"color": "白色",
					"size": "S",
					"price": 123,
					"num": 1,
					"saveandremove": true,
					"type": "商品",
				},]

			}
		},
		created: function() {
			setInterval(this.showMarquee, 2000)
		},
		methods: {
			showMarquee: function() {
				this.animate = true;
				setTimeout(() => {
					this.marqueeList.push(this.marqueeList[0]);
					this.marqueeList.shift();
					this.animate = false;
				}, 500)
			},
		},
		/*金额过滤器*/
		filters: {
			moneyFiler: function(value) {

				return "￥" + value.toFixed(2);
			}
		},

	}
</script>

<style>
	/*screen-box start*/
	
	.screen-box {
		width: 1200px;
		height: 500px;
		margin: 0 auto;
		position: relative;
		/*border: 1px solid #3385FF;*/
	}
	/*幻灯片 start*/
	
	.mySlides {
		display: none
	}
	
	.slideshow-container {
		max-width: 100%;
		position: relative;
		margin: auto;
	}
	
	.prev,
	.next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -22px;
		padding: 16px;
		color: white;
		font-weight: bold;
		font-size: 18px;
		transition: 0.6s ease;
		border-radius: 0 3px 3px 0;
	}
	
	.next {
		right: 0;
		border-radius: 3px 0 0 3px;
	}
	
	.prev:hover,
	.next:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}
	
	.text {
		color: #f2f2f2;
		font-size: 15px;
		padding: 8px 12px;
		position: absolute;
		bottom: 8px;
		width: 100%;
		text-align: center;
	}
	
	.numbertext {
		color: #f2f2f2;
		font-size: 12px;
		padding: 8px 12px;
		position: absolute;
		top: 0;
	}
	
	.boted {
		text-align: center;
		position: absolute;
		bottom: 30px;
		left: 50%;
		margin-left: -36px;
	}
	
	.dot {
		cursor: pointer;
		height: 10px;
		width: 10px;
		margin: 0 2px;
		/*background-color: #bbb;*/
		border-radius: 50%;
		display: inline-block;
		transition: background-color 0.6s ease;
	}
	
	.active,
	.dot:hover {
		/*background-color: #C91623;*/
	}
	/* 淡出动画 */
	
	.fade {
		-webkit-animation-name: fade;
		-webkit-animation-duration: 1.5s;
		animation-name: fade;
		animation-duration: 1.5s;
	}
	
	@-webkit-keyframes fade {
		from {
			opacity: .4
		}
		to {
			opacity: 1
		}
	}
	
	@keyframes fade {
		from {
			opacity: .4
		}
		to {
			opacity: 1
		}
	}
	/*幻灯片 end*/
	
	.screen-center {
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -600px;
		width: 100%;
		height: 500px;
		z-index: 100;
	}
	
	.left-l {
		display: inline-block;
		width: 210px;
		height: 500px;
		float: left;
		background: #FFFFFF;
		overflow: hidden;
	}
	
	.left-l ul {
		/*border: 1px solid #ff5000;*/
		border-top: none;
		padding-top: 5px;
		padding-bottom: 3px;
		font-size: 12px;
		color: #666666;
	}
	
	.left-l ul li {
		height: 62px;
		/*width: 144px;*/
		line-height: 20px;
		padding-left: 25px;
		padding-right: 19px;
		position: relative;
		overflow: hidden;
	}
	
	.left-l ul li a {
		color: #666;
		text-align: center;
		padding: 0 3px;
	}
	
	.left-l ul li:hover,
	.left-l ul li:hover a,
	.left-l ul li a:hover {
		background: #ffe5e5;
	}
	
	.left-l ul li a:hover {
		color: #C91623;
	}
	
	.left-l ul li .title a {
		line-height: 35px;
		font-size: 14px;
		color: #666666;
		font-weight: 600;
	}
	
	.left-l ul li .title a:hover {
		color: #C91623;
	}
	
	.left-l ul li span {
		position: absolute;
		right: 10px;
		top: 0;
		color: #666666;
		font-size: 14px;
	}
	/*col-right*/
	
	.right-r {
		float: right;
		width: 270px;
		height: 500px;
		background: rgba(255, 255, 255, 0.7);
	}
	
	.right-geren {
		width: 270px;
		height: 195px;
		text-align: center;
		padding: 3px 0 10px 0;
	}
	
	.right-geren .tx {
		width: 270px;
		height: 65px;
		margin: 40px 0 0 0;
	}
	
	.right-geren .tx a {
		display: block;
		margin: 0 auto;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	
	.right-geren .tx a img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	
	.right-geren span {
		display: block;
		line-height: 17px;
		height: 17px;
		font-size: 12px;
		color: #333;
		text-align: center;
	}
	
	.gongneng {
		height: 40px;
		overflow: hidden;
		margin-top: 2px;
		/*padding-left: 15px;*/
	}
	
	.gongneng .gn-mg {
		height: 25px;
		margin-top: 8px;
	}
	
	.gongneng .gn-mg a {
		display: inline-block;
		width: 85px;
		line-height: 25px;
		height: 25px;
		text-align: center;
		font-size: 14px;
		color: #666;
		font-weight: 700;
		/*background-image: linear-gradient(to right, #ff5000 0, #ff6f06 100%);*/
		/*background-repeat: repeat-x;*/
		/*border-radius: 4px;*/
	}
	
	.gongneng .gn-mg a.login {
		color: #fff;
		background: #C91623;
	}
	
	.gongneng .gn-mg a.reg {
		color: #C91623;
		background: #FFFFFF;
	}
	
	.right-gonggao {
		height: 98px;
		padding-top: 10px;
		width: 270px;
	}
	
	.right-gonggao ul {
		width: 270px;
		position: relative;
		height: 22px;
		margin-top: 4px;
		overflow: hidden;
		margin-right: -2px;
		/*padding: 0 8px;*/
	}
	
	.right-gonggao ul.title {
		border-bottom: 1px solid #ccc;
	}
	
	.right-gonggao ul li {
		display: inline-block;
		line-height: 20px;
		width: 65px;
		/*text-align: center;*/
		margin: 0 11px;
	}
	
	.right-gonggao ul li.select {
		padding: 0;
		font-weight: 700;
		border-bottom: 2px solid #C91623;
		z-index: 1000;
	}
	
	.right-gonggao ul li a {
		font-size: 12px;
		color: #333333;
		text-align: center;
		line-height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		/*font-weight: 700;*/
	}
	
	.gonggaoCont ul {
		padding: 0;
		margin: 0;
		/*margin: 0 12px;*/
		height: 50px;
		overflow: hidden;
		padding-top: 9px;
		padding-bottom: 6px;
	}
	
	.gonggaoCont ul li {
		float: left;
		line-height: 25px;
		height: 25px;
		width: 248px;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.gonggaoCont ul li a {
		text-align: left;
	}
	
	.gonggaoCont ul li:first-child a {
		color: #FF5000;
	}
	
	.marquee_top {
		transition: all 0.5s;
		margin-top: -30px
	}
	/*screen-box-start*/
	/*content start*/
	
	.clearfix {
		clear: both;
	}
	
	.sp-content {
		width: 100%;
		background: #ededed;
	}
	
	.sp-box {
		width: 1190px;
		overflow: hidden;
	}
	
	.sp-zhuanqu {
		width: 1200px;
		height: 220px;
		margin: 0 auto;
		padding-top: 15px;
	}
	.sp-zhuanqu a:last-child{
		margin-right: 0;
	}
	.sp-zqblock {
		float: left;
		width: 291px;
		height: 220px;
		margin-right: 12px;
		background: #3C3C3C;
		position: relative;
		background: rgba(0, 0, 0, 0.5);
	}
	
	.sp-zqblock .bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 291px;
		height: 220px;
		background: rgba(0, 0, 0, 0.5);
	}
	
	.sp-zqblock .title {
		position: absolute;
		width: 280px;
		height: 150px;
		top: 50%;
		left: 50%;
		margin-left: -140px;
		margin-top: -75px;
		display: -moz-box;
		display: -webkit-box;
		-moz-box-pack: center;
		-webkit-box-pack: center;
		-moz-box-orient: vertical;
		-webkit-box-orient: vertical;
		vertical-align: middle;
		text-align: center;
	}
	
	.sp-zqblock .title h3 {
		font-size: 20px;
		color: #FFFFFF;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	
	.sp-zqblock .title p {
		font-size: 13px;
		line-height: 32px;
		color: #FFFFFF;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		margin-bottom: 0 !important;
	}
	
	.sp-tuijiang {
		width: 1200px;
		height: 742px;
		margin: 0 auto;
		margin-top: 55px;
	}
	
	.sp-tuijiang ul.title {
		width: 100%;
		height: 35px;
		line-height: 35px;
		overflow: hidden;
	}
	
	.sp-tuijiang ul.title h3 {
		float: left;
		font-size: 22px;
		line-height: 35px;
		color: #333333;
		font-weight: 600;
	}
	
	.sp-tuijiang ul.title li {
		float: right;
		line-height: 60px;
		vertical-align: bottom;
		text-align: center;
		margin: 0 9px;
		/*font-weight: 600;*/
	}
	
	ul.title li a {
		font-size: 13px;
		color: #666666;
		text-align: center;
		line-height: 20px;
	}
	
	ul.title li a:hover {
		color: #C91623;
	}
	
	.tuijiang-l {
		float: left;
		width: 400px;
		height: 372px;
		background: #999999;
	}
	
	.tuijiang-l1 {
		float: left;
		width: 300px;
		height: 692px;
		background: #999999;
	}
	
	.tuijiang-r {
		float: left;
		width: 800px;
		height: 372px;
		background: #FFFFFF;
	}
	
	.tuijiang-r .m-block {
		float: left;
		width: 400px;
		height: 187px;
		box-sizing: border-box;
		border-right: 1px solid #ededed;
		border-bottom: 1px solid #ededed;
		/*background: #FFFFFF;*/
		/*padding: 10px;*/
	}
	
	.m-block .tupian {
		float: left;
		width: 185px;
		height: 185px;
		/*padding:5px 10px;*/
		display: -moz-box;
		display: -webkit-box;
		-moz-box-pack: center;
		-webkit-box-pack: center;
		-moz-box-orient: vertical;
		-webkit-box-orient: vertical;
		vertical-align: middle;
		text-align: center;
	}
	
	.m-block .tupian img {
		width: 80%;
		height: 80%;
	}
	
	.m-block .title {
		float: left;
		width: 214px;
		height: 186px;
		background: #FFFFFF;
		display: -moz-box;
		display: -webkit-box;
		-moz-box-pack: center;
		-webkit-box-pack: center;
		-moz-box-orient: vertical;
		-webkit-box-orient: vertical;
		vertical-align: middle;
		text-align: center;
	}
	
	.m-block .title h3 {
		font-size: 16px;
		color: #333333;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	
	.m-block .title p {
		font-size: 12px;
		line-height: 32px;
		color: #666666;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	
	.tuijiang-m {
		float: left;
		/*width: 800px;*/
		/*height: 372px;*/
		/*background: #C91623;*/
	}
	
	.tuijiang-m ul.tuijiang {
		width: 900px;
		height: 692px;
		float: left;
		padding: 0;
		margin-bottom: 12px !important;
	}
	
	.tuijiang-m ul.tuijiang li {
		display: inline-block;
		background: #FFFFFF;
		width: 288px;
		height: 340px;
		margin-left: 12px;
		margin-bottom: 12px;
		box-sizing: border-box;
	}
	
	.tuijiang-m ul.tuijiang li a {
		display: block;
		background: #FFFFFF;
		width: 288px;
		height: 340px;
		border: 1px solid #ededed;
	}
	
	.tuijiang-m ul.tuijiang li a .img-block {
		box-sizing: border-box;
		width: 286px;
		height: 248px;
		overflow: hidden;
	}
	
	.tuijiang-m ul.tuijiang li a .img-block img {
		width: 286px;
	}
	
	.tuijiang-m ul.tuijiang li a p {
		padding: 0 15px;
	}
	
	.tuijiang-m ul.tuijiang li a p.detail {
		font-size: 13px;
		color: #666666;
		padding-top: 6px;
		line-height: 23px;
		height: 50px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-bottom: 0;
	}
	
	.tuijiang-m ul.tuijiang li a p.price {
		font-size: 18px;
		color: #C91623;
		height: 36px;
		line-height: 36px;
	}
	
	.tuijiang-m ul.tuijiang li a:hover {
		border: 1px solid #C91623;
	}
</style>