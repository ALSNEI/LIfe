<template>
	<div class="mui-bar mui-bar-tab">
        <router-link to="/home" class="item" :class="{'mui-active':isactive1}">
          <span class="iconfont icon-shouye"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/zajin" class="item" :class="{'mui-active':isactive2}">
          <span class="iconfont icon-gifts"></span>
          <span class="mui-tab-label">会员杂锦</span>
        </router-link>
        <router-link to="/classify" class="item" :class="{'mui-active':isactive3}">    
            <span class="iconfont icon-viewgallery"></span>
            <span class="mui-tab-label">分类</span>
        </router-link>
        <router-link to="/cart" class="item" :class="{'mui-active':isactive4}">
          <span class="iconfont icon-cart"></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link to="/my" class="item" :class="{'mui-active':isactive5}">
           <span class="iconfont icon-account"></span>
           <span class="mui-tab-label">我的</span>
        </router-link>
    </div>
  </div>  
</template>

<script>
export default {
  props: ['isactive1','isactive2','isactive3','isactive4','isactive5'],
	methods:{
    
  }
}
</script>

<style>
.mui-bar-tab {
  bottom:-1px;
}
.mui-bar-tab .iconfont{
  z-index: 20;
  font-weight: 400;
  font-style: normal;
  line-height: 1;
  text-decoration: none;
  font-size: .5rem;
}
.mui-bar-tab .item{
  padding-top: .1rem;
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #8A9199;
}
.mui-bar-tab .item .mui-tab-label{
  font-size: .22rem;
  display: block;
}
.mui-bar-tab .mui-active{
  color: #F29004 !important;
}
</style>