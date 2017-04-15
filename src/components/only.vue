<template>
    <div class="mainbody-outer"> 
      <div class="main_outer" style="width:1198px;margin:0 auto;">
          <div class="main_header_nav" style="height:78px;">
            <ul>
               <li><div>便利购</div></li>
               <li><div class="cli">便利淘</div></li>
               <li><div>便利筹</div></li>
            </ul>
          </div>
          <div class="main_header_info user-info" style="width:100%;">
            <div class="user-head">
            <div class="fl photo"><a href="/index.php?act=member&op=avatar" ><img src="http://upload.lexiangquan.com/shop/common/default_user_portrait.gif" width="94"></a></div>
            <div class="fl info">
                <p class="name">150123456754</p>
                <p class="safety">超级管理员</p>
            </div>
            </div>
            <div class="user-data">
                <div class="year-rate clearfix">
                    <div class="fl progress"><span><em style="height: 80%;"></em></span></div>
                    <div class="fl">
                        <p class="tit">年化收益<i></i></p>
                        <p class="rate"><em>0</em><span>(%)</span></p>
                    </div>
                        <i style="display: inline-block; background:url(../static/images/mywallet.png) no-repeat;background-position:-31px -432px ; width: 24px; height: 34px; margin-left: 25px; margin-top: 21px;"></i>
                </div>
                <div class="day-earnings">
                    <p class="tit">今日收益</p>
                    <p class="rate"><em>0.007</em></p>
                </div>
                <div class="item already">
                    <p class="number">0</p>
                    <p class="txt">已存入订单</p>
                </div>
                <div class="item doingNow">
                    <p class="number">0</p>
                    <p class="txt">订单进行中</p>
                </div>
                <div class="item outDate">
                    <p class="number">0</p>
                    <p class="txt">无效订单</p>
                </div>
                </div>
              </div>
           <!--主题内容-->
            <div class="mainbody">
                <div class="left-menu">
                  <router-link class="item " id="my"   :to="{name: 'orderManage'}" @click="toggle" :class="{'router-link-active':isA == 'my'}"><i class="i-0"><em></em></i><span>我的便利淘</span></router-link>
                  <router-link class="item " id="Order"  :to="{name: 'member'}" @click="toggle" :class="{'router-link-active':isA == 'Order'}"><i class="i-1" ><em></em></i><span>用户订单管理</span></router-link>
                  <a class="item " id="userP"  @click="toggle" :class="{'router-link-active':isA == 'userP'}"><i class="i-2" ><em></em></i><span>用户收益管理</span></a>
                  <a class="item " id="wit"  @click="toggle" :class="{'router-link-active':isA == 'wit'}"><i class="i-3" ><em></em></i><span>用户提现管理</span></a>
                  <a class="item " id="Profit"  @click="toggle" :class="{'router-link-active':isA == 'Profit'}"><i class="i-4" ><em></em></i><span>推广收益管理</span></a>
                  <a class="item " id="subsidy"  @click="toggle" :class="{'router-link-active':isA == 'subsidy'}"><i class="i-5" ><em></em></i><span>推广补贴管理</span></a>
                  <a class="item " id="Rebate"  @click="toggle" :class="{'router-link-active':isA == 'Rebate'}"><i class="i-7" ><em></em></i><span>商户返佣管理</span></a>
                  <a class="item " id="Sign"  @click="toggle" :class="{'router-link-active':isA == 'Sign'}"><i class="i-8" ><em></em></i><span>签约商户管理</span></a>
                  <a class="item " id="vip"  @click="toggle" :class="{'router-link-active':isA == 'vip'}"><i class="i-9" ><em></em></i><span>会员收费管理</span></a>
                  <a class="item " id="son"  @click="toggle" :class="{'router-link-active':isA == 'son'}"><i class="i-10" ><em></em></i><span>子账号管理</span></a>
                </div>
                <div class="right-con">
                   <router-view></router-view>
                   <!--<ul>
                     <li><div class="xiaopiao"><i class="tie">16</i></div></li>
                     <li><div class="tixian"></div></li>
                   </ul>-->
                  
                 </div>

        </div>
      </div>
     
   </div>
  </div>
</template>

<script>
export default {
  // name: 'only',
  data () {
    return {
      isA:false
    }
  },
  methods:{
    toggle:function(e){
      let isA = e.currentTarget.id;
      this.isA = isA;
      // e.currentTarget.isA = !currentTarget.isA;
    }
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
    }
 
}
</script>

<style>
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
.mainbody .left-menu .item.router-link-active{background: #fff;color:#ff7b3f;}
.mainbody .left-menu .item.router-link-active em{display: inline;width:3px;height: 24px;background: #ff7b3f;position: absolute;left: 0;top: 14px;border-radius:50px;}
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