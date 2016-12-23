<template>
  <div id="basics">
	<div class="mainContent">
    	<Heade title="基本资料">
			<back slot="topleft"></back>
    	</Heade>
	    <ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell photo">
				<a class="iconfont icon-more">头像
					<img src="../../assets/photo.png" alt="" class="fr">
				</a>
				
			</li>
			<li class="mui-table-view-cell photo">
				<a class="iconfont icon-more">姓名
					<span class="fr name">上官海棠</span>
				</a>
			</li>
			<li class="mui-table-view-cell photo">
				<a class="iconfont icon-more">会员标识
					<img src="../../assets/stone.png" alt="" class="fr" style="width: .5rem;">
				</a>
			</li>
			<li class="mui-table-view-cell photo">
				<a class="iconfont icon-more">联系方式
					<span class="fr mobile">136****1245</span>
				</a>
			</li>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell">
				<a href="#modification" class="iconfont icon-more">修改密码</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#money" class="iconfont icon-more">修改钱包密码</a>
			</li>
			<li class="mui-table-view-cell">
				<a href="#support" class="iconfont icon-more">我能供应</a>
			</li>
		</ul>
    </div>
    <div id="pic" class="sonpage">
		<title title="头像"></title>
		<input type="text">
		<button class="btn">确认</button>
    </div>
    <div id="name" class="sonpage">
		<title title="姓名"></title>
		<input type="text" maxlength="18"/>
		<button class="btn">确认</button>
    </div>
    <div id="contact" class="sonpage" style="width: 100%">
		<title title="联系方式" Right="编辑"></title>
		<input type="text">
		<div class="change">
			<input type="text">
			<input type="text">
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
#basics .mainContent{padding-top: .85rem;}
#basics .mui-table-view:nth-child(3){margin-top: .2rem}
#basics .mui-table-view-cell{font-size: .3rem;color:#838383;}
#basics img{width:1.16rem;margin-right: .4rem}
#basics .mui-table-view .photo:nth-child(1){line-height: 1.16rem}
#basics .mui-table-view-chevron .mui-table-view-cell{padding-right: .3rem;}
#basics .mui-table-view li a{margin-right: -.4rem!important;}
#basics .mui-table-view li{border-top: 1px solid #F2F2F2;}
#basics .mui-table-view li:not(:first-child){height: .9rem}
#basics .mui-table-view-cell:after{background: none}
#basics .iconfont icon-more:after, .mui-push-right:after{font-size: .4rem}
#basics .name{transform: translateX(-.4rem);}
#basics .mui-table-view li:nth-child(3)>a:after{display: none;}
#basics .sonpage{position:absolute;padding-top: .85rem;text-align: center;height:100vh;top:0rem;left:100%;background-color:#f2f2f2;display: block;}
#basics .mainContent .header{position: absolute;}
#basics .sonpage .header{position: absolute;left:100%}
#basics .sonpage input{width: 7.1rem;height: .9rem;margin:.44rem auto 1.6rem;border-radius: 8px;}
#basics .btn{display:inline-block;width: 6.4rem;height: .9rem;background-color: #f29004;color:white;font-size: .34rem;line-height: .34rem;text-align: center;}
#basics .contact .header .type{display: block;}
#basics .contact .change{position: absolute;top:.44rem}
.icon-more:before{content:"";}
.icon-more:after{
	content:"\e6a7";
	position: absolute;
    right: .3rem;
}

</style>
