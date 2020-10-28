<template>
    <div class="menubar-detail" @click="detailBarClick">
      <div class="menubar-img">
        <slot name="menubar-img"></slot>
      </div>
      <div class="menubar-font">
        <slot name="menubar-font"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MenuDetailBar",
      props:{
          path:{
            type: String
          },
          name:{
            type: String
          }
      },
      methods: {
        detailBarClick() {
          console.log("asdasds" + this.path)
          this.$router.replace({
            path: this.path,
            query: {
              name : this.name
            }
          })
        }
      }
    }
</script>

<style scoped>
@import "../css/menubar.css";
</style>
