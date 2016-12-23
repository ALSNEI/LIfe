<template>
  <div id="my">
    <div class="wrap">  
        <div class="content">
          <div class="lun">
            <img src="../../assets/3.jpg"/>
          </div>
          <div class="middle">
            <img src="../../assets/1.jpg" class="peop">
            
          </div>
          <div class="Dia">
            <img src="../../assets/diamon.png" class="diamon">
          </div>
          <div class="Name">
            <p class="Name_co">凯丽_Keylie</p>
            <input type="text" value="VIP会员" class="Vip">
          </div>
          
        </div>
        <div class="inner">
          <ul class="inner1">
            <li class="first">
              <router-link to="/my/mybasics"><img src="../../assets/icon1.jpg">基本资料<span class="arrow">></span></router-link>
            </li>
            <li>
              <router-link to="/my"><img src="../../assets/icon2.jpg">我的订单<span class="arrow">></span></router-link>
            </li>
            <li>
              <router-link to="/my"><img src="../../assets/icon3.jpg">我的收藏<span class="arrow">></span></router-link>
            </li>
            <li>
              <router-link to="/my"><img src="../../assets/icon4.jpg">我的钱包<span class="arrow">></span></router-link>
            </li>
            <li>
              <router-link to="/my/myaddress"><img src="../../assets/icon5.jpg">收货地址<span class="arrow">></span></router-link>
            </li>
            <li>
              <router-link to="/my/myvip"><img src="../../assets/icon6.jpg">升级会员<span class="arrow">></span></router-link>
            </li>
          </ul>
          <ul  class="inner2">
                <li class="more">
                  <router-link to="/my/mymore"><img src="../../assets/icon7.jpg">更多<span class="arrow">></span></router-link>
                </li>
                <li>
                  <a href="javascript:void(0)"><img src="../../assets/icon7.jpg">注销<span class="arrow">></span></a>
                </li>

          </ul>
          
         
        </div>
      </div>
      <Navb isactive5="true"></Navb>
  </div>  
</template>

<script>
import Navb from '../commons/nav.vue';
export default {
  components: {
    Navb
  },
  data() {
    return{
      
    }
  },
  mounted() {
    },
  computed:{
    
  },
}

</script>

<style>
#my .wrap {
  width: 100%;
  position: relative;
 /* margin-bottom: 1rem;*/
}
#my .content { width: 100%; position: relative }
#my .lun{ width: 100%; height: 4.5rem;position: relative;}

#my .content .lun img {
  width: 100%;
  height:4.5rem;
}
#my .content .middle {
  width: 1.56rem;
  height:1.56rem;
  overflow: hidden;
  border: 2px solid #fff; 
  border-radius:50%;
  position: absolute;
  top: 1.3rem;left:0;right: 0;bottom: 2rem;
  margin: auto;                                                                                                             
}
#my .content .middle .peop {
  width: 100%;
  transform: scale(1.3);
  background:rgba(255,255,255,.5);
}
#my .content .Dia {
  height:.30rem;
  width: .40rem;
  position: absolute;
  left:3.95rem;
  top:2.3rem;
}
#my .content .Dia img { 
  width: 100%;
}
#my .content .Name {
  width:1.56rem;
  
  position: absolute;
  top:2.9rem;left:0;right:0;bottom: 0.8rem;
  margin: auto;
}
#my .content .Name .Name_co {
 font-size: .25rem;
  color: white;
  margin-bottom: 0.2rem;
  text-align:center;
}
#my .content .Name .Vip {
  width: 1.56rem;
  height: .42rem;
  color: white;
  font-size: .25rem;
  line-height: .42rem;
  padding: 0;
  border-radius:.2rem;
  background:rgba(255,255,255,0.3);
  text-align: center;
}
#my .inner {
  width: 7.50rem;
  height:7.77rem;
  margin-top: .14rem;

  border-top: 1px solid #dbdbdb;
  background: #f2f2f2;
  
}
#my .inner ul {
  background: white;
  padding-left: .38rem;
}
#my .inner ul li {
  font-size:.28rem;
  line-height:.92rem;
  background: white;

  border-bottom:1px solid #f2f2f2;



}
#my .inner ul li a {
  color: black;
  display: inline-block;
  width: 100%;
}
#my .inner ul li .arrow {
  font-size: .32rem;
  margin-right:.2rem;
  float: right;
  color: #b3b3b3;
}
#my .inner ul .more {
  margin-top:.22rem;
}
#my .inner ul li img {
  width: .4rem;
  margin:0 .40rem 0 0;
}
</style>
