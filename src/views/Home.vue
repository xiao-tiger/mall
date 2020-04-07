<template>
  <div class="home">
    <nav-header></nav-header>
    <!-- 很多页面都需要加载导航栏和尾部，所以这样嵌套路由，要甚事多了 -->
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'

export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
   
  }
}
</script>
