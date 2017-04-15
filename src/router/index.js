
// 这里面负责写路由映射，便于管理


// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



// 创建路由实例并配置路由映射  
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  routes:[{
      path: '/member', component: require('../components/member.vue')
  },{
      path: '/orderManage', component: require('../components/orderManage.vue')
  },{
      path:'*',redirect:'/member'
  }]
})


// 输出router
export default router;
