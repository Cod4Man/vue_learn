<template>
  <div class="App">
    <router-view></router-view>
    <hr>
    <menu-bar>
      <menu-detail-bar path="/cart" name="购物车Name">
        <img src="./img/cart-full.svg" slot="menubar-img">
        <div slot="menubar-font">购物车</div>
      </menu-detail-bar>
      <menu-detail-bar path="/profile" name="个人中心Name">
        <img src="./img/bussiness-man.svg" slot="menubar-img">
        <div slot="menubar-font">个人中心</div>
      </menu-detail-bar>
    </menu-bar>

  </div>
</template>

<script>
  const router = import('./router')
  const MenuBar = () => import(/* webpackChunkName: "about" */ './components/MenuBar.vue')
  const MenuDetailBar = () => import(/* webpackChunkName: "about" */ './components/MenuDetailBar.vue')
  export default {
    name: 'App',
    components: {
      MenuBar,
      MenuDetailBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
