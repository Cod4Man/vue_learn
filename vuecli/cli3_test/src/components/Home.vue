<template>
    <div>
        <h2>这个是Home组件</h2>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/music">音乐</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>