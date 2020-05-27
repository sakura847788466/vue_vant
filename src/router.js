import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/login',
  },,
  {
    path: '/login',
    name: 'login',
    component:()=>import('./page/Login/Login')
  }, {
    path: '/home',
    name: 'home',
    component:()=>import('./page/Home/Home'),
    children:[
      {
        path: '/home/mine',
        name: 'mine',
        component: ()=>import('./page/Mine/Mine')
      }, {
        path: '/home/shopList',
        name: 'shopList',
        component:()=>import('./page/ShopList/ShopList')
      },
      {
        path: '/home/bindPrint',
        name: 'bindPrint',
        component:()=>import('./page/BindPrint/BindPrint')
      },{
        path: '/home/shouye',
        name: 'shouye',
        component:()=>import('./page/Shouye/Shouye')
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component:()=>import('./page/Register/Register')
  }]
export default new Router({
  mode: 'history',
  routes
})
