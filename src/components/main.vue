<template>
  <div class="main">
    <div class="outer">
    <div class="header">
        <!--<div class="header-main">
          <div class="back_index"><img src="../assets/images/backindex.png" alt=""></div>
          </div>-->
        <div class="header-left diff-list"><span>以夏末为名</span>&nbsp;&nbsp;<span>退出</span></div>
        <div class="header-right">
          <ul class="right-list">
            <li class="list diff-list">我的便利<i class="childchoose "></i><span class="fenjie">|</span></li>          
            <li class="list ">会员<span class="fenjie">|</span></li>         
            <li class="list diff-list">手机APP<i class="childchoose "></i><span class="fenjie">|</span></li>   
            <li class="list diff-list">关注公众号<i class="childchoose "></i><span class="fenjie">|</span></li>       
            <li class="list diff-list">QQ服务<i class="childchoose "></i><span class="fenjie">|</span></li>
            <li class="list diff-list">平台客服<i class="childchoose"></i></li>
          </ul>
        </div>
    </div> 
    <div class="nav-bar-outer">
        <div class="nav-bar">
              <div class="back_index" style="float:left;"><img src="../assets/images/backindex.png" alt=""></div>
              <ul class="nav-list">
                <li class="nav-choose nav-index">首页</li>
                <li class="nav-choose nav-user">账户设置<i class="nav-user-choose"></i></li>
                <li class="nav-choose nav-news">消息<span class="tip-news">3</span></li>
                <li class="nav-choose nav-help">帮助</li>
              </ul>
        </div>
      </div>
    </div>
    <only></only>
  </div>
    
</template>

<script>
import jquery from "../assets/js/jquery.min.js"
import only from './only.vue'
export default {
  name: 'main',
  data () {
    return {}
  },
 created() {
        this.$nextTick(function(){
            // 便利淘、便利购、便利筹切换
          $(".main_outer .main_header_nav ul li div").click(function(){
              $(this).css({"color":"#fff","background":"url(../static/images/icon_tie2.png) no-repeat","transform":"translateY(7px)","transition":"transform 0.7s"});
              $(this).parent().siblings().find("div").css({"color":"#696969","background":"url(../static/images/icon_tie1.png) no-repeat","transform":"translateY(0px)","transition":"transform 0.7s"});
          });
        // 竖直导航菜单
        //  $(".left-menu a").click(function(){
        //    $(this).$router.go('https://www.baidu.com/');
        //  });
        })
    },
  components: {
    only
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
   .nav-bar .back_index{
     position: relative;
     display: block;
     width:68px;
     height:25px;
     border:1px solid #ffddc7;
     top:36px;
     left:215px;
     text-align: center;
     padding:0px 10px 0px 10px;
     border-radius: 15px;
     cursor:pointer;
   }
   .nav-bar .back_index img{
     margin-top:5px;
   }
   .mainbody-outer{
      background: #f5f5f5;
      overflow: hidden;
      /*border:1px solid red;*/
   }
   .main_outer .main_header_nav ul li{
     float:left;
     /*border:1px solid red;*/
     width:139px;
     height:53px;
     padding-top:25px;
     }
  .main_outer .main_header_nav ul li .cli{
    color:#fff;
    background:url(../assets/images/icon_tie2.png) no-repeat;
    transform:translateY(7px);
    transition:transform 0.7s;
  }
    .main_outer .main_header_nav ul li div{
        width:139px;
        height:43px;
        line-height: 43px;
        /*border:1px solid red;*/
        text-align: center;
        font-size: 17px;
        color:#696969;
        cursor: pointer;
        margin-top:5px;
        background: url(../assets/images/icon_tie1.png) no-repeat;
      }

    /*//用户信息*/
.user-info{height:136px;background: url("../assets/images/user_bg.png")no-repeat;}
.user-info .user-head{width: 265px;float: left;height: 100px;padding:20px 0px 20px 15px;}
.user-info .user-head .photo{padding: 2px;}
.user-info .user-head .photo img{border-radius: 100%;}
.user-info .user-head .info{margin-left:15px;margin-top:28px;}
.user-info .user-head .info .name{text-align:center;font-size: 18px;color: #333333;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 135px;}
.user-info .user-head .info .safety{color: #959595;margin-top: 5px;font-size:16px;text-align: center;}
.user-info .user-data{width:764px;height: 100px;float: left;padding:10px 50px; }
.user-info .user-data .year-rate{width: 195px;padding-top: 25px;float: left;margin-left: 15px;}
.user-info .user-data .year-rate .progress{height: 58px;margin-right: 10px;}
.user-info .user-data .year-rate .progress span{height: 58px;width: 8px;display: inline-block;background: #f0f0f0;border-radius: 10px;position: relative;}
.user-info .user-data .year-rate .progress span em{display: inline-block;position: absolute;bottom: 0;background: #fc6e1e;width: 8px;border-radius: 10px;}
.user-info .user-data  .tit{font-size: 16px;color: #a6a6a6;}
.user-info .user-data .year-rate .tit i{ background: url(../assets/images/user-icon.png);  background-position: -78px -3px;width: 17px;height: 17px;margin-bottom: -2px;margin-left: 8px;}
.user-info .user-data .rate em{font-size: 38px;color: #f3630a;font-weight: bold;}
.user-info .user-data .rate span{font-size: 14px;color: #fb6319;margin-left:3px;}
.user-info .user-data .year-rate .rate i{background-position: -42px 0 ;width: 25px;height: 32px;margin-left: 20px}
.user-info .user-data .year-rate .rate i.bottom{background-position: -42px -39px; }
.user-info .user-data .day-earnings{width: 250px;float: left;text-align: center;padding-top: 25px;}
.user-info .user-data .item{float: left;width: 100px;padding-top: 25px;text-align: center;}
.user-info .user-data .item .number{font-size:34px;color: #666666; }
.user-info .user-data .item .txt{color: #a6a6a6;font-family: "宋体" ;font-size:12px; }

   .mainbody{
      width: 1200px;
      margin: 0 auto;
      background: #f5f5f5;
      overflow: hidden;
      /*min-height:800px;*/
      height:100%;
      /*border:1px solid red;*/
   }
.mainbody .left-menu{width: 210px;background: #eeeeee;float: left}
.mainbody .left-menu .item{height:52px;line-height:52px;display: block;font-size: 16px;color: #696969;padding-left: 40px;position: relative;}
.mainbody .left-menu .item i{width:35px;height:24px;margin-bottom: -6px;margin-right: 10px;display: inline-block;}
.mainbody .left-menu .item i.i-0{background:url(../assets/images/000.png) no-repeat;}
.mainbody .left-menu .item i.i-1{background:url(../assets/images/001.png) no-repeat;}
.mainbody .left-menu .item i.i-2{background:url(../assets/images/002.png) no-repeat;}
.mainbody .left-menu .item i.i-3{background:url(../assets/images/003.png) no-repeat;}
.mainbody .left-menu .item i.i-4{background:url(../assets/images/004.png) no-repeat;}
.mainbody .left-menu .item i.i-5{background:url(../assets/images/005.png) no-repeat;}
.mainbody .left-menu .item i.i-6{background:url(../assets/images/006.png) no-repeat;}
.mainbody .left-menu .item i.i-7{background:url(../assets/images/006.png) no-repeat;}
.mainbody .left-menu .item i.i-8{background:url(../assets/images/007.png) no-repeat;}
.mainbody .left-menu .item i.i-9{background:url(../assets/images/008.png) no-repeat;}
.mainbody .left-menu .item i.i-10{background:url(../assets/images/009.png) no-repeat;}
.mainbody .left-menu .item.active{background: #fff;color:#ff7b3f;}
.mainbody .left-menu .item.active em{display: inline;width:3px;height: 24px;background: #ff7b3f;position: absolute;left: 0;top: 14px;border-radius:50px;}
.right-con{width: 888px;float: left;padding: 0 50px 30px;background: #fff;min-height: 490px;}
.mainbody .left-menu .item:hover{background: #fff;color:#ff7b3f;}
.mainbody .left-menu .item:hover  em{display: inline;width:3px;height: 24px;background: #ff7b3f;position: absolute;left: 0;top: 14px;border-radius: 5px;}

.main_right{float:left;width:1000px;margin-left:8px;}
.main_right .index{color:#f08e39;height:45px;line-height: 45px;margin-left:20px;font-weight: 600;} 
.main_right .index a{height:100%;display: block;float:left;margin-left:15px;}
.main_right .index i{content:"";background: url(../assets/images/index.png) no-repeat;display: block;width:24px;height:22px;position: relative;top:12px;left:5px;float:left;}
.main_right .content{width:980px;height:480px;background-color:#fff; margin-left:20px;}
.right-con ul{width:70%;padding:50px 0px 50px 20px;height:28%;}
.right-con  ul li{float: left;margin-left:40px;cursor:pointer;}
.xiaopiao{display: block;width:250px;height:142px;background: url(../assets/images/xiaopiao.png) no-repeat;}
.tixian{display: block;width:250px;height:142px;background: url(../assets/images/tixian.png) no-repeat;}
.right-con  ul li .tie{text-indent:4px;font-size:14px;display: block;width:30px;height:30px;position: relative;top:-23px;left:241px;background: url(../assets/images/tie.png)no-repeat;line-height: 30px;color:#fff;}
</style>
