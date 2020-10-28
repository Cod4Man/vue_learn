<!--
  菜单组件外层
  add by zhanghongjie 20201020 for 菜单组件
  @date: 2020年10月20日
-->
<template>
      <div id="menubar-main">
        <slot></slot>
      </div>
</template>

<script>
    export default {
        name: "MenuBar"
    }
</script>

<style scoped>
  @import "../css/menubar.css";
</style>
