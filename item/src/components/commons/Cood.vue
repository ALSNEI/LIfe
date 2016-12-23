<template>
	<div>
	  	<router-link to="/home/homecood" class="cood iconfont icon-moreunfold">{{text}}</router-link>
	</div>
</template>

<script>
export default {
	data(){
		return {
			text:"广州市"
		}
	},
	mounted(){
		this.text = localStorage.getItem("text")
	}

}
</script>

<style>
.cood{
	position: absolute;
    top: calc(50% - .19rem);
    color: white;
    font-size: .38rem;
    left: .2rem;
}
.cood:before{
	content: ""
}
.cood:after{
	content: "\e6a6"
}
</style>