<template>
  <div class="myvip">
    <Heade title="升级会员" Right='充值'>
      <back slot="topleft"></back>
    </Heade> 
    <div class="wrap">  
      <div class="explain">
        <p class="level">会员等级说明</p>
        <p class="level">快办会员只要9毛8,只要9毛8,只要9毛8</p>
        <p class="level">快办会员只要9毛8,只要9毛8</p>
      
      </div>
      <div class="tal">
        <div class="cont">
           <p class="mov">VIP会员</p>
          <ul > 
            <li>1.说明文字</li>
            <li>2.说明问题</li>
            <li>3.说明问题</li>
          </ul>
       </div> 
      </div>

      <div class="tal">
        <div class="cont">
           <p class="mov">股东会员</p>
          <ul > 
            <li>1.说明文字</li>
            <li>2.说明问题</li>
            <li>3.说明问题</li>
          </ul>
       </div>  
      </div>

    </div>
   
  </div>




</template>

<script>
import back from '../commons/back';
import Heade from '../commons/head';
export default {
  components: {
    Heade,
    back
  },
  
}
</script>

<style>
.myvip .wrap{
  width: 100%;
  position: relative;
  top: .85rem;
  margin-bottom: 20%;

  
 }
.myvip .explain{
  padding: .36rem 0 0 .48rem;
  
}
.myvip .explain .level{
  font-size: .30rem;
  color: #808080;
}
.myvip .tal{
  
  margin: .96rem .20rem 0 .20rem;
  border-top: 1px solid #dbdbdb;
}
.myvip .tal .cont{
  text-align: center;
 
}
.myvip .tal ul li{
  font-size: .28rem;
  line-height: .44rem;
  color:#333333
}
.myvip .tal  .mov{
   width:2.12rem;
  
   margin: auto;
   position: relative;
   bottom:.2rem;
   background: #f2f2f2;
   color:#808080; 
   font-size:.30rem;
   line-height:.30rem;   
}

</style>
