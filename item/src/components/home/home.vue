<template>
  <div id="home">
    <Heade title="生活一家">
      <Cood slot="topleft"></Cood> 
      <Search slot="toprightsearch"></Search> 
    </Heade>
    <swiper1 :Swiperinfo="Hswiperarr"></swiper1>
    <div class="content">
      <div class="pic clear">
        <div>
          <router-link to="/home/Homelife">
              <img src="../../assets/homeLife.png" alt="">
          </router-link>      
        </div>
        <div>
          <router-link to="/home/Homelife">
            <img src="../../assets/homeEat.png" alt="">
          </router-link>
          <router-link to="/home/Homelife">
            <img src="../../assets/homeBrush.png" alt="">
          </router-link>
        </div>
        <div>
          <router-link to="/home/Homelife">
            <img src="../../assets/homeLamp.png" alt="">
          </router-link>
          <router-link to="/home/Homelife">
            <img src="../../assets/homePao.jpg" alt="">
          </router-link>
        </div>
      </div>
      <div class="Sales clear">
        <hr>
        <span>特卖专区 Sales</span>
      </div>
      <div class="Ad">
        <div class="Ad1" v-for="obj in homeArr">
        <img v-bind:src="obj.img" alt="">
        <p>{{obj.p}}</p>
        </div>
      </div>
    </div>
    <Navb isactive1="true"></Navb>
  </div>  

</template>

<script>
import Heade from '../commons/head.vue';
import Cood from '../commons/Cood.vue';
import Search from '../commons/Search.vue';
import Swiper1 from '../commons/swiper.vue';
import Navb from '../commons/nav.vue';
export default {
  components: {
    Heade,
    Cood,
    Search,
    Swiper1,
    Navb
  },
  data() {
    return{
      // 数组数据
      Hswiperarr:[
        {url:require("../../assets/homeS1.jpg")},
        {url:require("../../assets/homeS2.jpg")},
        {url:require("../../assets/homeS3.jpg")},
        {url:require("../../assets/homeS4.jpg")},
        {url:require("../../assets/homeS5.jpg")}
      ],
      homeArr:[
      {img:require("../../assets/Ad1.jpg"),p:"特惠：(到店消费)SECRET CLUB秘密吧 百威98元1打"},
      {img:require("../../assets/Ad2.jpg"),p:"限量抢购：灵子舞蹈国际连锁培训 钢管、爵士、领舞、TB秀 四选一舞种体验卡"},
      {img:require("../../assets/Ad3.jpg"),p:"抢购价：华硕笔记本 E403SA3160超薄四核14英寸固态版商务上网笔记本电脑"},
      {img:require("../../assets/Ad4.jpg"),p:"新品首发：vivo X9前置双摄全网通4G+64G美颜自拍超薄智能手机5.5..."}
      ],

    }
  },
  mounted() {
      // console.log($(".wrap"));
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
#home .swiper-container {margin-top: .85rem!important}
#home .content{margin: .2rem .2rem 1.2rem;}
#home .content .pic{
  display: -webkit-flex; /* Safari */
  display: flex;
}
#home .content .pic img{
  width: 100%;
}
#home .content .pic div{ width: 2.35rem;}
#home .content .pic div:nth-child(1){ width: 2.23rem;}
#home .content .pic div:nth-child(2){ margin:0rem .1rem;}
#home .content .pic div:nth-child(2) img:nth-child(1){margin-bottom:.1rem;}
#home .content .pic div:nth-child(3) img:nth-child(1){margin-bottom:.1rem;}
#home .content .Ad img{width: 100%;}
#home .content .Ad p{
  background-color: white;
  margin: 4px;
  font-size: .3rem;
  color: black;
}
#home .content .Sales{
  position: relative;
  margin: .3rem 0px;
  text-align: center;
}
#home .content .Sales hr{
  color: #dbdbdb;
  width: 100%;
  position: absolute;
}
#home .content .Sales span{
  color: #808080;
  padding: 0rem .2rem;
  background-color: #f2f3f3;
  font-size: .3rem;
  position: relative;
}
</style>
