<template>
	<div class="gouwuche">
		<div class="hd-title">
			<div class="detail">
				我的进货单
			</div>
			<div class="sanjiao">
				<span> </span>
			</div>
			<a href="index.html" class="more">
				继续购物>>
			</a>
		</div>
		<div class="">
			<table class="table">
				<thead class="">
					<tr>
						<th class="checkBox">
							<input type="checkbox" checked="allchecked" @change="checkedAllBtn(checkedAll)" v-model="checkedAll" class="form-check-input" id="checkAll">
							<label class="form-check-label" for="checkAll">全选</label>
						</th>
						<th class="shopbox">商品名称</th>
						<th class="pricebox">单价</th>
						<th class="numbox">数量</th>
						<th class="pricebox">金额</th>
						<th class="optionbox">操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(shopdatas,index) in shopTableDatas">
						<td class="checkBox">
							<input type="checkbox" @change="checkedRadioBtn(shopdatas)" v-model="shopdatas.checked" class="form-check-input">
						</td>
						<td class="shopbox">
							<span class=" goodName">
								<img class="goodImg" :src="shopdatas.src" />
							</span>
							<span class="col gooddescribe">
								<h2 class="goodname" v-text="shopdatas.name"></h2>
								<p class="goodGary">
									<span class="" v-for="(value,key) in shopdatas.guige">
										<span>{{key}}：</span>
							<span>{{value}}&nbsp;&nbsp;</span>
							</span>
							</p>
							</span>
						</td>
						<td class="pricebox">{{shopdatas.price | moneyFiler}}</td>
						<td class="numbox"><i @click="goodNum(shopdatas,-1)" class="fa  deleteBtn" aria-hidden="true">-</i>
							<input v-model="shopdatas.num" type="text" class="numInput" aria-label="...">
							<i @click="goodNum(shopdatas,1)" class="fa  addBtn" aria-hidden="true">+</i>
							<span id="stock">&nbsp;&nbsp;(库存384件) </span></td>
						<td class="pricebox sumprice">{{shopdatas.price*shopdatas.num | moneyFiler}}</td>
						<td class="optionbox">
							<p class="deletegoods" @click="alertRadio(index)">删除</p>
						</td>
					</tr>

				</tbody>
			</table>
			<div class="tablefooter">
				<span>
					<input type="checkbox" @change="checkedAllBtn(checkedAll)" v-model="checkedAll" class="form-check-input" id="checkAll">
					<label class="form-check-label" for="checkAll">全选</label>
				</span>
				<span class="removeMuch" @click="alertMuch">删除选中商品</span>
				<span class="servicenum">已选择&nbsp;<span class="goodsNum">{{goodsNum}}</span>&nbsp;件商品</span>
				<span class="totalclassPoin">总价：<span class="totalMoneyClass">{{totalMoney | moneyFiler}}</span></span>
				<span class="SettlementBtn">
					结算
				</span>
			</div>
			<!--<div class="">
				<span>
					<input type="checkbox" @change="checkedAllBtn(checkedAll)" v-model="checkedAll" class="form-check-input" id="checkAll">
							<label class="form-check-label" for="checkAll">全选</label>
				</span>
				<span class="removeMuch" @click="alertMuch">删除选中商品</span>
				<span class="servicenum">已选择&nbsp;<span class="goodsNum">{{goodsNum}}</span>&nbsp;件商品</span>
				<span class="totalclassPoin">总价：<span class="totalMoneyClass">{{totalMoney | moneyFiler}}</span></span>
				<span @click="saveData" class="SettlementBtn">结算</span>
			</div>-->
		</div>
	</div>
</template>
<script>
	export default {
		name: 'gouwuche',
		data() {
			return {
				shopTableDatas: [{
						"checked": false,
						"src": require('../assets/tj3.png'),
						"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
						"guige": {
							"颜色": "白色",
							"尺寸": "S",
							"规格": "均码",
							"大小": "28",
						},
						"price": 100,
						"num": 1,
						"saveandremove": true,
						"type": "商品",
					},
					{
						"checked": false,
						"src": require('../assets/tj3.png'),
						"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
						"guige": {
							"颜色": "白色",
							"尺寸": "S",
							"规格": "均码",
							"大小": "28",
						},
						"price": 100,
						"num": 2,
						"saveandremove": true,
						"type": "商品",
					},
					{
						"checked": false,
						"src": require('../assets/tj3.png'),
						"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
						"guige": {
							"颜色": "白色",
							"尺寸": "S",
							"规格": "均码",
							"大小": "28",
						},
						"price": 100,
						"num": 3,
						"saveandremove": true,
						"type": "商品",
					},
					{
						"checked": false,
						"src": require('../assets/tj3.png'),
						"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
						"guige": {
							"颜色": "白色",
							"尺寸": "S"
						},
						"price": 100,
						"num": 4,
						"saveandremove": true,
						"type": "商品",
					},
					{
						"checked": false,
						"src": require('../assets/tj3.png'),
						"name": "GZL-中控离心机净化机",
						"guige": {
							"颜色": "白色",
							"尺寸": "S"
						},
						"price": 600,
						"num": 5,
						"saveandremove": true,
						"type": "商品",
					}
					,
					{
						"checked": false,
						"src": require('../assets/tj3.png'),
						"name": "2018新款时尚百搭真皮女士潮休闲单肩斜跨女",
						"guige": {
							"颜色": "白色",
							"尺寸": "S"
						},
						"price": 100,
						"num": 4,
						"saveandremove": true,
						"type": "商品",
					},
					{
						"checked": false,
						"src": require('../assets/tj3.png'),
						"name": "GZL-中控离心机净化机",
						"guige": {
							"颜色": "白色",
							"尺寸": "S"
						},
						"price": 600,
						"num": 5,
						"saveandremove": true,
						"type": "商品",
					}
				],
				checkedAll: false, //全选状态
				goodNums: 0, //商品或者服务总数
				goodsNum: 0, //商品的数量
				totalMoney: 0, //总价格

			}
		},
		methods: {

			/*商品数量增加减少函数*/
			goodNum: function(item, way) {
				if(way == 1) {
					item.num++;
					this.countTotalMoney()
				} else {
					if(item.num < 2) {
						item.num = 1;
					} else {
						item.num--;
						this.countTotalMoney()
					}

				}
			},
			/*单选函数*/
			checkedRadioBtn: function(tabledatas) {
				this.countTotalMoney()
				/*单选计算商品或服务数量*/
				if(tabledatas.type == "商品" && tabledatas.checked == true) {
					this.goodsNum += 1;
				} else if(tabledatas.type == "服务" && tabledatas.checked == true) {
					this.serviceNum += 1;
				} else if(tabledatas.type == "商品" && tabledatas.checked == false) {
					this.goodsNum -= 1;
				} else if(tabledatas.type == "服务" && tabledatas.checked == false) {
					this.serviceNum -= 1;
				} else {
					console.log("未知错误！")
				}
			},
			/*全选函数*/
			checkedAllBtn: function(checkedAll) {
				var _this = this;
				/*全选计算商品或服务数量*/
				if(checkedAll == true) {
					for(var x in this.shopTableDatas) {
						this.shopTableDatas[x].checked = true;
						_this.goodsNum += 1;
					}
				} else {
					for(var y in this.shopTableDatas) {
						this.shopTableDatas[y].checked = false;
						this.goodsNum = 0;
					}
				}
				_this.countTotalMoney();
			},
			/*提示删除单个商品*/
			alertRadio: function(index) {
				this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
					confirmButtonText: '确定删除',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!',
						callback: this.deletegoods(index)
					});
				}).catch(() => {
					this.$message({
						type: 'warning',
						message: '已取消删除'
					});
				});
			},
			/*提示多个删除函数*/
			alertMuch: function() {
				this.$confirm('此操作将永久删除已选择商品或服务, 是否继续?', '提示', {
					confirmButtonText: '确定删除',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!',
						callback: this.deleteSelectAll()
					});
				}).catch(() => {
					this.$message({
						type: 'warning',
						message: '已取消删除'
					});
				});
			},
			/*删除单个选中函数*/
			deletegoods: function(index) {
				console.log(index);
				this.shopTableDatas.splice(index, 1);
				this.countTotalMoney();
			},
			/*删除多个选中函数*/
			deleteSelectAll: function() {
				for(var i = this.shopTableDatas.length - 1; i >= 0; i--) {
					if(this.shopTableDatas[i].checked == true) {
						this.shopTableDatas.splice(i, 1);
					}
				}
				this.countTotalMoney();
			},
			/*计算商品总价函数*/
			countTotalMoney: function() {
				var _this = this;
				_this.totalMoney = 0;
				this.shopTableDatas.forEach(function(item, index) {
					if(item.checked == true) {
						_this.totalMoney += item.num * item.price
					}
				})
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

<style scoped>
	
	.gouwuche {
		width: 1200px;
		margin: 0 auto;
		padding: 20px 0 9px;
	}
	
	.hd-title {
		width: 100%;
		height: 40px;
		margin-top: 20px;
		border-bottom: 3px solid #C91623;
	}
	
	.detail {
		float: left;
		width: 168px;
		height: 40px;
		line-height: 40px;
		background: #C91623;
		font-size: 16px;
		font-weight: 600;
		color: #FFFFFF;
		text-align: center;
	}
	
	.sanjiao {
		float: left;
		width: 90px;
		height: 40px;
	}
	
	.sanjiao span {
		display: block;
		width: 0;
		height: 0;
		border: 20px solid #C91623;
		border-right: 20px solid transparent;
		border-top: 20px solid transparent;
	}
	
	.more {
		float: right;
		line-height: 40px;
		font-size: 14px;
		color: #C91623;
	}
	
	.form-check-input {
		position: absolute;
		margin-top: .3rem;
		margin-left: 0rem;
	}
	
	.form-check-label {
		margin-bottom: 0;
		margin-left: 1.35rem;
	}
	
	.table thead th {
		vertical-align: bottom;
		border-bottom: none;
	}
	
	.table-bordered td,
	.table-bordered th {
		border: none;
	}
	
	.table-bordered tr {
		/*border-bottom: 1px solid #E8E8E8;*/
	}
	
	table {
		border: none;
	}
	
	table tr {
		background: #FFFFFF;
	}
	
	table tr th,
	table tr td {
		min-height: 26px;
		line-height: 26px;
		font-size: 14px;
		color: #666666;
		font-weight: 200;
		vertical-align: middle;
		border: none;
		border-bottom: 1px solid #E8E8E8 !important;
		padding: 1rem;
	}
	
	table tr th.checkBox,
	table tr td.checkBox {
		width: 6% !important;
	}
	
	table tr th.shopbox,
	table tr td.shopbox {
		width: 40% !important;
	}
	
	table tr th.pricebox,
	table tr td.pricebox {
		width: 10%;
	}
	
	table tr th.numbox,
	table tr td.numbox {
		width: 15% !important;
		text-align: center;
	}
	
	table tr th.optionbox,
	table tr td.optionbox {
		width: 6% !important;
		text-align: center;
	}
	
	table tr th input,
	table tr td input {
		display: inline-block;
		position: relative;
		border: 1px solid #E8E8E8;
		border-radius: 4px;
		box-sizing: border-box;
		width: 16px;
		height: 16px;
		background-color: #fff !important;
		z-index: 1;
	}
	
	table tr td input {
		margin-top: -8px !important;
		vertical-align: middle;
	}
	
	.goodName {
		display: inline-block;
		vertical-align: top;
	}
	
	.goodImg {
		width: 100px;
		height: 100px;
		padding: 5px;
		border: 1px solid #E8E8E8;
	}
	
	.goodImg img {
		max-width: 100px;
	}
	
	.gooddescribe {
		display: inline-block;
		vertical-align: top;
		margin-left: 10px;
		padding: 0;
		width: 78%;
		overflow: hidden;
	}
	
	.gooddescribe .goodname {
		font-size: 14px;
		color: #333333;
		font-weight: 400;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.gooddescribe .goodGary span {
		color: #999999;
	}
	
	table tr th.pricebox,
	table tr td.pricebox {
		text-align: center;
		color: #666666;
		position: relative;
		min-height: 20px;
		line-height: 20px;
		font-size: 14px;
		vertical-align: middle;
	}
	
	.deleteBtn {
		display: inline-block;
		cursor: pointer;
		height: 30px;
		line-height: 30px;
		background: #FFFFFF;
		border: 1px solid #E8E8E8;
		padding: 0px 7px;
		border-right: 0px;
	}
	
	.numInput {
		width: 50px;
		height: 30px;
		font-size: 13px;
		color: #666666;
		margin-left: -3px;
		border: 1px solid #E8E8E8;
		text-align: center;
		margin-top: -3px !important;
		position: relative;
		outline: 0;
	}
	
	.addBtn {
		margin-left: -4px;
		display: inline-block;
		cursor: pointer;
		height: 30px;
		background: #FFFFFF;
		line-height: 30px;
		border: 1px solid #E8E8E8;
		padding: 0px 5px;
		border-left: 0px;
	}
	
	.addBtn,
	.deleteBtn {
		color: #666666;
		font-size: 12px;
		margin-top: 4px;
		!important: ;
	}
	
	table tr td.pricebox table tr td.pricebox {
		color: #999999;
	}
	
	table tr td.sumprice {
		font-size: 16px;
		font-weight: bold;
		color: #C91623;
	}
	
	table tr td.optionbox {
		font-size: 14px;
		color: #666666;
	}
	
	table tr td.optionbox:hover {
		font-size: 14px;
		color: #C91623;
	}
	
	table tr td.optionbox p {
		padding: 0;
		margin: 0;
	}
	
	
	
.tablefooter {
	position: fixed;
	bottom: 0px;
	z-index: 9999;
	width: 1200px;
	margin: 0 auto;
	background: #FFFFFF;
}

.tablefooter {
	height: 60px;
	line-height: 60px;
	border: 1px solid #EDEDED;
	margin-top: 20px;
	margin-bottom: 30px;
}
.removeMuch {
    position: absolute;
    left: 90px;
    cursor: pointer;
    color: #999999;
    font-size: 14px;
}
.removeMuch:hover{
	color: #C91623;
}
.servicenum {
    position: absolute;
    right: 25%;
    color: #999999;
    font-size: 14px;
}
.totalclassPoin {
	font-size: 14px;
    color: #999999;
    position: absolute;
    right: 140px;
}
.tablefooter input {
		display: inline-block;
		position: relative;
		border: 1px solid #E8E8E8;
		border-radius: 4px;
		box-sizing: border-box;
		width: 16px;
		height: 16px;
		background-color: #fff !important;
		z-index: 1;
		margin-left: 15px;
	}
	.tablefooter label{
		margin-left: 0;
		font-size: 14px;
		color: #999999;
	}
	table tr td input {
		margin-top: -8px !important;
		vertical-align: middle;
	}
.SettlementBtn {
	height: 60px;
	width: 100px;
	color: white;
	background: #C91623;
	display: inline-block;
	text-align: center;
	float: right;
	position: relative;
	font-size: 18px;
	margin-top: -1px;
	cursor: pointer;
}

.totalMoneyClass {
	color: #C91623;
	font-weight: 500;
	font-size: 20px;
}

.goodsNum {
	color: #C91623;
}

.is-null {
	font-weight: 500;
	color: #ccc;
	height: 300px;
}

td.is-null {
	border: 0px;
}

	
</style>