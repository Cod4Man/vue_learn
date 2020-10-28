import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMusic = () => import('../components/HomeMusic.vue')
const About = () => import('../components/About.vue')
const Profile = () => import('../components/Profile.vue')

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
        component: Home,
        children: [
            {
                path: '',
                redirect: 'news'
            },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'music',
                component: HomeMusic
            }
        ],
        meta: {
            title: '首页Home'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于About'
        }
    },
    {
        path: '/home/:id',
        component: Home,
        meta: {
            title: '首页Home'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '我的profile'
        }
    }

]
// 创建router实例
const router = new VueRouter({
    routes,
    mode: 'history', // 默认是hash模式，url会带#
    linkActiveClass: 'active2'
})

router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = to.matched[0].meta.title
    next()
})
// 导出路由
export default router

