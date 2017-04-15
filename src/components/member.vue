<template>
    <ul>
          <li><div class="xiaopiao"><i class="tie">16</i></div></li>
          <li><div class="tixian"></div></li>
    </ul>
</template>

<script>

// mounted 钩子函数  这里去请求豆瓣数据

export default {
  name: 'member',
  // data () {
  //   return {
  //     msg: '电影列表',
  //     articles:[]
  //   }
  // },
  created:function(){  //这里mounted和created生命周期函数区别
    //  this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
    //     headers: {

    //     },
    //     emulateJSON: true
    // }).then(function(response) {
    //   // 这里是处理正确的回调
    //     console.log(response);
    //     this.articles = response.data.subjects
    //     // this.articles = response.data["subjects"] 也可以

    // }, function(response) {
    //     // 这里是处理错误的回调
    //     console.log(response)
    // });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.home{
  color:red;
}*/
.right-con ul{width:70%;padding:50px 0px 50px 20px;height:28%;}
.right-con  ul li{float: left;margin-left:40px;cursor:pointer;}
.xiaopiao{display: block;width:250px;height:142px;background: url(../assets/images/xiaopiao.png) no-repeat;}
.tixian{display: block;width:250px;height:142px;background: url(../assets/images/tixian.png) no-repeat;}
.right-con  ul li .tie{text-indent:4px;font-size:14px;display: block;width:30px;height:30px;position: relative;top:-23px;left:241px;background: url(../assets/images/tie.png)no-repeat;line-height: 30px;color:#fff;}
</style>