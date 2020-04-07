import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Detail from '../views/Detail.vue'
import Production from '../views/Production.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Order from '../views/Order.vue'
import OrderPay from '../views/OrderPay.vue'
import OrderList from '../views/OrderList.vue'
import OrderConfirm from '../views/OrderConfirm.vue'
import Alipay from '../views/AliPay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 'production/:id',
        name: 'production',
        component: Production
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'list',
        name: 'list',
        component: OrderList
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: Alipay
      }
    ]
  }   
]

const router = new VueRouter({
  routes
})

export default router
