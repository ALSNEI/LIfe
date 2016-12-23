<template>
  <div id="zajin">
    <Heade title="会员杂锦"></Heade>
    <swiper1 :Swiperinfo="Zswiperarr"></swiper1>
    <div class="con">
         <router-link to="/commoditydetail" class="cona" v-for="obj in zajinArr" >
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:<span style="text-decoration:line-through">￥{{obj.span2}}</span></span>

            </div>
          </router-link>
      </div><!-- con -->
      <Navb isactive2="true"></Navb>
  </div>  
</template>

<script>
import Heade from '../commons/head.vue';
import Swiper1 from '../commons/swiper.vue';
import Navb from '../commons/nav.vue';
export default {
  components: {
    Heade,
    Swiper1,
    Navb
  },
  data() {
    return{
      // 数组数据
      Zswiperarr:[
        {url:require("../../assets/zajinS1.jpg")},
        {url:require("../../assets/zajinS2.jpg")}
      ],
      zajinArr:[
        {img:require("../../assets/zajingood1.png"),p:"加厚床裙式磨毛四件套  1.8...",span1:"118.0",span2:"168.0"},
        {img:require("../../assets/zajingood2.jpg"),p:"韶关双蒸地窖酒 翁源翁城客佳酿...",span1:"100.0",span2:"250.0"},
        {img:require("../../assets/zajingood3.jpg"),p:"蒜蓉辣椒酱 瑶柱招牌干贝虾米辣...",span1:"16.0",span2:"20.0"},
        {img:require("../../assets/zajingood4.jpg"),p:"美E颜中药祛痘膏20g",span1:"88.0",span2:"168.0"},
        {img:require("../../assets/zajingood5.jpg"),p:"自创苹果手机 5/6/6p手机...",span1:"36.0",span2:"59.0"},
        {img:require("../../assets/zajingood6.jpg"),p:"巧师傅月饼 HelloKitt...",span1:"88.0",span2:"128.0"}
      ]
    }
  },
  mounted() {
      var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          autoplay : 800,
          speed:1000,
          loop:true,
          autoplayDisableOnInteraction : false,//用户操作swiper之后是否禁止autoplay。默认为true：停止
      });
    },
  computed:{
    
  },
}

</script>

<style>
#zajin .swiper-container{margin-top: .85rem}
#zajin .con{ margin: .2rem; position: relative; /*bottom: .98rem;*/ overflow: hidden;margin-bottom: .98rem;}
#zajin .con .cona{ display: inline-block; width: 3.48rem; height: 4.89rem; }
#zajin .con .product{ width: 3.48rem; height: 4.89rem; float: left; background-color: white; margin-bottom: .15rem; overflow: hidden; position: relative;  }
#zajin .con .cona:nth-child(2n-1){ margin-right: .14rem; }
#zajin .products{ width: 3.48rem; height: 3.48rem; }
#zajin .products img{ width: 100%; }
#zajin .product p{ font-size: .3rem; color: #1a1a1a; width: 90%; padding: 5%; line-height: .34rem; }
#zajin .span1{ font-size: .28rem; color: #de0000; position: absolute; bottom: 1%; left: 5%; }
#zajin .span2{ font-size: .24rem; color: #8a8a8a; position: absolute; bottom: 1%; left: 35%; }
</style>
