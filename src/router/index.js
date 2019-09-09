import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/login/login'
import home from '@/view/home/home'
import bag from '@/view/bag/bag'
import mine from '@/view/mine/mine'
import fenlei from '@/view/fenlei/fenlei'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: home
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
    }
  ]
})
