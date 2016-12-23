<template>
  <div id="homelife">
    <Heade title="生活食品">
		<back slot="topleft"></back>
    </Heade>
    <div class="wrap">
		<div class="content">
			<swiper1 :Swiperinfo="H_Lifeswiperarr"></swiper1>
			<div class="mui-content mui-row mui-fullscreen">
				<div class="mui-col-xs-3">
					<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
						<a class="mui-control-item mui-active" href="#content1">银行信息</a>
						<a class="mui-control-item" href="#content2">房产信息</a>
						<a class="mui-control-item" href="#content3">银行信息</a>
						<a class="mui-control-item" href="#content4">房产信息</a>
						<a class="mui-control-item" href="#content5">银行信息</a>
						<a class="mui-control-item" href="#content6">房产信息</a>
					</div>
				</div>

				<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
					<div id="content1" class="mui-control-content mui-active">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p1}}</p>
									<p class="p2"><img src="../../assets/sound.png"> {{obj.p2}}</p>
									<p class="p3">{{obj.p3}}</p>
									<p class="p4">{{obj.p4}}</p>
								</div>
							</li>
						</ul>
					</div>
					<div id="content2" class="mui-control-content">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr1">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p}}</p>
									<span class="lrs1">{{obj.span1}}</span>
									<span class="lrs2">原价：<span style="text-decoration:line-through">{{obj.span2}}</span></span>
								</div>
							</li>
						</ul>
					</div>
					<div id="content3" class="mui-control-content mui-active">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr1">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p1}}</p>
									<p class="p2"><img src="../../assets/sound.png"> {{obj.p2}}</p>
									<p class="p3">{{obj.p3}}</p>
									<p class="p4">{{obj.p4}}</p>
								</div>
							</li>
						</ul>
					</div>
					<div id="content4" class="mui-control-content">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr1">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p}}</p>
									<span class="lrs1">{{obj.span1}}</span>
									<span class="lrs2">原价：<span style="text-decoration:line-through">{{obj.span2}}</span></span>
								</div>
							</li>
						</ul>
					</div>
					<div id="content5" class="mui-control-content mui-active">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p1}}</p>
									<p class="p2"><img src="../../assets/sound.png"> {{obj.p2}}</p>
									<p class="p3">{{obj.p3}}</p>
									<p class="p4">{{obj.p4}}</p>
								</div>
							</li>
						</ul>
					</div>
					<div id="content6" class="mui-control-content">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="obj in arr1">
								<div class="lifeleft"><img v-bind:src="obj.img"></div>
								<div class="liferight">
									<p class="p1">{{obj.p}}</p>
									<span class="lrs1">{{obj.span1}}</span>
									<span class="lrs2">原价：<span style="text-decoration:line-through">{{obj.span2}}</span></span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div><!-- content -->
	</div><!-- wrap -->
  </div>
</template>

<script>
import Heade from '../commons/head.vue';
import back from '../commons/back.vue';
import Swiper1 from '../commons/swiper.vue';
export default {
	components: {
	    Heade,
	    Swiper1,
	    back
	},
	data() {
	    return {   
		    H_Lifeswiperarr:[
		        {url:require("../../assets/homeS1.jpg")},
		        {url:require("../../assets/homeS2.jpg")},
		        {url:require("../../assets/homeS3.jpg")},
		        {url:require("../../assets/homeS4.jpg")},
		        {url:require("../../assets/homeS5.jpg")}
		      ],   
	      arr:[
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      ],
	      arr1:[
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      	{img:require("../../assets/kangrui.jpg"),p1:"星河丹堤地产",p2:" [ 惠阳 淡水 ]",p3:"户型：2室 | 3室 | 4室",p4:"元旦优惠价：8500元/m²"},
	      ],
	      
	    }
	 },
	 mounted() {
      // console.log($(".wrap"));
      var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          autoplay : 800,
          speed:1000,
          loop:true,
          autoplayDisableOnInteraction : false,//用户操作swiper之后是否禁止autoplay。默认为true：停止
      });
    },
}
</script>

<style scoped>
#homelife .content{ width: 100%; position: relative; top: .85rem; }
#homelife .mui-table-view-cell{ padding: .2rem; }
#homelife .lifeleft{ width: 1.65rem; height: 1.65rem; float: left; }
#homelife .lifeleft img{ width: 100%; }
#homelife .liferight{ height: 1.65rem; width: calc(100% - 1.65rem); padding: .15rem 0 .3rem .2rem; float: left; position: relative; }
#homelife .liferight .p1{ color: #1b1b1b; font-size: .3rem; line-height: .38rem; margin-bottom: .1rem; }
#homelife .p2,#homelife .p3,#homelife .p4{ font-size: .26rem; line-height: .37rem; }
#homelife .p2 img{ width: .3rem; margin-right: .1rem; }
#homelife .liferight span{ font-size: .26rem; }
#homelife .liferight .lrs1{ font-size: .3rem; color: #df0101; position: absolute; bottom: .24rem; }
#homelife .liferight .lrs2{ color: #7c7c7c; left: 1.2rem; position: absolute; bottom: .23rem; }

#homelife .mui-fullscreen{ top: 3rem; }
#homelife #segmentedControls a{ width: 100%; background-color: #f2f2f2; font-size: .3rem; line-height: .3rem; padding: .26rem; }
#homelife #segmentedControls .mui-active{ color: #f29004; border-left: .12rem solid #f29004; }
#homelife .mui-col-xs-3{ height: calc(100vh - 3.85rem); overflow: scroll; }
#homelife .mui-table-view{ height: calc(100vh - 3.85rem); overflow: scroll; }
#homelife .mui-table-view:after{ height: 0; }
#homelife .mui-content{ height: calc(100vh - 3.85rem); width: 100%; overflow: hidden; }
</style>
