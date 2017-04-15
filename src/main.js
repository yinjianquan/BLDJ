// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Index from './page/index'
// import list from './page/list'
// import Home from './page/home'
// import Account from './page/account'
import "./assets/css/main.css"

Vue.config.productionTip = false
// var router = new router()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// router.map({
//   //默认指向index
//   '/':{
//     name:'index',
//     component:Index,
//     //子路由(有页底)
//     subRoutes:{
//       '/home':{
//         name:'home',
//         component:Home
//       },
//       '/account':{
//         name:'account',
//         component:Account
//       }
//     }
//   },
//   //没有footer
//   '/list':{
//     name:'list',
//     component:list
//   }
// })
// //启动一个启用了路由的应用
// router.start(App,'app')