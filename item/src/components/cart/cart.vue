<template>
<div>
  <div id="cart">
    <Heade title="购物车" Right="编辑">
    </Heade>
    <div class="wrap">  
        <div class="goods"  v-for="(obj,index) in Shoparr" >
          <div class="goodss">
            <div class="gou" @click="spot(index)">
               <img src="../../assets/gou2.png" alt="">
            </div>
            <div class="goodsimg"><img v-bind:src="obj.img" alt=""></div>
          </div>
          <div class="defailed">
            <div>{{obj.name}}</div>
            <div>规格：{{obj.a}}</div>       
          </div>

          <!-- <div>
            <span style="color:#e76b6b">￥{{obj.money}}</span>
            <span style="float: right;">x 1</span>
          </div> -->
          <div class="defailed2">
              <span style="color:#e76b6b">￥{{obj.money}}</span>
              <div class="jiajian">
                  <img src="../../assets/-.png" class="jian">
                  <span>x{{obj.num}}</span>
                  <img src="../../assets/+.png" class="jia">
              </div>
          </div>
        </div>
    </div>

      <div class="suan">
         <div class="gou gouquan">
             <img src="../../assets/gou2.png" alt="">
          </div>
          <div class="xuan">全选</div>
          <div class="heji">
            <span>合计：</span><span style="color: #ed601b"></span> 
            <p>(不含运费)</p>
          </div>
            <button class="jisuan">{{btn}}<span></span></button>
      </div>
    </div>
    <Navb isactive4="true"></Navb>
  </div> 

</template>

<script>
import Heade from '../commons/head.vue';
import Navb from '../commons/nav.vue';
export default {
  components: {
    Heade,
    Navb
  },
  data() {
    return{
      Shoparr:[
        {img:require("../../assets/cui.png"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true,num:1},
        {img:require("../../assets/muyu.png"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true,num:1},
        {img:require("../../assets/yagao.png"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true,num:1},
        {img:require("../../assets/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true,num:1},
        {img:require("../../assets/hetao.jpg"),name:"坚果特产山核桃奶油味碧根果210gx2袋",money:29.5,a:"1合6片",bol:true,num:1}
      ],
      truelen:0,//记录勾选了多少个
      btn:"结算",
    }
  },
mounted() { // 完成模块后运行
// var _this = this; 
// this.Shoparr = [];
// var ar = this.Shoparr;
// this.shuaxin({type:"obtain"},function(data){//获取数据库里的数据
//     console.log(data);
//     for (var i = 0; i < data.arr.length; i++) {
//         ar.push(data.arr[i]);//添加到数组
//         if (ar[i].bol=="true") {
//           ar[i].bol = true;
//         }else {
//           ar[i].bol = false;
//         }
//     }
// });//获取数据库里的数据




    var _arr = this; //保存this
    $("#cart .gouquan").eq(0).on("touchstart",function(){//点击全选
        for (var i=0;i<  _arr.Shoparr.length;i++) {//改变所有的布尔值为选中
           _arr.Shoparr[i].bol = false;
         }
         _arr.abc();//选了多少个
    })
    var pian = true
    var _this = this;
    var bol = true; //判断是否在编辑状态
    $("#cart .header a").eq(0).on("touchend",function(){
      pian = !pian
      if (pian) {  //是否在编辑状态
          $("#cart .header a").eq(0).html("编辑");
          for (var i = 0; i < _arr.Shoparr.length; i++) {
               $("#cart .jian").css("display","none")
               $("#cart .jia").css("display","none")
          }//加减号消失
           _this.btn = "结算"
           bol = true;
      }else {
          for (var i = 0; i < _arr.Shoparr.length; i++) {
               $("#cart .jian").css("display","inline-block");
               $("#cart .jia").css("display","inline-block");
          }//加减号出现
          $("#cart .header a").eq(0).html("完成")
          _this.btn = "删除";
          bol = false;
      }
    })
    $("#cart .jisuan").on("touchend",function(){ //点击结算或删除
      var k = 0;
        if (bol) {  //是结算

        }else {     //是删除
            for (var i=0;i<_this.Shoparr.length;i++) {
                if ( _this.Shoparr[i].bol == false) {
                   //  $.ajax({  //获取数据库里的数据
                   //    type:"GET",
                   //    url:"http://172.16.18.45/shenghuohome/commodity.php",
                   //    jsonp:"cb",
                   //    data:{type:"delete",id:_this.Shoparr[i].id},
                   //    dataType:"jsonp",
                   //    success:function(data){     
                   //      console.log(data);
                   //      // _this.shuaxin();//获取数据库里的数据
                   //    }
                   // })
                    _this.Shoparr.splice(i,1);
                    i--;
                    continue;
                }
            }
            _arr.abc()
        }
    })

    this.goarr();//点击加减改变单个商品的数量
    this.abc();//开始的时候选了那些商品
},
  computed:{// 实时计算 数据发生改变时运行
    
  },
  methods:{//函数写这里
    spot:function(index){
        var _this = this;
        this.Shoparr[index].bol = !this.Shoparr[index].bol //根据布尔值决定是否选中
        // this.shuaxin({type:"bol",id:_this.Shoparr[index].id,bol:_this.Shoparr[index].bol},function(data) {
        //   console.log(data);
        // })
        this.abc();//小勾选
    },
    abc:function(){   //小勾选
        var total = 0;
        var len = 0;
        this.truelen=0;
        for (var i=0;i<this.Shoparr.length;i++) {
          if (this.Shoparr[i].bol==true) {  //小勾选
               $("#cart .gou").eq(i).children()[0].src=require("../../assets/gou2.png"); 
           }else {
               $("#cart .gou").eq(i).children()[0].src=require("../../assets/gou.png"); 
               this.truelen++;//记录勾选了多少个
               total += this.Shoparr[i].money*this.Shoparr[i].num;//算选中的钱
               len += 1; //选中的个数
          }
        }
        this.ABC();
        $("#cart .heji span").eq(1).html("￥"+total.toFixed(2))//一共多少钱
        $("#cart .jisuan span").eq(0).html("（"+len+"）")//一共有多少项
    },
    panduan:function(index) {  //判断减号是否不能按
      if (this.Shoparr[index].num==1) {
          $("#cart .jian").eq(index).attr("src",require("../../assets/-2.png"));
      }else {
          $("#cart .jian").eq(index).attr("src",require("../../assets/-.png"));
      }
    },
goarr:function() {
    var this2 = this;//保存this
    for (var i=0;i<this.Shoparr.length;i++) {
        $("#cart .jian").eq(i).on("touchstart",function(){  //点击减
            $(this).css("transform","scale(0.5)");
        })
        $("#cart .jian").eq(i).on("touchend",function(){  //放手
            $(this).css("transform","scale(1)");
            if (this2.Shoparr[$(this).index(".jian")].num==1) {return;}//数量等于一后不让减了
            this2.Shoparr[$(this).index(".jian")].num--;//数量减
             this2.panduan($(this).index(".jian"))  //改动数量后减号图片是否改变
            this2.abc();  //点击时改变数量计算合计
            // this2.shuaxin({type:"num",num:this2.Shoparr[$(this).index(".jian")].num,id:this2.Shoparr[$(this).index(".jian")].id},function(data){
            //       console.log(data);
            // })//数据库里的num改变
        })

        $("#cart .jia").eq(i).on("touchstart",function(){ //点击加
            $(this).css("transform","scale(0.5)");
        })
        $("#cart .jia").eq(i).on("touchend",function(){   //放手
            $(this).css("transform","scale(1)");
            $("#cart .jian").eq($(this).index(".jia")).attr("src",require("../../assets/-.png"));//改动数量后减号图片是否改变
            this2.Shoparr[$(this).index(".jia")].num++;//数量加
            this2.abc();//点击时改变数量计算合计
            // this2.shuaxin({type:"num",num:this2.Shoparr[$(this).index(".jia")].num,id:this2.Shoparr[$(this).index(".jia")].id},function(data){
            //       console.log(data);
            // })//数据库里的num改变
        })
        this2.panduan(i)//刚打开页面的时候 减号是否灰色
    }
},
shuaxin:function(obj,cb){
  $.ajax({  //获取数据库里的数据
      type:"GET",
      url:"http://172.16.18.45/shenghuohome/commodity.php",
      jsonp:"cb",
      data:obj,
      // data:{"name":ar[i].name,"img":ar[i].img,"type":"chong","money":ar[i].money,"bol":ar[i].bol,"num":ar[i].num,"a":ar[i].a},
      dataType:"jsonp",
      success:function(data){
          cb(data)
      }
  })
},
    ABC:function(){     //全选按钮   
        if (this.truelen==this.Shoparr.length) {
           $("#cart .gouquan").eq(0).children()[0].src=require("../../assets/gou.png");
        }else {
           $("#cart .gouquan").eq(0).children()[0].src=require("../../assets/gou2.png");
        }
    },
  } //写函数结束点
} 

</script>

<style>
#cart .wrap{
  width: 100%;
  position: relative;
  padding-top: .85rem;
  padding-bottom: 2rem;
}
#cart .suan{
  width: 100%;
  height: 0.95rem;
  font-size: 0.3rem;
  position: fixed;
  bottom: 1rem;
  right: 0;
  left: 0;
  margin: auto;
  padding: 0 0.1rem;
  background-color: #ddd;
}
#cart .suan img{
  width: 100%;
}
#cart .suan .gou{
  width: 0.35rem;
  height: 0.35rem;
}
#cart .suan .xuan{
  height: 0.35rem;
  left: 7%;
}
#cart .suan .heji{
  width: 3rem;
  height: 0.8rem;
  left: 25%;
}
#cart .suan .heji span{
  display: inline-block;
  position: absolute;
  top: 0;

}
#cart .suan .heji span:nth-child(2){
  left: 30%;
  width: 2rem;
   white-space: nowrap;    /*不让换行*/
  overflow: hidden;
   text-overflow: ellipsis;  /*隐藏部分变成点点...*/
}
#cart .suan .heji p{
  font-size: 0.2rem;
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
}
#cart .suan .jisuan{
  width: 2.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 0.7rem;
  right: 2%;
  background-color: #ee4147;
  margin: auto;
  color: #fff;
  font-size: 0.32rem;
}
#cart .suan div{
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

#cart .goods{
  width: 100%;
  padding: 0.3rem 0.3rem;
  overflow: hidden;
  margin: auto;
  font-size: 0.3rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
#cart .goodss{
  float: left;
  width: 30%;
}
#cart .goods img{
  width: 100%;
}
#cart .gou{
  width: 0.35rem;
  display: inline-block;
}

#cart .goodsimg{
  width: 70%;
  display: inline-block;
}
#cart .defailed{
  width: 60%;
  float: left;
  line-height: 180%;
}
#cart .defailed div{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /*隐藏部分变成点点...*/
}
#cart .jiajian img{
  width: 14%;
  display: none;
}
#cart .jiajian span{
  padding: 5px;
  text-align: center;
}
#cart .jiajian {
  float: right;
  width: 2.5rem;
  text-align: right;
}
#cart .defailed2{
  width: 70%;
  float: left;
}
</style>
