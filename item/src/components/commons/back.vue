<template>
  	<a class="mui-action-back mui-icon" @click="back()">&lt;</a>
</template>

<script>
export default {
	methods:{
		back:function(){
			window.history.back();//退后一步
			// document.referrer是获取上一页的url
			//location.href=document.referrer;//退后一步并刷新
		}
	}
}
</script>

<style>
.mui-action-back{
	position: absolute;
    top: calc(50% - .24rem);
    color: white;
    font-size: .48rem;
    left: .2rem;
}
</style>