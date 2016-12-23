<template>
  <div id="more">
	<div class="mainContent">
    	<Heade title="更多">
			<back slot="topleft"></back>
    	</Heade>
    <div class="wrap">  
      <div class="content">
        <ul><li><a><span>关于我们</span><span class="arrow">></span></a></li></ul>
        <ul><li><a><span>帮组中心</span><span class="arrow">></span></a></li></ul>
        <ul><li><a><span>意见反馈</span><span class="arrow">></span></a></li></ul>
        <ul><li><a><span>版本更新</span><span class="tex">5.02</span></a></li></ul>

      </div>
    </div>

  </div>
</template>

<script>
import Heade from '../commons/head.vue';
import back from '../commons/back.vue';
export default {
  components: {
    Heade,
    back
  },
}
</script>
  
<style>
#more .wrap{
  position: relative;
  top: .85rem;
  
}
#more .wrap .content{
   margin-top: .22rem;
  width: 100%;
   border-top: 1px solid #dbdbdb;
   background: white;
   font-size: .28rem;
   line-height:.88rem;
}
#more .content ul li span{
  color: #7a7a7a;
}
#more .content ul li img{
  width: .30rem;
  height: .30rem;
  margin-top: .30rem;
  float: right;
}
#more .content ul li{
  border-bottom: 1px solid #dbdbdb;
  padding:0 .20rem 0 .20rem;
}
#more .content ul .tex{
  font-size: .24rem;
  line-height: .88rem;
  float: right;
  color: #333333;
}
#more .arrow{
	font-size: .32rem;
	margin-right: .2rem;
	float: right;
	color: #b3b3b3;
}
</style>
