import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')

// 注入组件
Vue.use(VueRouter)
// 配置router
const routes = [
    {
        path: '',
        redirect: '/home' // 重定向
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/home/:id',
        component: Home
    }

]
// 创建router实例
const router = new VueRouter({
    routes,
    mode: 'history', // 默认是hash模式，url会带#
    linkActiveClass: 'active2'
})
// 导出路由
export default router

