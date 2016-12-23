<template>
<div id ="address">
  <div id="app1">
    <Heade title="收货地址">
        <back slot="topleft"></back>
    </Heade> 
    <div class="wrap wrap2">  
      <div class="address"  v-for="(obj,index) in arr" @click="dian(index)">
        <div><span>{{obj.name}}</span><span>{{obj.phone}}</span></div>
        <div><span class="moren" style="color: #f6b26d">[默认]</span><span class="dizhi">{{obj.province}}{{obj.city}}{{obj.area}}{{obj.address}}</span></div>
        <div class="zhixiang">
          <!-- <span class="mui-icon mui-icon-arrowright"></span> -->
          <span class="iconfont icon-more"></span>
        </div>
      </div>
    <div class="button"><button  @click="dian2()">新增收货地址</button></div>
    </div>
  </div>


<!-- =============编辑页============================ -->
  <div id="app2">
    <Heade title="收货地址" Right="编辑">
      <!-- <back slot="topleft"></back> -->
    </Heade> 
    <div class="wrap wrap2">  
     <div class="address">
        <div>
            <span>收货人姓名:</span>
            <!-- <span>{{arr[0].name}}</span> -->
            <input type="text" class="laiyuan">
        </div>
        <div>
            <span class="moren">联系电话:</span>
            <!-- <span class="dizhi">{{arr[0].phone}}</span> -->
            <input type="text"  class="laiyuan">
        </div>
<!-- 三级联动  省市区    -->
        <div>
            <button id='showCityPicker3' class="mui-btn mui-btn-block" type='button'>
                <span class="mui-col-xs-4">
                    <span class="diyu">选择 省级</span>
                    <span class="iconfont icon-moreunfold"></span>
                    <!-- <span>&#xe6a6;</span> -->
                </span>
                <span class="mui-col-xs-4">
                    <span class="diyu">选择 城市</span>
                    <!-- <span class="mui-icon mui-icon-arrowdown"></span> -->
                    <span class="iconfont icon-moreunfold"></span>
                </span>
                <span class="mui-col-xs-4">
                    <span class="diyu">选择 区</span>
                    <!-- <span class="mui-icon mui-icon-arrowdown"></span> -->
                    <span class="iconfont icon-moreunfold"></span>
                </span>
            </button>
        </div> 
<!-- 三级联动  省市区    -->
        <div class="addressxiang"><input type="text" placeholder="小区、街道、门牌等详细信息"></div>
<!-- 设为默认地址 -->
        <div>
            <li class="mui-table-view-cell">
              <span style="padding: 0">设为默认地址</span>
              <div class="mui-switch mui-switch-mini mui-active">
               <div class="mui-switch-handle"></div>
              </div>
            </li>
        </div>


      </div>
    </div>
    <div class="button2"><button>确认</button></div>
  </div>

  <!--   </div>
  </div> -->
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
  // methods:{ //标签可调用函数
  // },
  mounted(){   //组件加载完成后运行
      this.moren(); //刷新判断出默认地址
      var _this = this;


      (function($, doc) {
        // $.init();
        $.ready(function() {
          //          三级联示例
          var cityPicker3 = new $.PopPicker({
            layer: 3
          });
          cityPicker3.setData(cityData3);
          var showCityPickerButton = doc.getElementById('showCityPicker3');
          showCityPickerButton.addEventListener('tap', function(event) {
            cityPicker3.show(function(items) {
                $("#address .mui-col-xs-4")[0].children[0].innerText = items[0].text;
                $("#address .mui-col-xs-4")[1].children[0].innerText = items[1].text;
                $("#address .mui-col-xs-4")[2].children[0].innerText = items[2].text;
              //返回 false 可以阻止选择框的关闭
              // return false;
            });
          }, false);
        });
      })
      (mui, document);


      $("#address .button2").on("touchend",function(){ //点击确认地址
        console.log(23);
          if ($("#address #app2 input")[0].value==""||$("#address #app2 input")[1].value==""||$("#address #app2 input")[2].value=="") {
            alert("不能为空"); return} //判断有没有空的 
            hidd(); // 返回效果动画


          if (_this.bol) { // 修改地址
              var index = _this.arr[_this.index];//记录点击的是第几个
              index.name = $("#address #app2 input")[0].value
              index.phone = $("#address #app2 input")[1].value
              index.address = $("#address #app2 input")[2].value 
              index.province=$("#address .diyu")[0].innerText
              index.city=$("#address .diyu")[1].innerText
              index.area=$("#address .diyu")[2].innerText
          }else {     //增加地址
              _this.arr.push({name:$("#address #app2 input")[0].value,
                phone:$("#address #app2 input")[1].value,
                address:$("#address #app2 input")[2].value,bol:0,
                province:$("#address .diyu")[0].innerText,
                city:$("#address .diyu")[1].innerText,
                area:$("#address .diyu")[2].innerText,
                bol:false})
                _this.index = _this.arr.length-1;
                index = _this.arr[_this.index];//记录点击的是第几个
          }
          // _this.arr[_this.arr.length].bol = _this.mo;
          if (_this.mo == true) { // 经过修改后
            for (var i = 0; i < _this.arr.length; i++) {
                if (i == _this.index) {
                  _this.arr[i].bol = true;
                }else {
                  _this.arr[i].bol = false;
                }
            }
          }else {  //如果不是默认地址
              if (index.bol==true) { //
                index.bol=false;
              }
          }
setTimeout(function(){ //一次性定时器
_this.moren(); //刷新判断出默认地址
})
      })
      //获取是否默认地址

      // $("#address .mui-switch-mini")[0].addEventListener('touchend', function(event) {   //点击改变默认地址
      //      event.detail.isActive ? 'true' : 'false';
      //      console.log(event.detail.isActive);
      //       if (event.detail.isActive) {
      //        _this.mo = true;
      //       }else {
      //         _this.mo = false;
      //       }
      // });
      $("#address .mui-switch-mini").on("touchend",function(){
        console.log(_this.mo);
            _this.mo = !_this.mo;
            if ( _this.mo) {
              $("#address .mui-switch").addClass("mui-active");//添加class
              $("#address .mui-switch-handle")[0].style.transform="translate(16px,0px)";
            }else {
              $("#address .mui-switch").removeClass("mui-active");//删除class
               $("#address .mui-switch-handle")[0].style.transform="translate(0px,0px)";
            }
      })



// $("#address #app2 a:nth-of-type(1)").removeClass("mui-action-backon");//关掉退后效果
$("#address #app2 .header").prepend("<a class='mui-action-backon mui-icon'>&lt;</a>")

$("#address #app2 a:nth-of-type(1)").on("touchend",function(){
         hidd();// 返回效果动画
})

function hidd() {
  $("#address #app2").animate({
    left:"7.5rem"
  },function(){
    $("#address #app2").css({
        display:"none",
        left:0
    })
  }) 
}

  },
  data(){ //可以写变量
    return{
      arr:[
        {name:"刘晓心",phone:13562021254,address:"东圃时代广场TIT广场",bol:1,province:"广东",city:"广州",area:"天河"},
        {name:"刘晓心",phone:13562021254,address:"自己家里",bol:0,province:"广东",city:"广州",area:"天河"},
        {name:"刘晓心",phone:13562021254,address:"朋友家里",bol:0,province:"广东",city:"广州",area:"天河"},
        {name:"刘晓心",phone:13562021254,address:"公司里",bol:0,province:"广东",city:"广州",area:"天河"},
        {name:"刘晓心",phone:13562021254,address:"代收服务中心",bol:0,province:"广东",city:"广州",area:"天河"},
        {name:"刘晓心",phone:13562021254,address:"易快递放置箱",bol:0,province:"广东",city:"广州",area:"天河"},
        {name:"刘晓心",phone:13562021254,address:"随便丢",bol:0,province:"广东",city:"广州",area:"天河"},
      ],
      index:0,//记录是点击第几个进入编辑收货地址的
      bol:true,//判断点击的是修改地址  还是增加地址
      mo:false,//判断是否修改默认地址
    }
  },
  methods:{ //标签可调用函数
    moren:function(){   //判断谁是默认地址
      for (var i = 0; i < this.arr.length; i++) {
          if (this.arr[i].bol) {
            $("#address .moren").eq(i).css("display","inline-block")
          }else {
            $("#address .moren").eq(i).css("display","none")
          }
      }
    },
    dian:function(index){   //点击选择谁进入编辑页面
      var ind = this.arr[index];
      this.index = index;
      this.bol = true;
      this.mo = this.arr[index].bol;
      $("#address #app2 input")[0].value=ind.name;
      $("#address #app2 input")[1].value=ind.phone;
      $("#address #app2 input")[2].value=ind.address;
      $("#address .diyu")[0].innerText = ind.province;
      $("#address .diyu")[1].innerText = ind.city;
      $("#address .diyu")[2].innerText = ind.area;
      if (ind.bol) {
        $("#address .mui-switch").addClass("mui-active");//添加class
        $("#address .mui-switch-handle")[0].style.transform="translate(16px,0px)";
      }else {
         $("#address .mui-switch").removeClass("mui-active");//删除class
         $("#address .mui-switch-handle")[0].style.transform="translate(0px,0px)";
      }
      $("#address #app2").css("display","block")
    },
    dian2:function(){ //点击新增收货地址
        $("#app2").css("display","block");
        this.bol = false;//增加地址
        this.mo = false;//不是默认地址
        $("#address #app2 input")[0].value="";
        $("#address #app2 input")[1].value="";
        $("#address #app2 input")[2].value="";
        $("#address .diyu")[0].innerText = "广东";
        $("#address .diyu")[1].innerText = "广州";
        $("#address .diyu")[2].innerText = "天河";

        $("#address .mui-switch-handle")[0].style.transform="translate(0px,0px)";//滑扭闭合
        $("#address .mui-switch").removeClass("mui-active")//删除class
    }
  }
}


</script>

<style>

/*第一页*/
#address .mui-action-backon{
    position: absolute;
    top: calc(50% - .24rem);
    color: white;
    font-size: .48rem;
    left: .2rem;
}
#address .header .mui-pull-right{
    display: none;
}
#address #app1{
  width: 100%;
  height: 100%;
  position: absolute;
  /*display: none;*/
}
#address .wrap{
  width: 100%;
  position: relative;
  top: .85rem;
  font-size: 0.3rem;
  color: #666;
  margin-bottom: 20%;
}
#address .wrap span{
  padding: 0.2rem;
  display: inline-block;
}
#address .address{
  width: 100%;
  position: relative;
  background-color: #fff;
  margin-bottom: 0.2rem;
}
#address .address .zhixiang{
  position: absolute;
  right: 0;
  top: 0.3rem;
  z-index: 2;
}
#address .address .zhixiang span{
  font-size: 0.5rem;
}
#address .button{
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10;
}
#address .button button{
  width: 100%;
  background-color: #f29004;
  color: #fff;
  height: 0.85rem;
}
#address #app1 .address .moren{
  /*color: #f6b26d;*/
   overflow: hidden;
   /*display: none;*/
}
#address .address .dizhi{
  width: 77%;
  white-space: nowrap;    /*不让换行*/
  overflow: hidden;
  text-overflow: ellipsis;  /*隐藏部分变成点点...*/
}



/*==================编辑页=====================*/
#address #app2{
  width: 100%;
  height: 100%;
  display: none;
  overflow: hidden;
  position: fixed;
  left: 0;
  -webkit-animation: wu 0.5s;
  animation: wu 0.5s;
  background-color: #f2f2f2;
  z-index: 15;
}
#address #app2 .mui-action-back{
  /*display: none;*/
}
@-webkit-keyframes wu{
  0%{-webkit-transform: translate(7.5rem);}
  100%{-webkit-transform: translate(0);}
}
@keyframes wu{
  0%{transform: translate(7.5rem);}
  100%{transform: translate(0);}
}

#address #app2 .wrap .address>div{
  border-bottom: 1px solid #ddd;
}
#address #app2 .wrap .address>div>input{
  border: none;
  margin-bottom: 0;
}
#address .button2{
  width: 100%;
  position: absolute;
  bottom: 10%;
  text-align: center;
}
#address .button2 button{
  width: 80%;
  background-color: #f29004;
  color: #fff;
  height: 0.85rem;
}
#address #app2 .header .mui-pull-right{
    display: block;
}
#address #showCityPicker3{
  border: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 0.3rem;
  color: #666;
}
#address #showCityPicker3 span span:nth-child(2){
    font-size: 0.4rem;
    padding: 0.2rem 0;
    overflow: hidden;
}
#address #showCityPicker3 span span:nth-child(1){
    padding: 0.2rem;
    max-width: 1.8rem;
  /*white-space: nowrap;*/    /*不让换行*/
  overflow: hidden;
  text-overflow: ellipsis;  /*隐藏部分变成点点...*/
}
#address #showCityPicker3>span{
  padding: 0;
}
#address input{
  font-size: 0.3rem;
}
#address #app2 .laiyuan{
  width: 60%;
}
#address .mui-switch.mui-active {
    border-color: #f29004;
    background-color: #f29004;
}
#address .icon-moreunfold{
  line-height: 100%;
}

</style>









