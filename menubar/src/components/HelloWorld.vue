<template>
  <div class="hello">
    <router-view></router-view>
    <menu-bar>
      <menu-detail-bar path="/cart">
        <img src="../img/cart-full.svg" slot="menubar-img">
        <div slot="menubar-font">购物车</div>
      </menu-detail-bar>
      <menu-detail-bar path="/profile">
        <img src="../img/bussiness-man.svg" slot="menubar-img">
        <div slot="menubar-font">个人中心</div>
      </menu-detail-bar>
    </menu-bar>
  </div>
</template>

<script>
  const router = import('../router')
  const MenuBar = () => import(/* webpackChunkName: "about" */ './MenuBar.vue')
  const MenuDetailBar = () => import(/* webpackChunkName: "about" */ './MenuDetailBar.vue')
export default {
  name: 'HelloWorld',
  components: {
    MenuBar,
    MenuDetailBar
  },
  router:router

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
