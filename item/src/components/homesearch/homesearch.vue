<template>
	<div >
		<Heade title="搜索">
			<back slot="topleft"></back>
		</Heade>
  		<form class="searchPage">
    		<div class="search-form-box">
  				<input type="text" class="searchBar">
  				<p class="searchBarIn">
  					<span class="iconfont icon-search  searchBar-icon"></span>
  					<span class="searchText">输入关键词/商品名称</span>
  				</p>
      		</div>
			<p class="searchTitle">热门搜索</p>
			<a href="javascript:void(0)" class="hotsearch" v-for="obj in SearchArr">{{obj.p}}</a>
    	</form>
	</div>
</template>

<script>
import Heade from '../commons/head.vue';
import back from '../commons/back.vue';
export default {
	components:{
		Heade,
		back
	},
	data(){
		return{
			SearchArr:[
	  		{p:"小挎包"},
	  		{p:"皮带"},
	  		{p:"双肩包"},
	  		{p:"皮带"},
	  		{p:"小挎包"},
	  		{p:"双肩包"},
	  		{p:"皮带"},
	  		{p:"小挎包"}
	  		],
		}
	}
}
</script>

<style>
.searchPage{
	top: .85rem;
	position: absolute;
	background-color: #e6e6e6;
	z-index: 3;
	height: calc(100vh - .85rem);
}
.search-form-box{
	text-align: center;
	margin-top: .2rem;
	position: relative;
}
.searchPage .searchBar{
	width: 7.1rem;
	border-radius: 50px;
	outline: none;
}
.searchPage .searchBarIn{
	position: absolute;
	text-align: right;
	font-size: .3rem;
	top: calc(50% - .37rem);
    left: .5rem;
}
.searchPage .searchTitle{
	text-align: center;
	font-size: .3rem;
	margin-bottom: .3rem;
}
.searchPage .hotsearch{
	color: #aeaeae;
	border:1px solid #e1e1e1;
	border-radius: 50px;
	text-align: center;
	background-color: white;
	width:1.44rem;
	height: .52rem;
	font-size: .3rem;
	line-height: .53rem;
	display: inline-block;
	margin: 0rem .2rem .2rem;
}
</style>