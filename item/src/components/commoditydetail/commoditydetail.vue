
<template>
<div id="Comdetail">
	
	<div class="wrap">
		<div class="show">
			<img src="../../assets/show1.jpg">
			
			<div class="showmeng"></div>
			<div class="btnsss">
  				<a id="back" class="mui-action-back mui-icon" @click="back();">&lt;</a>
				<a ><img id="share" src="../../assets/share.png" v-on:click="xian()"></a>
				<a ><span id="collect" class="mui-icon mui-icon-star"></span></a>
				
			</div>
		</div>
		<div class="details">
			<p class="wptitle">薯条点心面休闲零食五味园 小包装500g</p>
			<p>
				<span class="jiaqian">￥11.5</span>
				<span>原价：<span style="text-decoration:line-through">￥12.8</span></span>
				<span class="xiaoliang">销量：1235</span>
			</p>
			<hr>
			<p>
				<span>限时：2天23分02秒</span>
				<span class="xianliang">限量：120件</span>
			</p>
		</div><!-- 物品展示 -->
		<div class="pingjia">
			<ul class="pingjiaul">
				<li class="pingjiali">
					<p id="xq" class="pingjias" @click="detailf">商品详情</p>
					<ul class="pingjiauls">
						<li>sdfsad</li>
					</ul>
				</li>
				<li class="pingjiali">
					<p id="pj" class="pingjias" @click="details">用户评价</p>
					<ul class="pingjiauls">
						<li class="pingjialis" v-for="obj in commdetailarr">
							<p class="pjp1">
								<span id="name">{{obj.name}}</span>
								<img v-bind:src="obj.img">
								<span id="time">{{obj.time}}</span>
							</p>
							<p class="pjp2">{{obj.cons}}</p>
						</li>
					</ul>
				</li>
			</ul>
			<div class="select"></div>
		</div><!-- 评价 -->
		<div class="shopping">
			<div class="che"></div>
			<button class="buy">立即购买</button>
			<button class="add">加入购物车</button>
		</div>
	</div><!-- wrap -->
	<!-- <server ></server> -->
</div>
</template>


<script>
// import Server from '../commons/server';
export default {
	components: {
	    // Server
	  },
	 methods:{
	 	xian:function (){
	 		$(".share").fadeIn(200);
	 	},
	 	back:function(){
	 		window.history.back();
	 	},
	 	detailf:function(){
	 		$(".pingjiauls").eq(0).css("display","block");
			$(".pingjiauls").eq(1).css("display","none");
			$(".select").css("left","0");
	 	},
	 	details:function(){
	 		$(".pingjiauls").eq(0).css("display","none");
			$(".pingjiauls").eq(1).css("display","block");
			$(".select").css("left","calc(100vw / 2)");
	 	}
	 },
	// ready:function(){
	// 	$(".pingjiali").eq(0).on("click",function(){
	// 		$(".pingjiauls").eq(0).css("display","block")
	// 		$(".pingjiauls").eq(1).css("display","none")
	// 		$(".select").css("left","0")
	// 	})
	// 	$(".pingjiali").eq(1).on("click",function(){
	// 		$(".pingjiauls").eq(0).css("display","none")
	// 		$(".pingjiauls").eq(1).css("display","block")
	// 		$(".select").css("left","calc(100vw / 2)")
	// 	})
	// },
	data () {
    return {      
      commdetailarr:[
      	{name:"小明",img:require("../../assets/0star.png"),time:"2016-01-03",cons:"拉了三天了，刚看到这评论，还有四天，等我拉完，我要用这薯条毁灭世界...不好，肚子又疼了，小红你快出来😖"},
      	{name:"小明老师",img:require("../../assets/1star.png"),time:"2015-12-27",cons:"上次我学生给我买了一包，害我拉了一星期，元旦快到了，我买些分发给我学生吃😤"},
      	{name:"小明",img:require("../../assets/2star.png"),time:"2015-12-17",cons:"真的？我买包给我老师试试😏"},
      	{name:"小羽",img:require("../../assets/3star.png"),time:"2015-12-13",cons:"吃完拉了一星期，求神评"},
      	{name:"小强",img:require("../../assets/4star.png"),time:"2015-11-12",cons:"不好吃，差评"},
      	{name:"小球",img:require("../../assets/5star.png"),time:"2015-10-05",cons:"挺好吃的，下次再买"}
      ],
  	 }
    }
}
</script>
<style>
#Comdetail .show{ width: 7.5rem; height: 6.9rem; overflow: hidden; }
#Comdetail .show img{ width: 100%; }
#Comdetail .show span{ color: white; font-weight: bold; }
#Comdetail .btnsss{ width: 100%; position: absolute; top: .3rem; }
#Comdetail #back{ font-size: .52rem; }
#Comdetail #collect{ font-size: .52rem; float: right; margin-right: .4rem; }
#Comdetail #share{ width: .54rem; float: right; margin-right: .3rem; }
#Comdetail .showmeng{ width: 7.5rem; height: 6.9rem; position: absolute; top: 0; background: -webkit-linear-gradient(top, rgba(185,185,185,.4), rgba(244,244,244,0), rgba(123,123,123,.1)); }
#Comdetail .details{ padding: .3rem .2rem .1rem; background-color: white; margin-bottom: .2rem; }
#Comdetail .details hr{ margin: .07rem 0; }
#Comdetail .details p{ margin: .2rem 0; }
#Comdetail .details span{ font-size: .3rem; }
#Comdetail .details .wptitle{ font-size: .34rem; color: #141414; }
#Comdetail .xiaoliang,#Comdetail .xianliang{ float: right; }
#Comdetail .details .jiaqian{ font-size: .34rem; color: #ff3f12; margin-right: .25rem; }
#Comdetail .pingjia{ width: 100%; height: .77rem; background-color: white; }
#Comdetail .pingjia ul{ list-style: none; }
#Comdetail .pingjia .pingjiaul{ height: .77rem; border-bottom: 3px solid #d9d9d9; position: relative;  }
#Comdetail .pingjia ul .pingjiali{ width: calc(100vw / 2); height: .6rem; float: left; text-align: center;  }
#Comdetail .pingjia ul .pingjiali p{ line-height: .74rem; font-size: .34rem; color: #595959; display: inline-block; }
#Comdetail .select{ width: calc(100vw / 2); height: .05rem; background-image: url(../../assets/select.png); background-size: 100% 100%; position: absolute; z-index: 4;bottom: 0; transition: all; }
#Comdetail .pingjiali:nth-child(2) .pingjiauls{ display: none; }
#Comdetail .pingjiauls{ width: 100vw; box-sizing: border-box; position: absolute; left: 0; background-color: #fff; text-align: left; border-bottom: 1px solid #d9d9d9; }
#Comdetail .pingjiali:nth-child(1) .pingjiauls .pingjialis{ font-size: .28rem; }
#Comdetail .pingjialis:last-child{ padding-bottom: .98rem; }
#Comdetail #time{ float: right; }
#Comdetail #name{ color: #010101; }
#Comdetail .pjp1{ font-size: .28rem; margin: 0 .2rem; }
#Comdetail .pjp1{ width: 95%; }
#Comdetail .pjp1 img{ width: 2rem;}
#Comdetail .pjp2{ font-size: .32rem; color: #000; margin: 0 .2rem; line-height: .44rem; margin-bottom: .1rem; }
#Comdetail .shopping{ padding: .2rem; width: 100%; height: .98rem; background-color: #f2f2f2; position: fixed; bottom: 0; z-index: 7; }
#Comdetail .che{ width: .58rem; height: .55rem; background-image: url(../../assets/shopping.png); background-size: 100% 100%; float: left; margin: .1rem; }
#Comdetail .shopping button{ float: right; border-radius: .14rem; color: white; font-size: .3rem; }
#Comdetail .add{ background-color: #ed9d2a; margin-right: .4rem; }
#Comdetail .buy{ background-color: #ee3749; }
</style>