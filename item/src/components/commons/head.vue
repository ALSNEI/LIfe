<template>
  <div class="header">
    <slot name="topleft"></slot>
    <slot name="topleftCood"></slot>
    <h1>{{ title }}</h1>
    <a href="javascript:;" class="right">{{Right}}</a>
    <slot name="toprightsearch"></slot>
  </div>
</template>

<script>
export default {
  props: ['title',"Right"],
}
</script>

<style scoped>
.header{
	 z-index:2;
	 width: 100%;
	 height: .85rem;
	 position: fixed; 
	 top: 0; 
	 background-color: #f29004;
}
.header h1{
	color: white;
	height: 100%;
	line-height: 240%;
	font-size: .39rem;
	font-weight: 100;
	letter-spacing: 2px;
	text-align: center;
	margin:0;
}
.header .right{
	position: absolute;
    top: calc(50% - .15rem);
    color: white;
    font-size: .3rem;
    right:.2rem;
}
</style>
