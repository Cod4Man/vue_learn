<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--<router-link to="/about" replace>关于</router-link>-->
    <button @click="goHome">首页</button>
    <a href="#" @click="goAbout">关于</a>
    <router-link to="/home/zhangsan" tag="button">首页带id, id为：{{$route.params.id}}</router-link>
    <router-view></router-view>
    <hr>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
      goHome() {
          console.log('goHome');
          this.$router.push('/home')
      },
      goAbout() {
          console.log('goAbout');
          this.$router.replace('/about')
      }
  }
}
</script>

<style>
.router-link-active {
  color: red;
}

.active {
  color: yellow;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
