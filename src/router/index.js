import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login/login'
import home from '@/view/home/home'
import bag from '@/view/bag/bag'
import mine from '@/view/mine/mine'
import fenlei from '@/view/fenlei/fenlei'
import shopdetail from '@/view/shopdetail/shopdetail'
import order from '@/view/order/order'
import service from '@/view/service/service'
import foster from '@/view/service/common/foster'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/bag',
      name: 'bag',
      component: bag
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path:"/shopdetail",
      name:"shopdetail",
      component:shopdetail
    },
    {
      path:"/order",
      name:"order",
      component:order
    },
    {
      path:"/service",
      name:"service",
      component:service,
      children:[
        {
          path:"/",
          component:foster
        }
      ]
    }
  ]
})
