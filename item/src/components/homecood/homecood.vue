<template>
	<div class="selectcity">
		<Heade title="选择城市">
			<back slot="topleft"></back>
		</Heade>
		<ul class="backer">
			<li @click="showCityInfo()">当前位置</li>
			<li>省市列表</li>
			<li v-for="obj in coodarr" @click="change(obj)">{{obj.p}}</li>
		</ul>
		<Navb></Navb>
	</div>
</template>

<script>
import Heade from '../commons/head.vue';
import back from '../commons/back.vue';
import Navb from '../commons/nav.vue';
export default {
	components: {
	    Heade,
	    back,
	    Navb,
	},
	data(){
		return{
			coodarr:[
				{p:"上海市"},
				{p:"上海郊区"},
				{p:"江苏"},
				{p:"浙江"},
				{p:"河南"},
				{p:"新疆"},
			]
		}
	},
	methods:{
		// 平行组件:两个组件同时存在于同一个页面
		// 父子组件:两个组件之间的关系是父子
		// 由于两个组件之间的关系是一个出现一个消失,所以无法传值,只能存储在本地存储里,然后再获取.
		change:function(obj){
			// console.log(obj.p);
			localStorage.setItem("text",obj.p);
			window.history.back();
		},
		//IP定位函数(获取用户所在城市信息)
		showCityInfo:function(){
			// 创建空的map对象
  			var map = new AMap.Map("container", {});
			//实例化城市查询类
	        var citysearch = new AMap.CitySearch();
	        //自动获取用户IP，返回当前城市
	        citysearch.getLocalCity(function(status, result) {
	            if (status === 'complete' && result.info === 'OK') {
	                if (result && result.city && result.bounds) {
	                    var cityinfo = result.city;
	                    // $(".back").html(cityinfo);
	                    localStorage.setItem("text",cityinfo);
						window.history.back();
	                }
	            } else {
	            	alert("定位失败,请重试");
	            }
	        });
		}
	},
	mounted() {
	}
}
</script>

<style>
/*定位*/
.selectcity{
	z-index: 333;
	width: 100%;
	height: 100%;
	background-color: #EFEFF4;
}
.backer{
	width: 100%;
	background-color: #e6e6e6;
	position: absolute;
	z-index:99;
	top: .85rem;
}
.backer li{
	z-index:99;
	background-color: #f2f2f2;
	font-size: .3rem;
	padding: .25rem;
	border-bottom: 1px solid #F29004;
}
.backer li:nth-child(2){
	background-color: #e6e6e6;
}
</style>