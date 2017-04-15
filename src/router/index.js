import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import main from '@/components/main'
import only from '@/components/only'
import orderManage from '@/components/orderManage'
import member from '@/components/member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/only',
      name: 'only',
      component: only,
      children:[
        {       
          path: '/only/orderManage',
          name: 'orderManage',
          component: orderManage
        },
        {
          path: '/only/member',
          name: 'member',
          component: member
        }
      ]
    }

  ]
})
