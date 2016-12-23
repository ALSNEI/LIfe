<template>
  	<div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in Swiperinfo"><img :src="item.url"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

</template>

<script>
import '../../commons/swiper.min.js';
import '../../commons/swiper.min.css';
export default {
  props:['Swiperinfo'],
}

</script>

<style>
html{ font-size: calc(100vw / 7.5); }
img{width: 100%}
.swiper-container .swiper-pagination-bullet{width: .1rem;height: .1rem}
.swiper-container .swiper-pagination-bullet-active{background: #F29004}
</style>
