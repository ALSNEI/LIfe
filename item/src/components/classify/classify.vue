<template>
  <div id="classify">
    <Heade title="分类"></Heade>
    <div class="wrap">
    
    <!-- <div class="header"></div> --><!-- header -->
    <div class="content">
      <div class="classy">
        <ul class="classify">
          <li class="classifyli">
            <span id="cf1">生活食品</span>
            <div class="daosanjiao"></div>
            <ul class="classifyf">
              <li class="classifylis classifylis1" v-for="obj in arr3">
              {{obj.classcons}}
              </li>
            </ul>
          </li>
          <li class="classifyli">
            <span id="cf2">综合排序</span>
            <div class="daosanjiao"></div>
            <ul class="classifys">
              <li class="classifylis classifylis2" v-for="obj in arr4">
              {{obj.sort}}
              </li>
            </ul>
          </li>
          <li class="classifyli">
            <span id="cf3">销量优先</span>
            <div class="daosanjiao"></div>
            <ul class="classifyx">
              <!-- <li class="classifylis" v-for="obj in arr3"> -->
              <!-- {{obj.classcons}} -->
              </li>
            </ul>
          </li>
        </ul>
      </div>
      

      <div class="con conm con2">
        <a class="cona" href="###" v-for="obj in arr_a" id="class1">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>
      </div>
      <div class="con con2">
          <a class="cona" href="###" v-for="obj in arr_b" id="class2">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>
      </div>
      <div class="con con2">
          <a class="cona" href="###" v-for="obj in arr_c" id="class3">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>
      </div>

      <!--  -->

      <div class="con con1">
          <a class="cona" href="###" v-for="obj in arr_1">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>
      </div>
      <div class="con con1">
          <a class="cona" href="###" v-for="obj in arr_2">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>
      </div>
      <div class="con con1">
          <a class="cona" href="###" v-for="obj in arr_3">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>
      </div>
      <div class="con con1">
          <a class="cona" href="###" v-for="obj in arr_4">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>
      </div>
      <div class="con con1">
          <a class="cona" href="###" v-for="obj in arr_5">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>
      </div>
      <div class="con con1">
          <a class="cona" href="###" v-for="obj in arr_6">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>
      </div>
      <div class="con con1">
          <a class="cona" href="###" v-for="obj in arr_7">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>
      </div>
      <div class="con con1">
          <a class="cona" href="###" v-for="obj in arr_8">
          <div class="product">
              <div class="products"><img v-bind:src="obj.img"></div>
            <p>{{obj.p}}</p>
            <span class="span1">￥{{obj.span1}}</span>
            <span class="span2">原价:￥<span style="text-decoration:line-through">{{obj.span2}}</span></span>

            </div>
          </a>

      </div><!-- con -->
      
    </div><!-- content -->
    <div class="meng"></div>
  </div><!-- wrap -->
      <Navb isactive3="true"></Navb>
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
      // 数组数据
      arr_a:[
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"29.5",span2:"42.5",id:5},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"29.5",span2:"42.5",id:6},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋3",span1:"23.5",span2:"42.5",id:4},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋4",span1:"2.5",span2:"42.5",id:1},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋5",span1:"19.5",span2:"42.5",id:3},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋6",span1:"29.5",span2:"42.5",id:7}
      ],
      arr_b:[
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋4",span1:"2.5",span2:"42.5",id:1},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋5",span1:"19.5",span2:"42.5",id:3},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋3",span1:"23.5",span2:"42.5",id:4},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"29.5",span2:"42.5",id:5},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"29.5",span2:"42.5",id:6},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋6",span1:"29.5",span2:"42.5",id:7}
      ],
      arr_c:[
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋6",span1:"29.5",span2:"42.5",id:7},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"29.5",span2:"42.5",id:6},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"29.5",span2:"42.5",id:5},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋3",span1:"23.5",span2:"42.5",id:4},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋5",span1:"19.5",span2:"42.5",id:3},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋4",span1:"2.5",span2:"42.5",id:1}
      ],
      arr_1:[
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"29.5",span2:"42.5",id:5},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"29.5",span2:"42.5",id:6},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋3",span1:"23.5",span2:"42.5",id:4},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋4",span1:"2.5",span2:"42.5",id:1}
      ],
      arr_2:[
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"29.5",span2:"42.5",id:5},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"29.5",span2:"42.5",id:6}
      ],
      arr_3:[
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"29.5",span2:"42.5",id:5}
      ],
      arr_4:[
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"29.5",span2:"42.5",id:5},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"29.5",span2:"42.5",id:6}
      ],
      arr_5:[
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"29.5",span2:"42.5",id:5},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"29.5",span2:"42.5",id:6}
      ],
      arr_6:[
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2}
      ],
      arr_7:[
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"29.5",span2:"42.5",id:6}
      ],
      arr_8:[
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋",span1:"9.5",span2:"42.5",id:2},
        {img:require("../../assets/lingshi.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋1",span1:"29.5",span2:"42.5",id:5},
        {img:require("../../assets/hetao.jpg"),p:"坚果特产山核桃奶油味碧根果210gx2袋2",span1:"29.5",span2:"42.5",id:6}
      ],
      arr2:[
        {classcon:"生活食品"},
        {classcon:"价格从高到低"},
        {classcon:"销量优先"}
      ],
      arr3:[
        {classcons:"美食"},
        {classcons:"美酒"},
        {classcons:"家居"},
        {classcons:"百货"},
        {classcons:"家电"},
        {classcons:"汽车配件"},
        {classcons:"箱包"},
        {classcons:"珠宝"}
      ],
      arr4:[
        {sort:"综合排序"},
        {sort:"价格从低到高"},
        {sort:"价格从高到低"}
      ]
    }
  },
  mounted() {
      var classifyli = document.querySelectorAll(".classifyli");
    var classifydiv = document.querySelectorAll(".classifyli div");
    var meng = document.querySelector(".meng");
    var index = 0;
    var bol = true;
    var bol1 = true;

    //分类
    classifyli[0].onclick = function(){
      $(".classifys").css("display","none");
      bol1 = true;
      for(var j = 0; j < classifyli.length; j++){
        classifyli[j].style.color = "#666";
      }
      if (bol) {
        $(".classifyf").slideDown();
        bol = false;
        $(".meng").fadeIn();
      }
      else{
        $(".classifyf").slideUp();
        bol = true;
        $(".meng").fadeOut();
      }
      this.style.color = "#f29004";
    }
    // 排序
    classifyli[1].onclick = function(){
      $(".classifyf").css("display","none");
      bol = true;
      for(var j = 0; j < classifyli.length; j++){
        classifyli[j].style.color = "#666";
      }
      if (bol1) {
        $(".classifys").slideDown();
        bol1 = false;
        $(".meng").fadeIn();
      }
      else{
        $(".classifys").slideUp();
        bol1 = true;
        $(".meng").fadeOut();
      }
      this.style.color = "#f29004";
    }
    $(".meng").on("click",function(){
      $(".classifyf").slideUp();
      $(".classifys").slideUp();
      $(".meng").fadeOut();
      bol = true;
      bol1 = true;
    })

/******************** 分割线 - 上面函数为以前写的原生，下面函数时后来写的jq *******************/ 



    for(let i = 0; i < $(".classifylis1").length; i++){
      $(".classifylis1").on("click",function(){
        var $txt = $(".classifyli").eq($(this).index()).innerText;
        console.log($txt)
        for(let k = 0; k < $(".con1").length; k++){
          $(".con1").eq(k).css("display","none")
          $(".con2").eq(k).css("display","none")
        }
        $(".classifylis1").eq(i).css("background","#f2f2f2")
        $(".classifylis1").eq(i).css("color","#333")
        $(".con1").eq($(this).index()).css("display","block")
        $(this).css("color","#fff")
        $(this).css("background","#f29004")
        $("#cf1").text($(this).text());
      })
    }

    for(let j = 0; j < $(".classifylis2").length; j++){
      $(".classifylis2").on("click",function(){
        // console.log($(".classifylis2").eq(j))
        for(let l = 0; l < $(".con1").length; l++){
          $(".con2").eq(l).css("display","none")
          $(".con1").eq(l).css("display","none")
        }
        $(".classifylis2").eq(j).css("color","#333")
        $(".con2").eq($(this).index()).css("display","block")
        $(this).css("color","#f29004")
        console.log($(this).text())
        $("#cf2").text($(this).text());
        // console.log($("#cf2"))
      })
    }
  },
}

</script>

<style>
#classify .content{margin-top: .85rem; width: 100%; position: relative; overflow: hidden; padding-bottom:.88rem; }
#classify .con{ margin:1rem .2rem .2rem; position: relative; /*bottom: .98rem;*/ overflow: hidden; }
#classify .con .cona{ display: inline-block; width: 3.48rem; height: 4.89rem; }
#classify .con .product{ width: 3.48rem; height: 4.89rem; float: left; background-color: white; margin-bottom: .15rem; overflow: hidden; position: relative;  }
#classify .con .cona:nth-child(2n-1){ margin-right: .14rem; }


#classify .products{ width: 3.48rem; height: 3.48rem; }
#classify .products img{ width: 100%; }
#classify .product p{ font-size: .3rem; color: #1a1a1a; width: 90%; padding: 5%; line-height: .34rem; }
#classify .span1{ font-size: .28rem; color: #de0000; position: absolute; bottom: 1%; left: 5%; }
#classify .span2{ font-size: .24rem; color: #8a8a8a; position: absolute; bottom: 1%; left: 35%; }

#classify .classy{position: fixed; width: 100%; height: .84rem; border-bottom:1px solid #dbdbdb; background-color: #fff; line-height: .82rem; font-size: .3rem; color: #666; z-index: 8; }
#classify .content ul{ list-style: none; z-index: 8; float: left; }
#classify .classify{ position: relative; }
#classify .classifyli{ width: calc(100vw / 3); text-align: center; }
#classify .content li{ float: left; height: .84rem; }
#classify .classifyli ul{ display: none; }
#classify .classifyf{ width: 100vw; background-color: #fff; padding: .1rem; border-top: 2px solid #dbdbdb; position: absolute; top: .84rem; left: 0; }
#classify .classifyf li{ width: 1.32rem; height: .54rem; border-radius: .07rem; float: left;  border-radius: .2rem; background-color: #f2f2f2; margin: .15rem .25rem; line-height: .54rem; color: #333; }

#classify .classifys{ width: 100vw; background-color: #fff; padding: .1rem; border-top: 2px solid #dbdbdb; position: absolute; top: .84rem; left: 0; border:1px solid #ddd; }
#classify .classifys li{ width: 100vw; height: .64rem; line-height: .64rem; color: #333; border-bottom: 1px solid #ddd; text-align: left; padding-left: .2rem; }
#classify .classifys li:last-child{ border:none; }

/*倒三角*/
#classify .classifyli div{ width: 0; height: 0; border-width: .12rem .12rem 0rem .12rem; border-color: #999 transparent; border-style: solid; position: absolute; top: .34rem; }
#classify .classifyli:nth-child(1) div{ left: 1.9rem; }
#classify .classifyli:nth-child(2) div{ left: 4.7rem; }
#classify .classifyli:nth-child(3) div{ left: 6.9rem; }

#classify .dsjactive{ background-color: #f29004; }

#classify .meng{ width: 100vw; height: 100vh; background:rgba(0,0,0,.7); display: none; z-index: 3; position: absolute; top: 0.85rem; }
</style>
