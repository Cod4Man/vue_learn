<template>
    <div id="main-interface">
      <span>{{message}}</span>
    </div>
</template>

<script>
    export default {
      name: "MainInterface",
      props:
        {
          message:{
            type: String,
            required: true,
            default: 'hello'
          }
        }
    }
</script>

<style scoped>
  @import "../css/menubar.css";
</style>
